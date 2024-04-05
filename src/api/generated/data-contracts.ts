/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Сериализатор дя вывода информации о тренерах.
 * Выводятся все поля, за исключением birthday.
 */
export interface Coach {
  id: number;
  /** @maxLength 64 */
  surname: string;
  /** @maxLength 64 */
  name: string;
  /** @maxLength 64 */
  patronymic?: string;
  /** @maxLength 400 */
  achievements?: string;
  directions: Direction[];
  /** @format uri */
  photo?: string | null;
}

export interface ContentNews {
  id: number;
  /** @format uri */
  image: string;
  /** @maxLength 120 */
  title_photo?: string | null;
  /** @maxLength 50 */
  author_photo?: string | null;
  /** @format date */
  date_photo?: string | null;
}

export interface ContentPost {
  /** @format uri */
  image?: string;
}

export interface Direction {
  id: number;
  /** @maxLength 64 */
  title: string;
}

export interface NewsItem {
  id: number;
  /** @maxLength 120 */
  title: string;
  description: string;
  tags: Tag[];
  /**
   * Дата и время публикации (с отсрочкой)
   * @format date-time
   */
  date_published: string;
  images: ContentNews[];
}

export interface PaginatedCoachList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Coach[];
}

export interface PaginatedNewsList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: NewsItem[];
}

export interface PaginatedPostList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: PostItem[];
}

export interface PostItem {
  id: number;
  tags: Tag[];
  images: ContentPost[];
  text: string;
  /** @maxLength 255 */
  short_description: string;
  /** @format date-time */
  publication_date: string;
}

export interface Tag {
  id: number;
  /** @maxLength 254 */
  name: string;
}
