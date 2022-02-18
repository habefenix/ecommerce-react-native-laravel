<?php

namespace App\Repositories\Eloquent;

use App\Models\Promocodes;
use App\Models\Products;

use App\Repositories\PromocodesRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class PromocodesRepository extends BaseRepository implements PromocodesRepositoryInterface
{
    public function __construct(Promocodes $model)
    {
        parent::__construct($model);
    }

    public function findAll($params) : array
    {
        $limit = 0;
        $offset = 0;
        $orderBy = null;

        $query = $this->model->newModelQuery();
        //$query->select("*", "product as prod_id");

        $query->with('products');

        if (isset($params['filter'])) {
            $filter = $params['filter'];

            if (isset($filter['code'])) {
                $query->where('code', 'like', '%'.$filter['code'].'%');
            }

            if (isset($filter['discountRange'])) {
                [$start, $end] = $filter['discountRange'];

                if (!empty($start)) {
                    $query->where('discount', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('discount', '<=', $end);
                }
            }

            if (isset($filter['active'])) {
                $query->where('active', $params['active']);
            }

            if (isset($filter['createdAtRange'])) {
                [$start, $end] = $filter['createdAtRange'];

                if (!empty($start)) {
                    $query->where('created_at', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('created_at', '<=', $end);
                }
            }
        }

        if ($limit) {
            $query->limit($limit);
        }

        $rows = $query->get();

        return [
            'rows' => $rows->toArray(),
            'count' => $rows->count(),
        ];
    }

    public function create(array $attributes, $currentUser)
    {
        try {
            $attributes = $attributes['data'];
            DB::beginTransaction();
            $attributes['created_by_user'] = $currentUser->id;
            $promocodes = Promocodes::create([
                    'code' => $attributes['code'] ?? null
,
                    'discount' => $attributes['discount'] ?? null
,
                    'created_by_user' => $currentUser->id
                ]);

            $products = Products::find($attributes['products']);
            $promocodes->products()->sync($products);

            DB::commit();

            return [];
        } catch (Exception $exception) {
            DB::rollback();
        }
    }

    public function update($id, array $attributes, $currentUser)
    {
        try {
            $attributes = $attributes['data'];
            DB::beginTransaction();
            $promocodes = Promocodes::find($id);
            $promocodes->update([
                    'code' => $attributes['code'] ?? null
,
                    'discount' => $attributes['discount'] ?? null
,
                    'updated_by_user' => $currentUser->id
                ]);

            $products = Products::find($attributes['products']);
            $promocodes->products()->sync($products);

            DB::commit();

            return [];
        } catch (Exception $exception) {
            DB::rollback();
        }
    }

    public function destroy($id)
    {
        return $this->model->destroy($id);
    }

    public function findById($id)
    {
        $query = $this->model->newModelQuery();

        $query
            ->with('products')
            ->where('id', $id);

        return $query->get()[0];
    }

    public function findAllAutocomplete(array $params)
    {
        $query = $this->model->newModelQuery();

        $query->select('*', 'code as label');

        if (isset($params['query'])) {
            $query->where('code', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('code', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

