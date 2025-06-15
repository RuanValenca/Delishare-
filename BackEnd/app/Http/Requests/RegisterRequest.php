<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Permite qualquer um acessar esse request
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'min:8',
                'regex:/[A-Z]/',     // Pelo menos uma letra maiúscula
                'regex:/[0-9]/',     // Pelo menos um número
                'regex:/[\W]/',      // Pelo menos um caractere especial
            ],
        ];
    }

    public function messages()
    {
        return [
            'password.regex' => 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.',
        ];
    }
}
