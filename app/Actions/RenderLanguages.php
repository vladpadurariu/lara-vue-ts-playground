<?php

namespace App\Actions;

use App\Actions\Traits\AsAction;
use App\Models\Language;
use Inertia\Inertia;
use Inertia\Response;
use Lorisleiva\Actions\ActionRequest;

class RenderLanguages
{
    use AsAction;

    public function asController(Language $language, ActionRequest $request): Response
    {
        $this->set('language', $language);

        return Inertia::render('ChooseLanguage', ['language' => $language->toResource()]);
    }
}
