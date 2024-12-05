<?php

namespace App\Imports;

use App\Models\ProductList;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CsvDataImport implements ToCollection, WithHeadingRow, ToModel
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
    }

    public function model(array $datas)
   {
            ProductList::create([
                'product_name' => $datas['product_name'],
                'price' => $datas['price'],
                'sku' => $datas['sku'],
                'description' => $datas['description']
            ]);
   }
}
