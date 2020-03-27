import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/todo/todo',
      'pages/product/product',
    ],
    window: {
      backgroundTextStyle: 'light', // 下拉loading样式
      navigationBarBackgroundColor: '#fff', // 导航栏背景颜色
      navigationBarTitleText: 'WeChat', // 导航栏标题文字内容
      navigationBarTextStyle: 'black' // 导航栏标题颜色
    }
  }

  // 全局变量
  globalData = {
    navHeight: 0,
    statusBarHeight: 20, // 手机状态栏高度
  }

  componentWillMount() {
    const t = this;
    Taro.getSystemInfo({
      success(res) {
        t.globalData.navHeight = 46 + res.statusBarHeight
        t.globalData.statusBarHeight = res.statusBarHeight
      }
    })
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
