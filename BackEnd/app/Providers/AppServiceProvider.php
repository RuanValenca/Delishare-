<?php
// app/Providers/AppServiceProvider.php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Aqui você pode registrar services no container
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Aqui você pode executar código na inicialização do app
    }
}
