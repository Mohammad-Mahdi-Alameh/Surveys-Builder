<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => Str::random(10),
            'password' => Hash::make('@sefactory'),
            'is_admin' => '1',

        ]);
    }
}
