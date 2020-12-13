<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// TODO: add other CRUD options later if admin functionality required
Route::apiResource('question', QuestionController::class)->only(['index']);
Route::post('answer', 'AnswerController@store');
Route::get('result/{id}', 'AnswerController@result');
