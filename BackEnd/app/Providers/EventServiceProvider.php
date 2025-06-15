<?php
// app/Providers/EventServiceProvider.php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * Mapeamento de eventos e listeners do aplicativo.
     *
     * @var array
     */
    protected $listen = [
        // 'App\Events\EventoExemplo' => [
        //     'App\Listeners\ListenerExemplo',
        // ],
    ];

    /**
     * Registre qualquer evento para sua aplicação.
     */
    public function boot(): void
    {
        parent::boot();
    }
}
