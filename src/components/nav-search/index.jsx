import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Search from '../search/index'
import NavBack from '../nav-back/index'

const app = Taro.getApp();
class NavSearch extends Component {
  constructor(props) {
    super (props)
    this.state = {
      navHeight: 0,
      statusBarHeight: 20,
    }
  }

  config = {
    styleIsolation: 'apply-shared'
  }

  componentWillMount() {
    this.setState({
      navHeight: app.globalData.navHeight,
      statusBarHeight: app.globalData.statusBarHeight,
    });
  }

  render() {
    const {navHeight, statusBarHeight} = this.state;
    return (
      <View>
        <View className='nav-wrap' style={{height: navHeight + 'px'}}>
          <View style={{height: statusBarHeight + 5 + 'px'}}></View>
          <NavBack></NavBack>
          <Search></Search>
        </View>
        <View style={{height: navHeight + 'px'}}></View>
      </View>
    )
  }
}

export default NavSearch
