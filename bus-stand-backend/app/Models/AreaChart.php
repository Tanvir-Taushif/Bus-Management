<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AreaChart extends Model
{
    use HasFactory;

    protected $fillable=['BUP','Shahbag','Kakrail','Arambag','Motijheel'];
}
