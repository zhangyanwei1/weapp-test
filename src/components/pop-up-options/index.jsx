import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

class popUpOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false, //是否已经弹出
      animationItem1: {},
      animationItem2: {},
      animationItem3: {},
      animationItem4: {},
    }
  }
  handleOpen() {
    const {isShow} = this.state;
    this.setState({
      isShow: !isShow
    })
    // if (!isShow) {
    //   this.openAnimation();
    // } else {
    //   this.backAnimation();
    // }
  }
  handleClose() {
    // this.backAnimation();
    this.setState({
      isShow: false
    });
  }
  openAnimation() {
    const options = {
      duration: 100,
      timingFunction: 'ease-out'
    };
    const a1 = Taro.createAnimation(options);
    const a2 = Taro.createAnimation(options);
    const a3 = Taro.createAnimation(options);
    const a4 = Taro.createAnimation(options);
    a1.translate(0, -90).opacity(1).step();
    a2.translate(-80, -60).opacity(1).step();
    a3.translate(-100, 10).opacity(1).step();
    a4.translate(-70, 70).opacity(1).step();
    this.setState({
      animationItem1: a1,
      animationItem2: a2,
      animationItem3: a3,
      animationItem4: a4,
    })
  }
  backAnimation() {
    const options = {
      duration: 200,
      timingFunction: 'ease-out'
    };
    const a1 = Taro.createAnimation(options);
    const a2 = Taro.createAnimation(options);
    const a3 = Taro.createAnimation(options);
    const a4 = Taro.createAnimation(options);
    a1.translate(0, 0).opacity(0).step();
    a2.translate(0, 0).opacity(0).step();
    a3.translate(0, 0).opacity(0).step();
    a4.translate(0, 0).opacity(0).step();
    this.setState({
      animationItem1: a1,
      animationItem2: a2,
      animationItem3: a3,
      animationItem4: a4,
    })
  }
  render() {
    const {isShow, animationItem1, animationItem2, animationItem3, animationItem4} = this.state;
    return(
      <View>
        {isShow ? <View className='drawer_screen' onClick={this.handleClose.bind(this)}></View> : null}
        <View onClick={this.handleOpen.bind(this)} className='button position'>
          <View className='one'>点 击</View>
          <View>弹 出</View>
        </View>
        <View animation={animationItem1} className={isShow ? 'option-item position item1' : 'option-item position'}>选项1</View>
        <View animation={animationItem2} className={isShow ? 'option-item position item2' : 'option-item position'}>选项2</View>
        <View animation={animationItem3} className={isShow ? 'option-item position item3' : 'option-item position'}>选项3</View>
        <View animation={animationItem4} className={isShow ? 'option-item position item4' : 'option-item position'}>选项4</View>
      </View>
    )
  }
}

export default popUpOptions
