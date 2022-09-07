<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            '__typename' => self::class,
            'uuid' => $this->uuid,
            'song' => $this->song,
            'sender_f_name' => $this->sender_f_name,
            'sender_l_name' => $this->sender_l_name,
            'message' => $this->message,
            'notify' => $this->notify,
            'delivery_date' => $this->delivery_date,
            'first_image' => $this->first_image,
            'second_image' => $this->second_image,
            'theme' => ThemeResource::collection($this->whenLoaded('theme')),
            'language' => LanguageResource::collection($this->whenLoaded('language')),
            'greeting' => GreetingResource::collection($this->whenLoaded('greeting')),
        ];
    }
}
