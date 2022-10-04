<?php

namespace App\Imports;

use App\Models\Theme;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpsertColumns;
use Ramsey\Uuid\Uuid;

class ThemesImport implements ToModel, WithHeadingRow, WithUpsertColumns
{
    public function upsertColumns()
    {
        return [
            'name',
            'year',
            'primary_image',
            'top_image',
            'bottom_image',
            'left_image',
            'right_image',
            'top_left_image',
            'bottom_left_image',
            'top_right_image',
            'bottom_right_image',
        ];
    }

    public function model(array $row)
    {
        return new Theme([
            'uuid' => Uuid::uuid4()->toString(),
            'name' => $row['name'],
            'year' => $row['year'],
            'primary_image' => $row['primary_image'],
            'top_image' => $row['top_image'],
            'bottom_image' => $row['bottom_image'],
            'left_image' => $row['left_image'],
            'right_image' => $row['right_image'],
            'top_left_image' => $row['top_left_image'],
            'bottom_left_image' => $row['bottom_left_image'],
            'top_right_image' => $row['top_right_image'],
            'bottom_right_image' => $row['bottom_right_image']
        ]);
    }
}
