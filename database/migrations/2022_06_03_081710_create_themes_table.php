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
        Schema::create('themes', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('name')->unique();
            $table->string('primary_image');
            $table->string('top_image')->nullable();
            $table->string('bottom_image')->nullable();
            $table->string('left_image')->nullable();
            $table->string('right_image')->nullable();
            $table->string('top_left_image')->nullable();
            $table->string('bottom_left_image')->nullable();
            $table->string('top_right_image')->nullable();
            $table->string('bottom_right_image')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('themes');
    }
};
