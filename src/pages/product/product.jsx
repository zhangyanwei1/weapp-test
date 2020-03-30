import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './product.less'
import NavSearch from '../../components/nav-search/index'

class Product extends Component {
  config = {
    navigationStyle: 'custom',
  }

  constructor(props) {
    super (props)
    this.state = {
      loadingBottom: false,
      list: [
        {
          id: 1,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称1',
          price: 20
        },
        {
          id: 2,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称2',
          price: 20
        },
        {
          id: 3,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称3',
          price: 20
        },
        {
          id: 4,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称4',
          price: 20
        },
        {
          id: 5,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称5',
          price: 20
        },
        {
          id: 6,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称6',
          price: 20
        },
        {
          id: 7,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称7',
          price: 20
        },
        {
          id: 8,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称8',
          price: 20
        },
        {
          id: 9,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称9',
          price: 20
        },
        {
          id: 10,
          imgUrl: 'http://img2.imgtn.bdimg.com/it/u=1797624375,4229175963&fm=26&gp=0.jpg',
          name: '商品名称10',
          price: 20
        },
      ]
    }
  }

  onReachBottom() {
    this.getList();
  }

  getList() {
    this.setState({
      loadingBottom: true
    });
    const {list} = this.state
    const newList = list.slice(0, 10)
    setTimeout(() => {
      this.setState({
        loadingBottom: false,
        list: list.concat(newList)
      })
    }, 2000)
  }

  render() {
    const {list, loadingBottom} = this.state;
    return (
      <View className='body'>
        <NavSearch />
        <View 
          className='container'
        >
          {list.map((item, index) => {
            return (
              <View className='item' key={index}>
                <Image className='img pull-left' src={item.imgUrl}></Image>
                <View className='text'>
                  <Text>{item.name}</Text>
                  <Text className='price'>￥{item.price}</Text>
                </View>
              </View>
            )
          })}
          {loadingBottom ? <View className='loading'>加载中...</View> : null}
        </View>
      </View>
    )
  }
}

export default Product
