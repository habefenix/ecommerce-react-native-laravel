<?php

namespace App\Repositories\Eloquent;

use App\Models\Reviews;
use App\Models\Products;
use App\Models\Users;

use App\Repositories\ReviewsRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ReviewsRepository extends BaseRepository implements ReviewsRepositoryInterface
{
    public function __construct(Reviews $model)
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

        $query->with('product');
        $query->with('user');

        if (isset($params['filter'])) {
            $filter = $params['filter'];

            if (isset($filter['body'])) {
                $query->where('body', 'like', '%'.$filter['body'].'%');
            }

            if (isset($filter['ratingRange'])) {
                [$start, $end] = $filter['ratingRange'];

                if (!empty($start)) {
                    $query->where('rating', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('rating', '<=', $end);
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
            $reviews = Reviews::create([
                    'body' => $attributes['body'] ?? null
,
                    'rating' => $attributes['rating'] ?? null
,
                    'product' => $attributes['product'] ?? null
,
                    'user' => $attributes['user'] ?? null
,
                    'created_by_user' => $currentUser->id
                ]);

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
            $reviews = Reviews::find($id);
            $reviews->update([
                    'body' => $attributes['body'] ?? null
,
                    'rating' => $attributes['rating'] ?? null
,
                    'product' => $attributes['product'] ?? null
,
                    'user' => $attributes['user'] ?? null
,
                    'updated_by_user' => $currentUser->id
                ]);

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
            ->with('product')
            ->with('user')
            ->where('id', $id);

        return $query->get()[0];
    }

    public function findAllAutocomplete(array $params)
    {
        $query = $this->model->newModelQuery();

        $query->select('*', 'body as label');

        if (isset($params['query'])) {
            $query->where('body', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('body', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

