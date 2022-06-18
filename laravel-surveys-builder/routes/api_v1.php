<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\JWTAuthController;
use App\Http\Controllers\Api\V1\User\UserController;




    Route::post('/login',[JWTAuthController::class, 'login'])->name("login");
    Route::post('/submit_answers',[UserController::class, 'submitAnswers'])->name("submitAnswers");
    
    Route::group(['middleware' => 'auth.jwt'], function($router) {

        Route::post('/logout',[JWTAuthController::class, 'logout'])->name("logout");
        Route::post('/create_survey',[UserController::class, 'createSurvey'])->name("createSurvey");

        
        
    });


