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
    FlatList
} from 'react-native';
import ITextInput from './ITextInput';
import IView from "./IView"
import IText from './IText';
import DeviceInfo from 'react-native-device-info';
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './Product';
const Stack = createNativeStackNavigator();
export default class Nav extends Component {
    render() {
        return (
            <>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Vật tư nông nghiệp" component={Product}
                            options={{
                                headerRight: () => (
                                    <TouchableOpacity>
                                        <Image style={{ width: 18, height: 16 }} source={require("../public/icon-shopping.png")} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>

            </>
        )
    }
}

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