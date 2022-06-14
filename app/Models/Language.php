<?php

namespace App\Models;

use App\Http\Resources\LanguageResource;
use Dyrynda\Database\Support\BindsOnUuid;
use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Language extends Model
{
    use HasFactory;
    use SoftDeletes;
    use GeneratesUuid;
    use BindsOnUuid;

    public function greetings(): HasMany
    {
        return $this->hasMany(Greeting::class);
    }

    public function toResource(): LanguageResource
    {
        return LanguageResource::make($this);
    }
}
