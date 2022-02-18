<?php

namespace App\Repositories\Eloquent;

use App\Models\Orders;
use App\Models\Products;
use App\Models\Users;

use App\Repositories\OrdersRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class OrdersRepository extends BaseRepository implements OrdersRepositoryInterface
{
    public function __construct(Orders $model)
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

            if (isset($filter['order_dateRange'])) {
                [$start, $end] = $filter['order_dateRange'];

                if (!empty($start)) {
                    $query->where('order_date', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('order_date', '<=', $end);
                }
            }

            if (isset($filter['amountRange'])) {
                [$start, $end] = $filter['amountRange'];

                if (!empty($start)) {
                    $query->where('amount', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('amount', '<=', $end);
                }
            }

            if (isset($filter['active'])) {
                $query->where('active', $params['active']);
            }

            if (isset($filter['status'])) {
                $query->where('status', $filter['status']);
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
            $orders = Orders::create([
                    'order_date' => $attributes['order_date'] ?? null
,
                    'product' => $attributes['product'] ?? null
,
                    'user' => $attributes['user'] ?? null
,
                    'amount' => $attributes['amount'] ?? null
,
                    'status' => $attributes['status'] ?? null
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
            $orders = Orders::find($id);
            $orders->update([
                    'order_date' => $attributes['order_date'] ?? null
,
                    'product' => $attributes['product'] ?? null
,
                    'user' => $attributes['user'] ?? null
,
                    'amount' => $attributes['amount'] ?? null
,
                    'status' => $attributes['status'] ?? null
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

        $query->select('*', 'order_date as label');

        if (isset($params['query'])) {
            $query->where('order_date', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('order_date', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

