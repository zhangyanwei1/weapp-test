import Taro, { Component } from '@tarojs/taro'
import { Navigator, Image } from '@tarojs/components'
import './index.less'
import backImg from '../../img/back.png'

const app = Taro.getApp();
class NavBack extends Component {
  constructor(props) {
    super (props)
    this.state = {
      statusBarHeight: 20,
    }
  }

  componentWillMount() {
    this.setState({
      statusBarHeight: app.globalData.statusBarHeight,
    });
  }

  render() {
    const {statusBarHeight} = this.state;
    return (
      <Navigator 
        openType='navigateBack'
        className='nav-back'
        style={{top: statusBarHeight + 5 + 'px'}}
        hoverClass='none'
      >
        <Image mode='aspectFit' class='back-img' src={backImg} />
      </Navigator>
    )
  }
}

export default NavBack
