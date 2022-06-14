<?php

namespace App\Models;

use App\Http\Resources\GreetingResource;
use Dyrynda\Database\Support\BindsOnUuid;
use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Greeting extends Model
{
    use HasFactory;
    use SoftDeletes;
    use GeneratesUuid;
    use BindsOnUuid;

    private function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }

    private function cards(): HasMany
    {
        return $this->hasMany(Card::class);
    }

    public function toResource(): GreetingResource
    {
        return GreetingResource::make($this);
    }
}
