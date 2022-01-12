import React, { Component } from 'react'
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import axios from 'axios';
import deviceInfoModule from 'react-native-device-info';
import { connect } from 'react-redux';
import { Login } from '../store/action/listAction';
class FromLogin extends Component {
    state = {
        os: "",
        deviceid: "",
        username: "",
        password: "",
        token: ""
    }
    handleClick = () => {

        let uniqueId = deviceInfoModule.getUniqueId()
        let { navigation, usernameRedux, tokenRedux } = this.props
        this.props.userLogin(this.state.username, this.state.password)
        if (this.state.username === usernameRedux) {
            navigation.navigate("ListProduct", {
                username: this.state.username,
                os: this.state.os,
                deviceid: this.state.deviceid,
                token: tokenRedux
            })
        }


        this.setState({
            os: Platform.OS,
            deviceid: uniqueId,
        })
    }
    render() {
        const { usernameRedux, passwordRedux, userLogin } = this.props
        return (
            <>
                <ImageBackground
                    style={[styles.backgroud]}
                    source={require("../public/background.png")}
                >
                    <Image style={[styles.logo]} source={require("../public/logo.png")} />
                    <Text style={[styles.text1]}>Vui lòng nhập số điện thoại</Text>
                    <ITextInput
                        style={{
                            top: 378,
                            left: 116,
                            fontWeight: "normal",
                            alignItems: "center",
                            textAlign: "center",
                            fontFamily: "Roboto",
                            color: "#FFFFFF",
                            width: 149,
                            position: "absolute",
                            display: "flex"
                        }}
                        placeholder="Nhập số điện thoại "
                        onChangeText={(username) => { this.setState({ username }) }}
                        value={this.state.username}
                    />

                    <View style={[styles.line1]}></View>
                    <ITextInput
                        style={{
                            top: 419,
                            left: 116,
                            fontWeight: "normal",
                            alignItems: "center",
                            textAlign: "center",
                            fontFamily: "Roboto",
                            color: "#FFFFFF",
                            width: 149,
                            position: "absolute",
                            marginTop: 19
                        }}
                        placeholder="Mật khẩu "
                        onChangeText={(password) => { this.setState({ password }) }}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                    <View style={[styles.line2]}></View>
                    <TouchableOpacity
                        onPress={this.handleClick}

                    >
                        <View style={[styles.button]}>
                        </View>
                        <Text style={[styles.text2]}> ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <IView style={{
                        position: "absolute",
                        width: 243,
                        height: 19.5,
                        left: 69,
                        top: 550,
                        fontWeight: "normal",
                        fontSize: 15,
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "Roboto",
                    }}>
                        <IText style={{ color: "white" }} > Bạn chưa có tài khoản? <IText style={{ color: "yellow" }}>   Đăng ký</IText></IText>
                    </IView>
                    <IView style={{
                        position: "absolute",
                        width: 201,
                        // height: 10,
                        left: 116.59,
                        top: 630.95,
                        fontWeight: "normal",
                        fontSize: 16,
                        lineHeight: 19,
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "Roboto",
                    }}>
                        <IText>Gọi chăm sóc khách hàng</IText>
                    </IView>
                    <Image
                        style={{
                            position: "absolute",
                            left: "16.32%",
                            right: "72.91%",
                            top: 590
                        }}
                        source={require("../public/icon-24h.png")} />
                </ImageBackground>

            </>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    backgroud: {
        position: "absolute",
        width: 380,
        height: 737,
        left: 0,
        top: 0,

    },
    logo: {
        width: 190,
        height: 193,
        left: 95,
        top: 93,
        position: "relative"
    },
    text1: {
        color: "white",
        fontSize: 16,
        fontFamily: "Roboto",
        width: 207,
        //height: 7,
        position: "absolute",
        fontStyle: "italic",
        top: 331,
        left: 87,
        lineHeight: 19,
        fontWeight: "normal",
        alignItems: "center",
        textAlign: "center",

    },

    line1: {
        backgroundColor: "white",
        height: 0.5,
        width: 275.65,
        top: 398,
        left: 52,
        borderRadius: 40.5,
        position: "absolute",
    },
    line2: {
        backgroundColor: "white",
        height: 0.5,
        width: 275.65,
        top: 439,
        left: 52,
        borderRadius: 40.5,
        position: "absolute",
    },
    text2: {
        color: "white",
        width: 172,
        //height: 8,
        position: "absolute",
        top: 296,
        left: 104,
        lineHeight: 21,
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Roboto",
        fontStyle: "normal",
        textAlign: "center",
        display: "flex",
        alignItems: "center",


    },
    button: {
        position: "absolute",
        width: 280.57,
        height: 40,
        left: 50,
        top: 285,
        borderRadius: 63,
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1
    }
})
const mapStateStore = (state) => {

    return {
        usernameRedux: state.username,
        tokenRedux: state.token
    }
}
const mapDispath = dispatch => ({

    userLogin: (username, password) => dispatch(Login(username, password))

})
export default connect(mapStateStore, mapDispath)(FromLogin)