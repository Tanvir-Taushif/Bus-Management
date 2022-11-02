<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AreaChartController extends Controller
{
    public function index(){
        $charts=AreaChart::all();

        return response()->json([
            'Message'=>"Data Fetch Successfull",
            "Data"=>$charts
        ]);
    }
}
