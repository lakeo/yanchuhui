/**
 * Created by xiaolu on 2017/8/3.
 */
import React from 'react';
import { RefreshControl, Button, FlatList, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import ShowCarousel from './ShowCarousel'


class ShowItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  constructor(props) {
    super(props)
  }
  render() {
    let status = this.props.data.item.status;
    let color = this.props.data.item.titleColor || 'black'
    let statusLabels = status && status.map((data, index) => {
          return (<Text key={'l_' + index}
                style={[styles.ShowItemLabelsText, {color: color, borderColor: color}]}>
            {data}
          </Text>)
        });
    return (
      <View style={[{flex: 1}, styles.ShowItem]}>
        <Image source={this.props.data.item.image} style={[styles.ShowItemImage]}>
           <Text style={[styles.ShowItemTitle, {color: this.props.data.item.titleColor || 'black'},]}>
              {this.props.data.item.title}
           </Text>
           <View style={[{flexDirection: 'row'}, styles.ShowItemLabels]}>
             {statusLabels}
           </View>
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ShowItem: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
  },
  ShowItemImage: {
    width: 370,
    height: 200,
  },
  ShowItemTitle: {
    position: 'absolute',
    top: 5,
    left: 10,
    backgroundColor: 'transparent',
    fontSize: 18,
  },
  ShowItemLabels: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  ShowItemLabelsText: {
    fontSize: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 4,
    borderRadius: 5,
    marginLeft: 5,
  }
})

class ShowListScreen extends React.PureComponent {
  _keyExtractor = (item, index) => item.id;

  constructor(props) {
   super(props)
    this.state = {
      isRefreshing: false,
    }
  }

  renderRow = (item, index) => {
    if (item.is_rest) {
      return <ShowItem data={item} isSubscribed={item.isSubscribed}/>
    }
    return (
      <TouchableOpacity onPress={() => this.goToCarousel(item)}>
        <ShowItem data={item} />
      </TouchableOpacity>
    )
  }

  goToCarousel = (item) => {
    this.props.navigation.navigate('ShowCarousel', {show: item});
  }

  render() {
    let data = [
      {
        id: 1,
        title: '张学友演唱会',
        image: require('../assets/zhangxueyou.jpg'),
        titleColor: 'white',
        status: ['预售中', '巡演'],
        location: '武汉',
        date: '2018-10-01',
      },
      {
        id: 2,
        title: '梁静茹演唱会',
        image: require('../assets/liangjingru.jpg'),
        status: ['预售中'],
        location: '南京',
        date: '2017-8-01',
      },
    ]
    let isRefreshing = this.state.isRefreshing
    return (
      <FlatList
        data={data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderRow}
        style={{backgroundColor: '#424242',}}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            title="刷新..."
            tintColor="#fff"
            titleColor="#fff"
          />
        }
      />
    );
  }
}

export default ShowListScreen;
