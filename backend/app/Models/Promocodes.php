<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promocodes extends Model {
    protected static $unguarded = true;

    public function products(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Products::class, 
        'promocodes_products_products', 'promocodes_id', 'products_id');
    }

}

