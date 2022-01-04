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
import Product from './Product';
import FromLogin from './FromLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProduct from './ListProduct';
import shopping from './shopping';
const Stack = createNativeStackNavigator();

export default class Nav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen
                        name="Login"
                        component={FromLogin}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="ListProduct"
                        component={ListProduct}
                        options={{
                            title: "Vật tư nông nghiệp"
                        }}
                    />
                    <Stack.Screen name='Giỏ Hàng' component={shopping} />
                </Stack.Navigator>
            </NavigationContainer>



        )
    }
}

