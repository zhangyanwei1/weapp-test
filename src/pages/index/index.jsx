import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'
import './index.less'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='container'>
        <Navigator className='index-link' url='/pages/todo/todo'>
          <Text className='seq'>1</Text>
          待办（todoList）
        </Navigator>
      </View>
    )
  }
}

export default Index
