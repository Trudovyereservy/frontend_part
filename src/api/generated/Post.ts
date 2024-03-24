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

import { PaginatedPostList, Post } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class PostItems<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Вьюсет для работы с постами.
   *
   * @tags post
   * @name PostList
   * @request GET:/post/
   * @secure
   */
  postList = (
    query?: {
      /** Number of results to return per page. */
      limit?: number;
      /** A page number within the paginated result set. */
      page?: number;
      /** Multiple values may be separated by commas. */
      tags_ids?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedPostList, any>({
      path: `/post/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Вьюсет для работы с постами.
   *
   * @tags post
   * @name PostRetrieve
   * @request GET:/post/{id}/
   * @secure
   */
  postRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Post, any>({
      path: `/post/${id}/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
