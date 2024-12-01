<?php

namespace App\Http\Controllers;
// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('access-control-allow-methods: POST');
// header('access-control-allow-headers: x-xsrf-token');
// header('access-control-allow-credentials: true');
use App\Http\Controllers\Controller;
use App\Http\Requests\ImportCsvRequest;
use App\Imports\CsvDataImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class ImportCsvController extends Controller
{
    //
    public function importCsv(ImportCsvRequest $importCsvRequest) {
        
        $datas = Excel::toCollection(new CsvDataImport(), $importCsvRequest->file('csv_file'));
        $csvData = [];
        $columnDetails = [
            'product_name' => 'string',
            'price' => 'double',
            'sku' => 'string',
            'description' => 'string'
        ];
        $errorMessages = [];
        $rowCounter = 2;
        foreach($datas[0] as $datas) {
            $dataSet = [];
            foreach($columnDetails as $key => $columnDetail) {
                if(gettype($datas[$key]) == $columnDetail) {
                    $dataSet[$key] = $datas[$key];
                } else {
                    $errorMessages[] = __('Data in column :column should be type of :type in row :row, Given data type is :given', [
                        'column' => $key,
                        'type' => $columnDetail,
                        'row' => $rowCounter,
                        'given' => gettype($datas[$key])
                    ]);
                }                
            }
            if(count($dataSet) == count($columnDetails)) {
                $csvData[] = $dataSet;
            }            
            $rowCounter++;
        }
        
        return response()->json(['csv_data' => $csvData, 'errors' => $errorMessages]);
    }
}
