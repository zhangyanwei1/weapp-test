import Taro from '@tarojs/taro';
import HTTP_STATUS from '../constants/status'
import API from '../constants/api'

/**
 * 请求方法封装
 * @param {*} action 地址
 * @param {*} data 数据
 * @param {*} method 方法
 * @param {*} opts 其他配置
 */

function fetch(action, data, method = 'GET', opts) {
  let path = API[action];
  if(!path) return Promise.reject(new Error('无效的API地址'));
  let option = {
    method: method ? method.toLowerCase() : 'get',
    url: path,
    data,
    ...opts
  };
  return Taro.request(option).then(res => {
    if (res.data.status === HTTP_STATUS.SUCCESS) {
      return res.data;
    } else {
      // 报错提示：根据返回的状态码报错
    }
  })
}

export default fetch;