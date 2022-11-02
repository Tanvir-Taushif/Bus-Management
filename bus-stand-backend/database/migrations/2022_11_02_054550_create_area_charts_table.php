<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('area_charts', function (Blueprint $table) {
            $table->id();
            $table->string('BUP');
            $table->string('Shahbag');
            $table->string('Kakrail');
            $table->string('Arambag');
            $table->string('Motijheel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('area_charts');
    }
};
