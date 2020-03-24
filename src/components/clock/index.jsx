import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {formatDate} from '../../common/format_tool'
import './index.less'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const {date} = this.state;
    return (
      <View className='clock-text'>{formatDate(date)}</View>
    )
  }
}

export default Clock
