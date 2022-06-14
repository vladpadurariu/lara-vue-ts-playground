<?php

namespace App\Imports;

use App\Models\Language;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpsertColumns;
use Ramsey\Uuid\Uuid;

class LanguagesImport implements ToModel, WithHeadingRow, WithUpsertColumns
{
    public function upsertColumns()
    {
        return [
            'abbreviation',
            'description',
        ];
    }

    public function model(array $row)
    {
        return new Language([
            'uuid' => Uuid::uuid4()->toString(),
            'abbreviation' => $row['abbreviation'],
            'language' => $row['description'],
        ]);
    }
}
