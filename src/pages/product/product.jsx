import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './product.less'
import NavSearch from '../../components/nav-search/index'

class Product extends Component {
  config = {
    navigationStyle: 'custom',
  }

  constructor(props) {
    super (props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <NavSearch />
      </View>
    )
  }
}

export default Product
