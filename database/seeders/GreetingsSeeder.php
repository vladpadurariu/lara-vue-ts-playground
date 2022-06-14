<?php

namespace Database\Seeders;

use App\Imports\GreetingsImport;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class GreetingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Excel::import(new GreetingsImport(), database_path('imports/greetings.csv'));
    }
}
