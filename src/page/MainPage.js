/**
 * Created by xiaolu on 2017/8/7.
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons';

import ShowListScreen from './ShowList'
import ShowCarousel from './ShowCarousel'


const StacksOverTabs = StackNavigator({
  Home: {
    screen: ShowListScreen,
    navigationOptions: ({navigation}) => ({
      title: '演唱汇',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4faeca',
      },
    }),
  },
  ShowCarousel: {
    screen: ShowCarousel,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        display: 'none'
      }
    })
  }
});

export default StacksOverTabs;
