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
    TouchableOpacity
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
import IFastImage from './IFastImage';
export default class Product extends Component {
    state = {
        aProduct: {
            event_id: "",
            id: "",
            image: "",
            is_new: "",
            max_unit: "",
            max_unit_quantity: "",
            min_unit: "",
            name: "",
            np_id: "",
            old_price: "",
            p_price: "",
            point: "",
            price: "",
            price_max_unit: "",
            pv_price: "",
            region_id: "",
            stock: "",
            variation_group: "",
            vat: ""
        },
        quality: 0,
        ative: true,
    }

    onPress = () => {
        // this.setState({
        //     ative: false
        // })
    }
    render() {
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
                    <IFastImage style={{
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
                            {this.props.item.old_price}
                        </IText>
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
                </IView>

            </>
        )
    }
}
const styles = StyleSheet.create({


})