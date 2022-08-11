import {
  request
}  from "./request.js"

/**
 * 获取微页面详情
 */
export const getMicroPageDetail = (params, id) => {
  return request(`/micro-page/${id}`, 'get', params);
}