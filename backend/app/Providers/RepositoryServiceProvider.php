<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Eloquent\BaseRepository;
use App\Repositories\EloquentRepositoryInterface;

use App\Repositories\UsersRepositoryInterface;
use App\Repositories\Eloquent\UsersRepository;
use App\Repositories\ProductsRepositoryInterface;
use App\Repositories\Eloquent\ProductsRepository;
use App\Repositories\CategoriesRepositoryInterface;
use App\Repositories\Eloquent\CategoriesRepository;
use App\Repositories\OrdersRepositoryInterface;
use App\Repositories\Eloquent\OrdersRepository;
use App\Repositories\ReviewsRepositoryInterface;
use App\Repositories\Eloquent\ReviewsRepository;
use App\Repositories\PromocodesRepositoryInterface;
use App\Repositories\Eloquent\PromocodesRepository;
use App\Repositories\FilesRepositoryInterface;
use App\Repositories\Eloquent\FilesRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);

        $this->app->bind(UsersRepositoryInterface::class, UsersRepository::class);

        $this->app->bind(ProductsRepositoryInterface::class, ProductsRepository::class);

        $this->app->bind(CategoriesRepositoryInterface::class, CategoriesRepository::class);

        $this->app->bind(OrdersRepositoryInterface::class, OrdersRepository::class);

        $this->app->bind(ReviewsRepositoryInterface::class, ReviewsRepository::class);

        $this->app->bind(PromocodesRepositoryInterface::class, PromocodesRepository::class);
        $this->app->bind(FilesRepositoryInterface::class, FilesRepository::class);
    }
}

