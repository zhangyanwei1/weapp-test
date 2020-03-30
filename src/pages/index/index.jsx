import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Text, OpenData } from '@tarojs/components'
import './index.less'
import popUpOptions from '../../components/pop-up-options/index'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    
  }

  componentDidMount() {
  }

  render () {
    return (
      <View className='container'>
        <popUpOptions />
        <View className='text-center user-info'>  
          <OpenData className='avatar middle' type='userAvatarUrl'></OpenData>
          <OpenData className='m-l middle' type='userNickName'></OpenData>
        </View>
        <Navigator hoverClass='none' className='index-link' url='/pages/todo/todo'>
          <Text className='seq'>1</Text>
          待办（todoList）
        </Navigator>
        <Navigator hoverClass='none' className='index-link' url='/pages/product/product'>
          <Text className='seq'>2</Text>
          商品列表
        </Navigator>
        <Navigator hoverClass='none' className='index-link' url='/pages/upload/upload'>
          <Text className='seq'>3</Text>
          图片上传预览
        </Navigator>
      </View>
    )
  }
}

export default Index
