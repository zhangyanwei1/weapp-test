import Taro, { Component } from '@tarojs/taro'
import { View, Textarea, Image, Icon, Button } from '@tarojs/components'
import './upload.less'

class Upload extends Component {
  config = {
    navigationBarTitleText: '图片上传预览'
  }
  constructor(props) {
    super(props)
    this.state = {
      selectImages: [], // 选择的图片
      isSubmit: false,
      text: '', // 输入的文案
    }
  }

  componentDidMount() {
  }

  chooseImage() {
    const {selectImages} = this.state;
    const t = this;
    Taro.chooseImage({
      success(res) {
        const newList = res.tempFilePaths;
        t.setState({
          selectImages: selectImages.concat(newList)
        })
      }
    })
  }

  previewImage(current, urls) {
    Taro.previewImage({
      current,
      urls
    })
  }

  deleteImg(index) {
    const {selectImages} = this.state;
    selectImages.splice(index, 1);
    this.setState({
      selectImages,
    })
  }

  inputText(e) {
    this.setState({
      text: e.detail.value
    })
  }

  changeStatus(flag) {
    if (flag) {
      const {text} = this.state;
      if(!text) {
        Taro.showToast({
          title: '请输入文案',
          icon: 'none',
          duration: 2000
        })
        return;
      }
      this.setState({
        isSubmit: true
      })
    } else {
      this.setState({
        isSubmit: false,
        selectImages: [],
        text: ''
      })
    }
  }

  render () {
    const {selectImages, isSubmit, text} = this.state;
    return (
      <View className='container'>
        {!isSubmit ? <View>
          <Textarea onInput={this.inputText.bind(this)} value={text} className='textarea' placeholder='请输入一些文字'></Textarea>
          <View className='img-wrap'>
            {selectImages.map((item, index) => {
              return (
                <View key={index} className='image-item'>
                  <Icon onClick={this.deleteImg.bind(this, index)} className='delete' type='clear' size='20' />
                  <Image mode='aspectFill'
                    onClick={this.previewImage.bind(this, item, selectImages)}
                    className='image' src={item} 
                  />
                </View>
                )
              })}
            <View onClick={this.chooseImage.bind(this)} className='upload'>上传图片</View>
          </View>
          <Button className='button' size='mini' type='primary' onClick={this.changeStatus.bind(this, true)}>提交</Button>
        </View> : <View>
          <View className='m-b'>{text}</View>
          <View className='img-wrap'>
            {selectImages.map((item, index) => {
              return (
                <Image mode='aspectFill'
                  key={index}
                  onClick={this.previewImage.bind(this, item, selectImages)}
                  className='image'
                  src={item} 
                />
              )
            })}
          </View>
          <Button className='button' size='mini' onClick={this.changeStatus.bind(this, false)}>重新上传</Button>
        </View>}
      </View>
    )
  }
}

export default Upload
