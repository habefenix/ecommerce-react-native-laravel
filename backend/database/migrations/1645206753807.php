<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Migration1645206753807 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

                Schema::create('users', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                Schema::create('products', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('products', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('categories', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('categories', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('orders', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('orders', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('reviews', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('reviews', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('promocodes', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('promocodes', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('firstName')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('lastName')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('phoneNumber')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('email')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->enum('role', ['admin','user'])->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->boolean('disabled')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('password')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->boolean('emailVerified')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('emailVerificationToken')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->timestamp('emailVerificationTokenExpiresAt')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('passwordResetToken')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->timestamp('passwordResetTokenExpiresAt')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('provider')->nullable();

                });

                Schema::table('products', function (Blueprint $table) {
                    $table->string('title')->nullable();

                });

                Schema::table('products', function (Blueprint $table) {
                    $table->decimal('price')->nullable();

                });

                Schema::table('products', function (Blueprint $table) {
                    $table->decimal('discount')->nullable();

                });

                Schema::table('products', function (Blueprint $table) {
                    $table->string('description')->nullable();

                });

                Schema::table('products', function (Blueprint $table) {
                    $table->integer('rating')->nullable();

                });

                Schema::table('products', function (Blueprint $table) {
                    $table->enum('status', ['in stock','out of stock'])->nullable();

                });

                Schema::table('categories', function (Blueprint $table) {
                    $table->string('title')->nullable();

                });

                Schema::table('orders', function (Blueprint $table) {
                    $table->timestamp('order_date')->nullable();

                });

                Schema::table('orders', function (Blueprint $table) {
                    $table->unsignedBigInteger('product')->nullable();

                    $table->foreign('product')->references('id')->on('products');

                });

                Schema::table('orders', function (Blueprint $table) {
                    $table->unsignedBigInteger('user')->nullable();

                    $table->foreign('user')->references('id')->on('users');

                });

                Schema::table('orders', function (Blueprint $table) {
                    $table->integer('amount')->nullable();

                });

                Schema::table('orders', function (Blueprint $table) {
                    $table->enum('status', ['in cart','bought'])->nullable();

                });

                Schema::table('reviews', function (Blueprint $table) {
                    $table->string('body')->nullable();

                });

                Schema::table('reviews', function (Blueprint $table) {
                    $table->integer('rating')->nullable();

                });

                Schema::table('reviews', function (Blueprint $table) {
                    $table->unsignedBigInteger('product')->nullable();

                    $table->foreign('product')->references('id')->on('products');

                });

                Schema::table('reviews', function (Blueprint $table) {
                    $table->unsignedBigInteger('user')->nullable();

                    $table->foreign('user')->references('id')->on('users');

                });

                Schema::table('promocodes', function (Blueprint $table) {
                    $table->string('code')->nullable();

                });

                Schema::table('promocodes', function (Blueprint $table) {
                    $table->decimal('discount')->nullable();

                });

    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {

                Schema::table('promocodes', function(Blueprint $table) {
                    $table->dropColumn('products');
                });

                Schema::table('promocodes', function(Blueprint $table) {
                    $table->dropColumn('discount');
                });

                Schema::table('promocodes', function(Blueprint $table) {
                    $table->dropColumn('code');
                });

                Schema::table('reviews', function(Blueprint $table) {
                    $table->dropColumn('user');
                });

                Schema::table('reviews', function(Blueprint $table) {
                    $table->dropColumn('product');
                });

                Schema::table('reviews', function(Blueprint $table) {
                    $table->dropColumn('rating');
                });

                Schema::table('reviews', function(Blueprint $table) {
                    $table->dropColumn('body');
                });

                Schema::table('orders', function(Blueprint $table) {
                    $table->dropColumn('status');
                });

                Schema::table('orders', function(Blueprint $table) {
                    $table->dropColumn('amount');
                });

                Schema::table('orders', function(Blueprint $table) {
                    $table->dropColumn('user');
                });

                Schema::table('orders', function(Blueprint $table) {
                    $table->dropColumn('product');
                });

                Schema::table('orders', function(Blueprint $table) {
                    $table->dropColumn('order_date');
                });

                Schema::table('categories', function(Blueprint $table) {
                    $table->dropColumn('title');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('status');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('rating');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('more_products');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('categories');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('description');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('discount');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('price');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('image');
                });

                Schema::table('products', function(Blueprint $table) {
                    $table->dropColumn('title');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('provider');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('passwordResetTokenExpiresAt');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('passwordResetToken');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('emailVerificationTokenExpiresAt');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('emailVerificationToken');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('emailVerified');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('password');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('avatar');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('disabled');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('role');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('email');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('phoneNumber');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('lastName');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('firstName');
                });

                Schema::drop('promocodes');

                Schema::drop('reviews');

                Schema::drop('orders');

                Schema::drop('categories');

                Schema::drop('products');

                Schema::drop('users');

    }
}
