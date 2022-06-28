<?php

namespace App\Actions;

use App\Actions\Traits\AsAction;
use App\Http\Resources\GreetingResource;
use App\Http\Resources\ThemeResource;
use App\Models\Greeting;
use App\Models\Language;
use App\Models\Theme;
use Inertia\Inertia;
use Inertia\Response;
use Lorisleiva\Actions\ActionRequest;

class RenderCreateCard
{
    use AsAction;

    public function asController(ActionRequest $request, $language): Response
    {
        $language = Language::where('abbreviation', $language)->first();
        $greetings = Greeting::where('language_id', $language->id)->get();
        $themes = Theme::all();

        return Inertia::render('CreateCard',
            [
                'greetings' => GreetingResource::collection($greetings),
                'themes' => ThemeResource::collection($themes),
            ]
        );
    }
}
