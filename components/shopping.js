import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
export default class shopping extends Component {
    state = {
        username: "",
        os: "",
        deviceid: "",
        token: "",
        shoppingCart: []
    }
    componentDidMount() {
        const { username, token, deviceid, os } = this.props.route.params
        const res = axios({
            method: 'get',
            url: 'http://nrms.ipicorp.co:10003/orderservice/order/get_cart_3_one_attribute',
            params: {
                username: username,
                token: token,
                deviceid: deviceid,
                os: os,
            },
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => {
                console.log("check res giỏ hàng :", response);
                this.setState({
                    shoppingCart: response.data.data.cart_info
                })
            })
            .catch(error => {
                console.log(error);
            })
        console.log("check pros", username)
    }
    render() {
        const { shoppingCart } = this.state
        console.log("check state shopping", shoppingCart.find(e => e.items))
        return (
            <View>
                <Text>helo</Text>
            </View>
        )
    }
}
