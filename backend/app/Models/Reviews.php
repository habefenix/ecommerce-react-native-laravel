<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reviews extends Model {
    protected static $unguarded = true;

    public function product(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Products::class, 'product');
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Users::class, 'user');
    }

}

