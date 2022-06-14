<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ThemeResource extends JsonResource
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
            'name' => $this->name,
            'primary_image' => $this->primary_image,
            'top_image' => $this->top_image,
            'bottom_image' => $this->bottom_image,
            'left_image' => $this->left_image,
            'right_image' => $this->right_image,
            'top_left_image' => $this->top_left_image,
            'bottom_left_image' => $this->bottom_left_image,
            'top_right_image' => $this->top_right_image,
            'bottom_right_image' => $this->bottom_right_image,
        ];
    }
}
