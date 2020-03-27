import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './product.less'
import Search from '../../components/search/index'

const app = Taro.getApp();
class Product extends Component {
  config = {
    navigationBarTitleText: '商品列表',
    navigationStyle: 'custom',
  }

  constructor(props) {
    super (props)
    this.state = {
      navHeight: 0,
      statusBarHeight: 20,
    }
  }

  componentWillMount() {
    this.setState({
      navHeight: app.globalData.navHeight,
      statusBarHeight: app.globalData.statusBarHeight,
    });
  }

  componentDidMount() {
  }

  render() {
    const {navHeight, statusBarHeight} = this.state;
    return (
      <View>
        <View className='nav-wrap' style={{height: navHeight + 'px'}}>
          <View style={{height: statusBarHeight + 5 + 'px'}}></View>
          <Search></Search>
        </View>
      </View>
    )
  }
}

export default Product
