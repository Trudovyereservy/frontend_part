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

import { HttpClient, RequestParams } from './http-client';

export class Healthcheck<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Тестовая вью-функция для SwaggerUI
   *
   * @tags healthcheck
   * @name HealthcheckRetrieve
   * @request GET:/healthcheck/
   * @secure
   */
  healthcheckRetrieve = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/healthcheck/`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
