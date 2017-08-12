/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, View, Text } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainPage from './page/MainPage';

const TabsInDrawer = DrawerNavigator({
  StacksOverTabs: {
    screen: MainPage,
    navigationOptions: {
      drawer: () => ({
        label: 'Stacks Over Tabs',
        icon: ({ tintColor }) => (
          <MaterialIcons
            name="filter-2"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      }),
    },
  },
},
    {drawerWidth: 300,
    drawerPosition: 'left',
       contentComponent: props => (<Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />)
    }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default TabsInDrawer;