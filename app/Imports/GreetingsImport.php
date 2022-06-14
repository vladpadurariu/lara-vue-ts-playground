<?php

namespace App\Imports;

use App\Models\Greeting;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpsertColumns;
use Ramsey\Uuid\Uuid;

class GreetingsImport implements ToModel, WithHeadingRow, WithUpsertColumns
{
    public function upsertColumns()
    {
        return [
            'greeting',
            'language_id',
        ];
    }

    public function model(array $row)
    {
        return new Greeting([
            'uuid' => Uuid::uuid4()->toString(),
            'language_id' => $row['language_id'],
            'greeting' => $row['greeting'],

        ]);
    }
}
