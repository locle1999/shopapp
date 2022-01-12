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
import deviceInfoModule from 'react-native-device-info';
import axios from 'axios'
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import { connect } from 'react-redux';
class Product extends Component {
    state = {
        product_id: "",
        quality: 0,
        ative: true,
        modalVisible: false
    }
    onPress = (aProduct) => {
        let uniqueId = deviceInfoModule.getUniqueId()
        const { usernameRedux, tokenRedux, product } = this.props
        let { item } = this.props
        const dataProduct = JSON.stringify({
            username: usernameRedux,
            token: tokenRedux,
            deviceid: uniqueId,
            os: Platform.OS,
            type_unit: 1,
            attribute: "[]",
            quantity: 1,
            product_id: item.id
        })
        axios({
            method: 'post',
            url: 'http://nrms.ipicorp.co:10003/orderservice/order/add_product_to_cart',
            data: dataProduct,
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => {
                console.log("check res product  :", response);
                console.log("check dataProduct product  :", dataProduct);
            })
            .catch(error => {
                console.log(error);
            })
        this.props.addProduct(aProduct)
        if (this.state.ative === false) {
            this.setState({
                modalVisible: true
            })
        }
        console.log("check lai product", product)
    }
    setModal = (visible) => {
        this.setState({ modalVisible: visible })
    }
    render() {
        console.log("check state  product", this.state)
        return (
            <>
                <IView style={{
                    marginLeft: 16,
                    marginBottom: 10,
                    width: 167,
                    height: 230,
                    top: 13,
                    borderRadius: 10,
                    borderColor: '#D8DBDC',
                    borderWidth: 1,
                }}>
                    <Image style={{
                        position: "absolute",
                        height: 133,
                        width: 131,
                        left: 17,
                        top: 10,
                        resizeMode: "center"
                    }}
                        source={{ uri: this.props.item.image }} />
                    <IView style={{
                        position: "absolute",
                        top: 150,
                        height: 1,
                        width: 167,
                        backgroundColor: "#D8DBDC",
                        left: 0
                    }}></IView>
                    <IText style={{
                        position: "absolute",
                        height: 31,
                        width: 159,
                        top: 154,
                        marginLeft: 8,
                        fontSize: 14,
                        lineHeight: 16,
                        alignItems: 'center',
                        color: "#3C3F3D"
                    }}>{this.props.item.name}</IText>

                    <IView style={{
                        // backgroundColor: "red",
                        marginTop: 9.5,
                        position: "absolute",
                        flexDirection: "row",
                        width: 179,
                        height: 23,
                        top: 195,
                        left: 10,

                    }}>
                        <IText style={{

                            color: "#3C3F3D",
                            textTransform: "uppercase",
                            fontWeight: '900',
                            left: 0
                        }}>
                            {this.props.item.price}
                        </IText>
                        <Modal
                            visible={this.state.modalVisible}
                            animationType='fade'
                            transparent={true}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                this.setModal(!modalVisible);
                            }}
                        >
                            <IView style={{
                                flex: 1,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <IView style={{
                                    position: "absolute",
                                    width: 350,
                                    height: 152,
                                    left: 16,
                                    top: 264,
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: 10
                                }}>
                                    <IText style={{
                                        color: "#369E69",
                                        textAlign: "center",
                                        fontSize: 16,
                                        lineHeight: 19,
                                        fontFamily: "Roboto",
                                        fontWeight: '400',
                                        marginTop: 16,
                                        marginBottom: 6
                                    }}> Thông Báo
                                    </IText>
                                    <IText style={{
                                        color: "#3C3F3D",
                                        textAlign: "center",
                                        fontSize: 14,
                                        lineHeight: 16,
                                        fontFamily: "Roboto",
                                    }}> Sản phẩm đã có trong giỏ hàng
                                    </IText>
                                    <IText style={{
                                        color: "#3C3F3D",
                                        textAlign: "center",
                                        fontSize: 14,
                                        lineHeight: 16,
                                        fontFamily: "Roboto",
                                        marginBottom: 16
                                    }}> Vui lòng kiểm tra lại
                                    </IText>

                                    <TouchableOpacity
                                        style={[styles.button]}
                                        onPress={() => this.setModal(!this.state.modalVisible)}
                                    >
                                        <Text style={{
                                            color: "#FFFFFF",
                                            alignSelf: "center",
                                            fontWeight: '700',
                                            top: 12
                                        }}>Xác nhận</Text>
                                    </TouchableOpacity>
                                </IView>
                            </IView>
                        </Modal>
                        <TouchableOpacity
                            onPress={() => this.onPress()}  >
                            <IView style={{
                                position: "absolute",
                                left: 73,
                            }}>
                                {this.state.ative === true ?
                                    <Image source={require("../public/icon-shopping.png")} />
                                    :
                                    <Image source={require("../public/Union.png")} />}
                            </IView>

                        </TouchableOpacity>
                    </IView>
                </IView >

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
const mapDispath = (dispatch) => {
    return {
        addRedux: (aProduct) => dispatch({ type: "ADD", payload: aProduct })
    }
}
export default connect(mapStateStore, mapDispath)(Product)