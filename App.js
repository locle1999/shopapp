/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import IView from "./components/IView"
import Product from "./components/Product"
import FromLogin from './components/FromLogin';
import Nav from './components/Nav';
import ListProduct from './components/ListProduct';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import listReducer from './store/Reducer/listReducer';
import thunk from 'redux-thunk';
const storeReducer = createStore(listReducer, applyMiddleware(thunk))

const App = () => {

  return (
    <>
      <Provider store={storeReducer}>
        <Nav />
        {/* <FromLogin /> */}
        {/* <Product /> */}

      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
