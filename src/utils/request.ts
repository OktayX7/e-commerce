/* eslint-disable @typescript-eslint/ban-types */
// Package Imports
import {AxiosResponse} from 'axios'

// Util and Lib Imports
import {axiosAgent} from 'libs'

const responseBody = (response: AxiosResponse) => response?.data

export const requests = {
  get: <T>(url: string, params?: {}): Promise<T> =>
    axiosAgent.get(url, {params}).then(responseBody),
  post: <T>(url: string, body: {} = {}): Promise<T> =>
    axiosAgent.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}): Promise<T> => axiosAgent.put(url, body).then(responseBody),
  patch: <T>(url: string, body: {}): Promise<T> => axiosAgent.patch(url, body).then(responseBody),
  del: <T>(url: string, body: {}): Promise<T> =>
    axiosAgent.delete(url, {data: body}).then(responseBody),
}
