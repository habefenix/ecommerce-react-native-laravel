<?php

namespace App\Repositories\Eloquent;

use App\Models\Products;
use App\Models\Categories;

use App\Repositories\ProductsRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ProductsRepository extends BaseRepository implements ProductsRepositoryInterface
{
    public function __construct(Products $model)
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

        $query->with('image');
        $query->with('categories');
        $query->with('more_products');

        if (isset($params['filter'])) {
            $filter = $params['filter'];

            if (isset($filter['title'])) {
                $query->where('title', 'like', '%'.$filter['title'].'%');
            }

            if (isset($filter['description'])) {
                $query->where('description', 'like', '%'.$filter['description'].'%');
            }

            if (isset($filter['priceRange'])) {
                [$start, $end] = $filter['priceRange'];

                if (!empty($start)) {
                    $query->where('price', '>=', $start);
                }

                if (!empty($end)) {
                    $query->where('price', '<=', $end);
                }
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
            $products = Products::create([
                    'title' => $attributes['title'] ?? null
,
                    'price' => $attributes['price'] ?? null
,
                    'discount' => $attributes['discount'] ?? null
,
                    'description' => $attributes['description'] ?? null
,
                    'rating' => $attributes['rating'] ?? null
,
                    'status' => $attributes['status'] ?? null
,
                    'created_by_user' => $currentUser->id
                ]);

            $categories = Categories::find($attributes['categories']);
            $products->categories()->sync($categories);

            $more_products = Products::find($attributes['more_products']);
            $products->more_products()->sync($more_products);

            if (isset($attributes['image'])) {
                foreach ($attributes['image'] as &$item) {
                    if (isset($item['new'])) {
                        unset($item['new']);
                        $item['belongsTo_column'] = 'image';
                        $products->image()->create($item);
                    }
                }
            }

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
            $products = Products::find($id);
            $products->update([
                    'title' => $attributes['title'] ?? null
,
                    'price' => $attributes['price'] ?? null
,
                    'discount' => $attributes['discount'] ?? null
,
                    'description' => $attributes['description'] ?? null
,
                    'rating' => $attributes['rating'] ?? null
,
                    'status' => $attributes['status'] ?? null
,
                    'updated_by_user' => $currentUser->id
                ]);

            $categories = Categories::find($attributes['categories']);
            $products->categories()->sync($categories);

            $more_products = Products::find($attributes['more_products']);
            $products->more_products()->sync($more_products);

            if (isset($attributes['image'])) {
                foreach ($attributes['image'] as &$item) {
                    if (isset($item['new'])) {
                        unset($item['new']);
                        $item['belongsTo_column'] = 'image';
                        $products->image()->create($item);
                    }
                }
            }

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
            ->with('image')
            ->with('categories')
            ->with('more_products')
            ->where('id', $id);

        return $query->get()[0];
    }

    public function findAllAutocomplete(array $params)
    {
        $query = $this->model->newModelQuery();

        $query->select('*', 'title as label');

        if (isset($params['query'])) {
            $query->where('title', 'like', '%'.$params['query'].'%');
        }

        if (isset($params['limit'])) {
            $query->limit($params['limit']);
        }

        $query->orderBy('title', 'ASC');

        return $query->get()
            ->map(fn($item) => ['id' => $item->id, 'label' => $item->label]);
    }
}

