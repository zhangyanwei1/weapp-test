import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.less'

class BackTop extends Component {
  constructor(props) {
    super(props)
  }

  toTop() {
    Taro.pageScrollTo({
      scrollTop: 0,
    })
  }

  render() {
    return (
      <View onClick={this.toTop.bind(this)} className='back-text'>
        T^T
      </View>
    )
  }
}

export default BackTop
