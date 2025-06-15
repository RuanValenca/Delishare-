<?php

use Illuminate\Support\Facades\Route;        // ← importe o Route
use App\Http\Controllers\Auth\RegisterController;

Route::post('/register', [RegisterController::class, 'register']);
