<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'notes',
        'start_date',
        'end_date',
        'user_id',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
