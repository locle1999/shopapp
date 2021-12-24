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
import IView from './IView';
import IText from './IText';
// import { Icon } from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

class ListProduct extends Component {
    state = {
        aProduct: {
            id: '',
            image: '',
            titile: '',
            price: ''
        },
        quality: 0,
        ative: true,
    }
    onPress = () => {
        console.log("check item", this.props)
        let { item } = this.props
        // let { product } = this.props
        console.log("check state produr", this.state.aProduct)
        this.props.addProduct({
            id: item.id,
            image: item.image,
            titile: item.titile,
            price: item.price
        })
        this.setState({
            ative: false,
            quality: this.state.quality + 1
        })
    }
    render() {
        console.log("check state", this.state.product, this.state.quality)
        return (
            < SafeAreaView>
                <IView style={{
                    marginLeft: 16,
                    marginBottom: 10,
                    width: 165,
                    height: 217,
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
                        height: 1,
                        width: 167,
                        backgroundColor: "#D8DBDC",
                        left: 0
                    }}></IView>
                    <Text style={{
                        position: "absolute",
                        height: 31,
                        width: 156,
                        top: 154,
                        marginLeft: 8,
                        fontSize: 14,
                        lineHeight: 16,
                        alignItems: 'center',
                        color: "#3C3F3D"
                    }}>{this.props.item.titile}</Text>

                    <IView style={{
                        position: "absolute",
                        flexDirection: "row",
                        justifyContent: "space-round",
                        width: 179,
                        height: 23,
                        top: 195
                    }}>
                        <IText style={{
                            color: "#3C3F3D",
                            textTransform: "uppercase",
                            fontWeight: '900',
                            left: 0
                        }}>{this.props.item.price}</IText>
                        <TouchableOpacity
                            onPress={() => this.onPress()}  >
                            <IView>
                                {this.state.ative === true ?
                                    <Image source={require("../public/icon-shopping.png")} />
                                    :
                                    <Image source={require("../public/Union.png")} />}
                            </IView>

                        </TouchableOpacity>
                    </IView>
                </IView>
            </SafeAreaView >
        )
    }
}

export default class Product extends Component {
    state = {
        product: [],
        quality: 0,
        ative: true,
    }
    addProduct = (aProduct) => {
        console.log("check add product", aProduct)
        if (this.state.product.findIndex(e => e.id === aProduct.id)) {
            this.setState({
                product: [...this.state.product, aProduct],
                quality: this.state.quality + 1
            })
        } else {
            this.setState({
                product: this.state.product.splice(aProduct.id, 1),
                ative: false,
                quality: this.state.quality - 1
            })
        }
    }
    render() {
        console.log("check state after add product", this.state.product, this.state.quality)
        return (
            <View style={[styles.Container]}>
                <View >
                    <FlatList
                        numColumns={2}
                        data={Data}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <ListProduct product={this.state.product}
                                    item={item} index={index} addProduct={this.addProduct}>
                                </ListProduct>)
                        }}
                    />
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },

    font: {
        fontSize: 15,
        alignSelf: "center",
        fontWeight: "bold"
    },
    addItem: {
        backgroundColor: "red",
        width: 15,
        height: 15,
        borderRadius: 100 / 2,
        position: "absolute",
        alignSelf: "flex-end"
    },
})
const Data = [
    {
        id: '1',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: "300,000đ"
    },
    {
        id: '2',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '400.000đ'
    },
    {
        id: '3',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '200.000đ'
    },
    {
        id: '4',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '250.000đ'
    },
    {
        id: '5',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '200.000đ'
    },
    {
        id: '6',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '250.000đ'
    },

]