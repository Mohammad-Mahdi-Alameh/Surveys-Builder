<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->insert([
            'name' => 'Text',

        ]);
        DB::table('types')->insert([
            'name' => 'Choices',

        ]);
        DB::table('types')->insert([
            'name' => 'Checkbox',

        ]);
        DB::table('types')->insert([
            'name' => 'Dropdown',

        ]);
        DB::table('types')->insert([
            'name' => 'Linear Scale',

        ]);
        
        DB::table('types')->insert([
            'name' => 'Date',

        ]);
        DB::table('types')->insert([
            'name' => 'Time',

        ]);
        
        DB::table('types')->insert([
            'name' => 'Range',

        ]);
        
        DB::table('types')->insert([
            'name' => 'Image',

        ]);
    }
}
