import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { saveProductList, addNum } from "../../redux/actions/action";
import { connect } from "@tarojs/redux";
import './index.scss'

@connect(
    ({ shopcart:s}) => ({shopcart:s}),
    (dispatch) => ({
      saveProductList(list) {
        dispatch(saveProductList(list));
      },
      addNum(id) {
        dispatch(addNum(id));
      },
    })
  )
export default class ShopCart extends Component {
  componentWillMount () { 
    setTimeout(() => {
        const list = [
          { id: 1, name: "早餐", num: 2, price: 5.0 },
          { id: 2, name: "中餐", num: 2, price: 15.0 },
          { id: 3, name: "晚餐", num: 2, price: 25.0 },
        ];
        this.props.saveProductList(list);
      }, 2000);
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '购物车'
  }


  add(item) {
    this.props.addNum(item.id);
  }

  minus(params) {

  }

  submit() {
    var list = [];
    this.props.shopcart.productList.forEach((element) => {
      if (element.count > 0) {
        list.push(element);
      }
    });
    console.log("选中的东西", list);
  }
  render() {
    const productList = this.props.shopcart.productList || [];
    return (
      <View>
        {productList.map((item, index) => {
          return (
            <View key={`key_${index}`}>
              <View>{item.name}</View>
              <View style={{ display: "flex" }}>
                <View>{item.count || 0}</View>
                <View style={{width:'100rpx',height:'40rpx',textAlign:'center'}} onClick={this.add.bind(this, item)}>+</View>
              </View>
            </View>
          );
        })}
        <Button onClick={this.submit.bind(this)}>提交看打印</Button>
      </View>
    );
  }
}
