<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model {
    protected static $unguarded = true;

    public function categories(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Categories::class, 
        'products_categories_categories', 'products_id', 'categories_id');
    }
    public function more_products(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Products::class, 
        'products_more_products_products', 'products_id', 'more_products_id');
    }

    public function image()
    {
        return $this->morphMany(Files::class, 'belongsTo')->where('belongsTo_column', '=', 'image');
    }
}

