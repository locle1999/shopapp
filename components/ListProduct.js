import React, { Component } from 'react'
import { View, Text, FileList, FlatList } from 'react-native'
import axios from 'axios'
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import Product from './Product';
export default class ListProduct extends Component {
    state = {
        username: "",
        os: "",
        deviceid: "",
        token: "",
        cate_id: 9,
        page: 1,
        allow_guest_view_price: true,
        Product: [],
        arrProduct: []
    }
    componentDidMount() {
        const { username, token, deviceid, os } = this.props.route.params
        this.setState({
            username: username,
            token: token,
            deviceid: deviceid,
            os: os
        })
        const res = axios({
            method: 'get',
            url: 'http://nrms.ipicorp.co:10003/productservice/product/get_products2',
            params: {
                username: username,
                token: token,
                deviceid: deviceid,
                os: os,
                cate_id: 9,
                page: 1,
                allow_guest_view_price: true
            },
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => {
                console.log("check res product :", response);
                this.setState({
                    Product: response.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    addProduct = (aProduct) => {
        console.log("check add product", aProduct)
        if (this.state.arrProduct.find(e => e.id === aProduct.id)) {
            alert("sản phẩm đã có trong giỏ hàng")
        } else {

            this.setState({
                arrProduct: [...this.state.arrProduct, aProduct],
            })
        }
    }
    render() {
        console.log(" check arrProduct", this.state.arrProduct)
        return (
            <>
                <IView style={{
                    backgroundColor: "white"
                }}>
                    <FlatList
                        numColumns={2}
                        data={this.state.Product}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <Product product={this.state.arrProduct}
                                    item={item}
                                    index={index}
                                    addProduct={this.addProduct}
                                    username={this.state.username}
                                    os={this.state.os}
                                    deviceid={this.state.deviceid}
                                    token={this.state.token}
                                >
                                </Product>
                            )
                        }}
                    />
                </IView>
            </>
        )
    }
}
