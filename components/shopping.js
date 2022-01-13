import React, { Component } from 'react'
import { View, Text, FlatList, SafeAreaView, ScrollView, Platform } from 'react-native'
import axios from 'axios'
import Cart from "./Cart"
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import deviceInfoModule from 'react-native-device-info';
import { connect } from 'react-redux';
import { cartProduct } from '../store/action/listAction';

class shopping extends Component {
    state = {
        username: "",
        os: "",
        deviceid: "",
        token: "",
        shoppingCart: []
    }
    componentDidMount() {
        let uniqueId = deviceInfoModule.getUniqueId()
        const { username, token, deviceid, os } = this.props.route.params
        //this.props.loadCart(username, token)
        this.props.cartProduct(username, token)
    }
    DeleteProduct = (aProduct) => {
        if (this.state.shoppingCart.find(e => e.id === aProduct.id))
            this.setState({
                shoppingCart: this.state.shoppingCart.splice(aProduct.id, 1)
            })
    }
    render() {
        const { shoppingCart } = this.props
        console.log("check shopping cart", shoppingCart)
        return (
            <>
                <ScrollView>
                    <IView style={{
                        backgroundColor: "white",
                        height: 684,
                        left: 0,
                        top: 0,
                    }}>
                        <FlatList
                            numColumns={1}
                            data={shoppingCart}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <Cart item={item}
                                        index={index}
                                        username={this.state.username}
                                        os={this.state.os}
                                        deviceid={this.state.deviceid}
                                        token={this.state.token}
                                        DeleteProduct={this.DeleteProduct}
                                    />
                                )
                            }}
                        />
                        <IView style={{
                            position: "absolute",
                            top: 560,
                            height: 5,
                            width: 380,
                            backgroundColor: "#D8DBDC",
                            left: 0
                        }}></IView>
                    </IView>
                    <IView
                        style={{

                            position: "absolute",
                            flexDirection: "row",
                            top: 570,
                            width: 350,
                            left: 10
                        }}
                    >
                        <IText
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: '400',
                                color: "#3C3F3D",
                                fontWeight: 'bold',
                                fontSize: 16,
                                lineHeight: 19,
                                left: 10
                            }}
                        > Tạm tính:</IText>
                        <IText
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 'bold',
                                color: "#3C3F3D",
                                fontSize: 16,
                                lineHeight: 19,
                                left: 190
                            }}
                        > 10.000.000</IText>
                    </IView>
                    <IView
                        style={{

                            position: "absolute",
                            flexDirection: "row",
                            top: 600,
                            width: 350,
                            left: 10
                        }}
                    >
                        <IText
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: '400',
                                fontWeight: 'bold',
                                color: "#3C3F3D",
                                fontSize: 16,
                                lineHeight: 19,
                                left: 10
                            }}
                        > Chiết khấu:</IText>
                        <IText
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 'bold',
                                color: "#3C3F3D",
                                fontSize: 16,
                                lineHeight: 19,
                                left: 190
                            }}
                        > 500.000</IText>
                    </IView>
                    <IView style={{
                        position: "absolute",
                        top: 620,
                        height: 1,
                        width: 380,
                        backgroundColor: "#D8DBDC",
                        left: 0
                    }}></IView>
                    <IView
                        style={{

                            position: "absolute",
                            flexDirection: "row",
                            top: 635,
                            width: 350,
                            left: 10
                        }}
                    >
                        <IText
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: '400',
                                color: "#369E69",
                                fontSize: 16,
                                lineHeight: 19,
                                left: 10
                            }}
                        > TỔNG CỘNG :</IText>
                        <IText
                            style={{
                                fontFamily: "Roboto",
                                fontWeight: 'bold',
                                color: "#369E69",
                                fontSize: 16,
                                lineHeight: 19,
                                left: 180
                            }}
                        > 9.500.000</IText>
                    </IView>
                </ScrollView>
            </>
        )
    }
}
const mapStateStore = (state) => {
    return {
        usernameRedux: state.username,
        tokenRedux: state.token,
        shoppingCart: state.dataCart
    }
}

export default connect(mapStateStore, { cartProduct })(shopping)