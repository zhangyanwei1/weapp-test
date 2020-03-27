import Taro, {Component} from '@tarojs/taro'
import {View, Input, Icon} from '@tarojs/components'
import './index.less'

class Search extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View className='search-all'>
        <View className='search-wrap'>
          <Input className='input' type='search'></Input>
          <Icon size='20' type='search' class='icon'></Icon>
        </View>
      </View>
      
    )
  }
}

export default Search
