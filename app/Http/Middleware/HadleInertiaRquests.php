<?php

namespace app\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'localization' => function () {
                $locales = config('app.locales');

                return [
                    'defaultLocale' => config('app.fallback_locale'),
                    'locale' => collect($locales)->where('code', app()->getLocale())->first(),
                    'locales' => $locales,
                    'translations' => Lang::get('*'),
                ];
            },
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'data' => fn () => $request->session()->get('data'),
            ],
        ]);
    }
}
