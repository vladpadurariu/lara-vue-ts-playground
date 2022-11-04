<?php

namespace App\Models;

use App\Http\Resources\AudioResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Audio extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'audios';

    private function cards(): HasMany
    {
        return $this->hasMany(Card::class);
    }

    public function toResource(): AudioResource
    {
        return AudioResource::make($this);
    }
}
