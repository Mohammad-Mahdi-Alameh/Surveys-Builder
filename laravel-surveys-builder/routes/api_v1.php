<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\JWTAuthController;




    Route::post('/login',[JWTAuthController::class, 'login'])->name("login");
        
    Route::group(['middleware' => 'auth.jwt'], function($router) {
        
        Route::post('/logout',[JWTAuthController::class, 'logout'])->name("logout");
        
        
    });


