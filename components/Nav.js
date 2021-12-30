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
                            headerRight: () => (
                                <TouchableOpacity>
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
                                            }}> 1</IText>
                                        </IView>
                                    </IView>
                                </TouchableOpacity>
                            )

                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>



        )
    }
}

