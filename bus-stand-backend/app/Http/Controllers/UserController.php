<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function register(Request $req){
        $users=new User;
        $users->email=$req->input('email');
        $users->password=Hash::make($req->input('password'));
        $users->save();
        return $req->input();
    }
}
