<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Card
 *
 * @property int $id
 * @property string $uuid
 * @property int $theme_id
 * @property int $language_id
 * @property int $greeting_id
 * @property string $song
 * @property string $sender_f_name
 * @property string $sender_l_name
 * @property string $email_from
 * @property string $email_to
 * @property string $message
 * @property int $notify
 * @property string $delivery_date
 * @property string|null $first_image
 * @property string|null $second_image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Greeting $greeting
 * @property-read \App\Models\Language $language
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Recipient[] $recipients
 * @property-read int|null $recipients_count
 * @property-read \App\Models\Theme $theme
 * @method static \Illuminate\Database\Eloquent\Builder|Card newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Card newQuery()
 * @method static \Illuminate\Database\Query\Builder|Card onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Card query()
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereDeliveryDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereEmailFrom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereEmailTo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereFirstImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereGreetingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereLanguageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereNotify($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereSecondImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereSenderFName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereSenderLName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereSong($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereThemeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Card whereUuid($value)
 * @method static \Illuminate\Database\Query\Builder|Card withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Card withoutTrashed()
 */
	class Card extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Greeting
 *
 * @property int $id
 * @property string $uuid
 * @property int $language_id
 * @property string $greeting
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting newQuery()
 * @method static \Illuminate\Database\Query\Builder|Greeting onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting query()
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereGreeting($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereLanguageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Greeting whereUuid($value)
 * @method static \Illuminate\Database\Query\Builder|Greeting withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Greeting withoutTrashed()
 */
	class Greeting extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Language
 *
 * @property int $id
 * @property string $uuid
 * @property string $abbreviation
 * @property string $language
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Greeting[] $greetings
 * @property-read int|null $greetings_count
 * @method static \Illuminate\Database\Eloquent\Builder|Language newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language newQuery()
 * @method static \Illuminate\Database\Query\Builder|Language onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Language query()
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereAbbreviation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereLanguage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereUuid($value)
 * @method static \Illuminate\Database\Query\Builder|Language withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Language withoutTrashed()
 */
	class Language extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Recipient
 *
 * @property int $id
 * @property int $card_id
 * @property string $email
 * @property int $sent
 * @property int $viewed
 * @property string|null $viewed_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Card $card
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient newQuery()
 * @method static \Illuminate\Database\Query\Builder|Recipient onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient query()
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereCardId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereSent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereUuid($uuid, $uuidColumn = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereViewed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recipient whereViewedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Recipient withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Recipient withoutTrashed()
 */
	class Recipient extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Theme
 *
 * @property int $id
 * @property string $uuid
 * @property string $name
 * @property string $primary_image
 * @property string|null $top_image
 * @property string|null $bottom_image
 * @property string|null $left_image
 * @property string|null $right_image
 * @property string|null $top_left_image
 * @property string|null $bottom_left_image
 * @property string|null $top_right_image
 * @property string|null $bottom_right_image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|Theme newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Theme newQuery()
 * @method static \Illuminate\Database\Query\Builder|Theme onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Theme query()
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereBottomImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereBottomLeftImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereBottomRightImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereLeftImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme wherePrimaryImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereRightImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereTopImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereTopLeftImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereTopRightImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theme whereUuid($value)
 * @method static \Illuminate\Database\Query\Builder|Theme withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Theme withoutTrashed()
 */
	class Theme extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

