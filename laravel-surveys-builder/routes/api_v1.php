<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\JWTAuthController;
use App\Http\Controllers\Api\V1\User\UserController;
use App\Http\Controllers\Api\V1\Admin\AdminController;



Route::group(['prefix' => 'user'] , function(){

    Route::post('/submit_answers',[UserController::class, 'submitAnswers'])->name("submitAnswers");
    Route::get('/get_surveys',[UserController::class, 'getSurveys'])->name("getSurveys");
    Route::get('/get_questions/{survey_name?}',[UserController::class, 'getQuestions'])->name("getQuestions");
    
    
}); 

Route::group(['prefix' => 'admin'] , function(){

    Route::post('/login',[JWTAuthController::class, 'login'])->name("login");
    
    Route::group(['middleware' => 'auth.jwt'], function($router) {
    
        Route::post('/logout',[JWTAuthController::class, 'logout'])->name("logout");
        Route::post('/create_survey',[AdminController::class, 'createSurvey'])->name("createSurvey");
        Route::post('/add_question',[AdminController::class, 'addQuestion'])->name("addQuestion");
        Route::get('/get_questions/{survey_name?}',[AdminController::class, 'getQuestions'])->name("getQuestions");
        Route::get('/get_surveys',[AdminController::class, 'getSurveys'])->name("getSurveys");
    
});
});
