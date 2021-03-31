import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { connect } from "@tarojs/redux";
import { saveUserInfo, changeName } from "../../redux/actions/action";

import './index.scss'

@connect(
  ({ user }) => ({
    user,
  }),
  (dispatch) => ({
    saveUserInfo(info) {
      dispatch(saveUserInfo(info));
    },
    changeName(name) {
      dispatch(changeName(name));
    },
  })
)
export default class Index extends Component {

  componentWillMount () { 
    this.save();
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '用户信息'
  }
  
  save(){
    this.props.saveUserInfo({ name: "jacky", age: 20 });
  }
  change() {
    this.props.changeName("Mike");
  }
  jumpPage() {
    Taro.navigateTo({
      url: "/pages/index/shopcart",
    });
  }
  render () {
    const { name } = this.props.user;
    return (
      <View className='index'>
         <View>我的名字{name}</View>
        <Button onClick={this.change.bind(this)}>修改名称</Button>
        <Button onClick={this.save.bind(this)}>重置</Button>
        <Button onClick={this.jumpPage.bind(this)}>跳转购物车</Button>
      </View>
    )
  }
}
