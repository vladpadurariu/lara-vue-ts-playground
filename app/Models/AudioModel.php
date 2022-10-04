<?php

namespace App\Models;

use App\Http\Resources\AudioResource;
use Dyrynda\Database\Support\BindsOnUuid;
use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class AudioModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    use GeneratesUuid;
    use BindsOnUuid;

    private function cards(): HasMany
    {
        return $this->hasMany(Card::class);
    }

    public function toResource(): AudioResource
    {
        return AudioResource::make($this);
    }
}
