/* eslint-disable no-use-before-define */
import type { ResourceTypeEnum, ModelTypeEnum } from '@/enums';

export interface LanguageResource {
  __typename: ResourceTypeEnum.Language;
  uuid: string;
  abbreviation: string;
  language: string;
}

export interface GreetingResource {
  __typename: ResourceTypeEnum.Greeting;
  uuid: string;
  greeting: string;
  language: LanguageResource;
}

export interface ThemeResource {
  __typename: ResourceTypeEnum.Theme;
  uuid: string;
  name: string;
  year: string;
  primary_image: string;
  top_image: string;
  bottom_image: string;
  left_image: string;
  right_image: string;
  top_left_image: string;
  bottom_left_image: string;
  top_right_image: string;
  bottom_right_image: string;
}

export interface CardResource {
  __typename: ResourceTypeEnum.Card;
  uuid: string;
  song: string;
  sender_f_name: string;
  sender_l_name: string;
  message: string;
  notify: boolean;
  delivery_date: string;
  first_image: string;
  second_image: string;
  theme: ThemeResource;
  language: LanguageResource;
  greeting: GreetingResource;
}

export interface AudioResource {
  __typename: ResourceTypeEnum.Audio;
  name: string;
  source: string;
}
