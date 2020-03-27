import Taro from '@tarojs/taro'

//用户登陆
export function userLogin() {
  Taro.checkSession({
    success: function () {
      //存在登陆态
    },
    fail: function () {
      //不存在登陆态
    }
  })
}

export function onLogin() {
  Taro.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        console.log(res);
      }
    },
    fail: function (res) {
      console.log(res);
    }
  })
 
}

// 2018年4月之后，将不会弹出授权弹窗，默认失败
export function getUserInfo() {
  Taro.getUserInfo({
    success: function(res) {
      console.log(res.userInfo);
    },
    fail: function(res) {
      console.log(res);
    }
  })
}
