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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('theme_id')->constrained('themes')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('language_id')->constrained('languages')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('greeting_id')->constrained('greetings')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('audio_id')->constrained('audios')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('sender_f_name');
            $table->string('sender_l_name');
            $table->string('email_from');
            $table->text('email_to');
            $table->string('message');
            $table->tinyInteger('notify')->default(0);
            $table->timestamp('delivery_date');
            $table->string('first_image')->nullable();
            $table->string('second_image')->nullable();
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
        Schema::dropIfExists('cards');
    }
};
