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

import { Coach, PaginatedCoachList } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Coaches<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Вьюсет для отображения информации о тренерах. Работает только на чтение (list, retrieve). Имеется фильтрация по полю slug модели Directions.
   *
   * @tags coaches
   * @name CoachesList
   * @request GET:/coaches/
   * @secure
   */
  coachesList = (
    query?: {
      /** Multiple values may be separated by commas. */
      direction_ids?: number[];
      /** Number of results to return per page. */
      limit?: number;
      /** A page number within the paginated result set. */
      page?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PaginatedCoachList, any>({
      path: `/coaches/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Вьюсет для отображения информации о тренерах. Работает только на чтение (list, retrieve). Имеется фильтрация по полю slug модели Directions.
   *
   * @tags coaches
   * @name CoachesRetrieve
   * @request GET:/coaches/{id}/
   * @secure
   */
  coachesRetrieve = (id: number, params: RequestParams = {}) =>
    this.request<Coach, any>({
      path: `/coaches/${id}/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
