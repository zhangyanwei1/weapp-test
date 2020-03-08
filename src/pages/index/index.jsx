import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Checkbox, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, checked, del } from '../../actions/todo'

import './index.less'


@connect(({ todo }) => ({ // 第一个参数是mapStateToProp
  todoList: todo.todoList
}), (dispatch) => ({ // 第二个参数
  add (data) {
    dispatch(add(data))
  },
  checked (index) {
    dispatch(checked(index))
  },
  del (index) {
    dispatch(del(index))
  }
}))
class Index extends Component {

  constructor (props) {
    super (props)
    this.state = {
      inputVal: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  // onLaunch
  componentWillUnmount () { 
    console.log('componentWillUnmount', this.$router.params);
  }

  addItem () {
    let { inputVal } = this.state
    const { add: addItem } = this.props
    // 如果输入框的值为空，则返回，否则添加到事项列表里
    if (inputVal == '') return
    else {
      addItem(inputVal);
    }
    this.setState({
      inputVal: ''
    })
  }

  // 根据索引选中事项，然后更新 list
  checkedItem (index) {
    let { checked: checkedItem } = this.props
    checkedItem(index);
  }

  // 根据索引删除事项，然后更新 list
  delItem (index) {
    let { del: delItem } = this.props
    delItem(index)
  }

  // 输入框 onInput 的时候，它的值暂存起来
  inputHandler (e) {
    this.setState({
      inputVal: e.target.value
    });
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidShow () {
    console.log('componentDidShow', this.$router.params);
  }

  componentDidHide () { }

  render () {
    let { inputVal } = this.state
    const {todoList} = this.props
    return (
      <View className='index'>
        <Input placeholder='填写新的TODO' className='input' type='text' value={inputVal} onInput={this.inputHandler.bind(this)} />
        <Button size='mini' className='add pull-right' onClick={this.addItem.bind(this)}>添加</Button>
        <Text className='mini-title'>Todo List</Text>
        <View className='list_wrap'>
          {
            todoList.map((item, index) => {
              return (<View className={item.checked ? 'item-todo checked' : 'item-todo'} key={index}>
                <Checkbox
                  className='checkbox'
                  onClick={this.checkedItem.bind(this, index)}
                  value='todo'
                  checked={item.checked}
                />
                <Text>{index + 1}.{item.text}</Text>
                <Icon onClick={this.delItem.bind(this, index)} type='clear' size='14' className='pull-right' />
              </View>)
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
