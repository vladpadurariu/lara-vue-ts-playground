<?php

namespace Database\Seeders;

use App\Imports\LanguagesImport;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Excel::import(new LanguagesImport(), database_path('imports/languages.csv'));
    }
}
