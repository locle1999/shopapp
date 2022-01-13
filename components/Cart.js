import React, { Component } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Modal,
    Platform
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios'
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import { connect } from 'react-redux';
import deviceInfoModule from 'react-native-device-info';

class Cart extends Component {
    state = {
        product_id: "",
        quality: 0,
        ative: true,
        modalVisible: false,

    }
    handleDelete = (aProduct) => {
        let uniqueId = deviceInfoModule.getUniqueId()
        const { usernameRedux, tokenRedux, deviceid, os, } = this.props
        let { item, index } = this.props
        const dataDeleteProduct = JSON.stringify({
            username: usernameRedux,
            token: tokenRedux,
            deviceid: uniqueId,
            os: Platform.OS,
            type: 1,
            id: item[index].id
        })
        axios({
            method: 'post',
            url: 'http://nrms.ipicorp.co:10003/orderservice/order/remove_all',
            data: dataDeleteProduct,
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => {
                console.log("check  deleteproduct :", dataDeleteProduct);
                console.log("check res deleteproduct :", response);
            })
            .catch(error => {
                console.log(error);
            })
        this.props.DeleteProduct(aProduct)
    }
    render() {
        const { tokenRedux, usernameRedux, index } = this.props
        console.log("check state  cart", this.props.item)
        console.log("check props username", this.props.usernameRedux)
        return (
            <>
                <SafeAreaView>
                    <IView style={{
                        marginLeft: 16,
                        marginBottom: 10,
                        width: 350,
                        height: 173,
                        top: 13,
                        borderRadius: 12,
                        borderColor: '#D8DBDC',
                        borderWidth: 1,
                        flexDirection: 'row',

                    }}>
                        <IView
                            style={{
                                flexDirection: "row",
                                width: 350
                            }}
                        >
                            <IView
                                style={{
                                    borderWidth: 1,
                                    width: 80,
                                    height: 80,
                                    left: 14,
                                    top: 7,
                                    borderRadius: 10,
                                    borderColor: '#D8DBDC',
                                }}
                            >
                                <Image style={{
                                    position: "absolute",
                                    height: 65,
                                    width: 65,
                                    left: 4,
                                    top: 3.75,
                                    resizeMode: "center"
                                }}
                                    source={{ uri: this.props.item[index].image }} />
                            </IView>

                            <IText
                                style={{
                                    position: "absolute",
                                    left: 112,
                                    width: 183,
                                    fontSize: 14,
                                    lineHeight: 16,
                                    top: 13,
                                    fontFamily: "Roboto",
                                    fontWeight: '400',
                                    color: "#3C3F3D"
                                }}
                            >{this.props.item[index].name}</IText>
                            <IText
                                style={{
                                    position: "absolute",
                                    fontSize: 16,
                                    lineHeight: 19,
                                    top: 52,
                                    left: 112,
                                    fontFamily: "Roboto",
                                    fontWeight: 'bold',
                                    color: "#369E69"
                                }}
                            >{this.props.item[index].price}</IText>

                            <IText style={{
                                position: "absolute",
                                fontSize: 16,
                                lineHeight: 19,
                                top: 52,
                                left: 170,
                                fontFamily: "Roboto",
                                fontWeight: 'normal',
                                color: "#3C3F3D"
                            }}>/Gói</IText>
                        </IView>
                        <IView style={{
                            position: "absolute",
                            top: 90,
                            height: 1,
                            width: 350,
                            backgroundColor: "#D8DBDC",
                            left: 0
                        }}></IView>
                        <TouchableOpacity
                            onPress={this.handleDelete}
                        >
                            <Image
                                style={{
                                    position: "absolute",
                                    right: 10,
                                    top: "8%"
                                }}
                                source={require("../public/delete.png")}
                            />
                        </TouchableOpacity>
                        <IView
                            style={{
                                position: "absolute",
                                flexDirection: "row",
                                top: 99,
                            }}
                        >
                            <IText
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: '400',
                                    color: "#3C3F3D",
                                    fontSize: 16,
                                    lineHeight: 19,
                                    left: 10
                                }}
                            >Thành tiền :</IText>
                            <IText
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: 'bold',
                                    color: "#369E69",
                                    fontSize: 16,
                                    lineHeight: 19,
                                    left: 180
                                }}
                            >{this.props.item[index].total_price}</IText>
                        </IView>
                        <IView style={{
                            position: "absolute",
                            top: 130,
                            height: 1,
                            width: 350,
                            backgroundColor: "#D8DBDC",
                            left: 0
                        }}></IView>
                        <IView
                            style={{
                                position: "absolute",
                                flexDirection: "row",
                                top: 140,
                            }}
                        >
                            <IText
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: '400',
                                    color: "#3C3F3D",
                                    fontSize: 16,
                                    lineHeight: 19,
                                    left: 10
                                }}
                            > Sau chiết khấu:</IText>
                            <IText
                                style={{
                                    fontFamily: "Roboto",
                                    fontWeight: 'bold',
                                    color: "#369E69",
                                    fontSize: 16,
                                    lineHeight: 19,
                                    left: 180
                                }}
                            > {this.props.item[index].money_discount}</IText>
                        </IView>
                    </IView >
                </SafeAreaView>

            </>
        )
    }
}
const styles = StyleSheet.create({

    button: {
        position: "absolute",
        width: 165,
        height: 48,
        left: 90,
        top: 80,
        backgroundColor: "#369E69",
        borderRadius: 63
    }
})
const mapStateStore = (state) => {

    return {
        usernameRedux: state.username,
        tokenRedux: state.token
    }
}

export default connect(mapStateStore)(Cart)