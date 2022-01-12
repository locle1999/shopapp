import React, { Component } from 'react'
import { View, Text, FileList, FlatList, Button, TouchableOpacity, Image } from 'react-native'
import axios from 'axios'
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import Product from './Product';
import shopping from './shopping';
import { connect } from 'react-redux';
class ListProduct extends Component {
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
        const { navigation, tokenRedux, qualityRedux } = this.props
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
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("Giỏ Hàng", {
                        username: this.state.username,
                        os: this.state.os,
                        deviceid: this.state.deviceid,
                        token: this.state.token
                    })}
                >
                    <IView style={{
                        top: 5,
                        width: 40,
                        height: 40,
                        flexWrap: "wrap",
                        alignSelf: "center"
                    }}>
                        <Image
                            style={{
                                position: "absolute",
                                top: 5.5,
                                left: 10
                            }}
                            source={require("../public/icon-shopping.png")} />
                        <IView style={{
                            top: 1,
                            backgroundColor: "red",
                            width: 15,
                            height: 15,
                            borderRadius: 100 / 2,
                            position: "absolute",
                            alignSelf: "flex-end"
                        }}>
                            <IText style={{
                                position: "absolute",
                                color: "#fff",
                                top: 1,
                                alignSelf: "center",
                                bottom: 3,
                                fontSize: 9
                            }}> {qualityRedux}</IText>
                        </IView>
                    </IView>
                </TouchableOpacity>
            ),
        })
    }
    addProduct = (aProduct) => {
        console.log("check add product", aProduct)
        if (this.state.arrProduct.find(e => e.id !== aProduct.id)) {
            this.setState({
                arrProduct: [...this.state.arrProduct, aProduct],
            })
        }
    }

    render() {
        const { qualityRedux } = this.props
        console.log(" check arrProduct", qualityRedux)
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
const mapStateStore = (state) => {
    return {
        usernameRedux: state.username,
        tokenRedux: state.token,
        qualityRedux: state.quality
    }
}
const mapDispath = dispatch => ({

})
export default connect(mapStateStore, mapDispath)(ListProduct)