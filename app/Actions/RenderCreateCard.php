<?php

namespace App\Actions;

use App\Actions\Traits\AsAction;
use App\Models\Greeting;
use App\Models\Theme;
use Inertia\Inertia;
use Inertia\Response;

class RenderCreateCard
{
    use AsAction;

    public function asController(Greeting $greeting, Theme $theme): Response
    {
        $this
            ->set('greeting', $greeting)
            ->set('theme', $theme);

        return Inertia::render('CreateCard', [
            'greeting' => $greeting->toResource(),
            'theme' => $theme->toResource()
        ]);
    }
}
