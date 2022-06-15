<?php

namespace App\Actions;

use App\Actions\Traits\AsAction;
use App\Http\Resources\LanguageResource;
use App\Models\Language;
use Inertia\Inertia;
use Inertia\Response;

class RenderLanguages
{
    use AsAction;

    public function asController(): Response
    {
        $languages = Language::all();

        return Inertia::render('ChooseLanguage', ['languages' => LanguageResource::collection($languages)]);
    }
}
