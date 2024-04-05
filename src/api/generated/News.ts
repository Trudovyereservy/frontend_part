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

import { NewsItem, PaginatedNewsList } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class News<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Вьюсет для отображения списка новостей.
   *
   * @tags news
   * @name News
   * @request GET:/news/
   * @secure
   */
  newsList = (
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
    this.request<PaginatedNewsList, any>({
      path: `/news/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Вьюсет для отображения списка новостей.
   *
   * @tags news
   * @name NewsRetrieve
   * @request GET:/news/{id}/
   * @secure
   */
  newsRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<NewsItem, any>({
      path: `/news/${id}/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
