/**
 * Created by xiaolu on 2017/8/7.
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import Ionicons from '../../node_modules/react-native-vector-icons/Ionicons';

import ShowListScreen from './ShowList'
import ShowCarousel from './ShowCarousel'


const StacksOverTabs = StackNavigator({
  Root: {
    screen: ShowListScreen,
    navigationOptions: ({navigation}) => ({
      title: '演唱会',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#282b35',
      },
      headerRight:  (<Ionicons
          name={'ios-search'}
          size={26}
          style={{marginRight: 10, color: 'white'}}
      />),
      headerLeft:  (<Ionicons
          name={'ios-contact'}
          size={26}
          style={{marginLeft: 10, color: 'white'}}
          onPress={() => navigation.navigate('DrawerOpen')}
      />)
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
