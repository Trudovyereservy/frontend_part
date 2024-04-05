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

import { PaginatedPostList, PostItem } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Posts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Вьюсет для работы с постами.
   *
   * @tags posts
   * @name Posts
   * @request GET:/posts/
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
      path: `/posts/`,
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
    this.request<PostItem, any>({
      path: `/posts/${id}/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
