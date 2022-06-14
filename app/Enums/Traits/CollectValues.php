<?php

namespace App\Enums\Traits;

use Illuminate\Support\Collection;

trait CollectValues
{
    public static function all(): Collection
    {
        return collect(self::cases())->map(fn (self $code) => $code->value);
    }
}
