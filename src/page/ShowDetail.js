/**
 * Created by xiaolu on 2017/8/3.
 */

import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Show extends Component {
  static propTypes = {
    style: View.propTypes.style,
    isSubscribed: PropTypes.bool,
    lineNumber: PropTypes.number
  };

  static defaultProps = {
    isSubscribed: false,
    lineNumber: 1
  }

  render () {
    const {style, lineNumber} = this.props
    return (
      <View style={[style, {alignItems: 'center', justifyContent: 'space-between'}]}>
           <Image source={require('../assets/dibiaozuiqiang.jpg')} style={{height: 400, width: 300}}></Image>
           <View style={{width: 330, justifyContent: 'space-between', padding: 10}}>
             <Text style={{fontSize: 18, }} numberOfLines={2}>{'周杰伦地表最强世界巡回演唱会-北京站'}</Text>
             <Text style={{fontSize: 14, color: 'gray' }} numberOfLines={2}>{'2017.08.26 周六 19:30'}</Text>
             <Text style={{fontSize: 14, color: 'gray' }}>{'北京工人体育馆'}</Text>
             <Text style={{fontSize: 14, color: 'green'}}>余票:{100}张</Text>
           </View>
      </View>
    )
  }
}


export default class ShowDetail extends Component {
  static propTypes = {
    topic: PropTypes.object,
    style: View.propTypes.style
  }

  render () {
    return (
      <View style={[styles.container, this.props.style]}>
        <ScrollView style={styles.content}>
            <Show style={{paddingLeft: 0, paddingRight: 0}} lineNumber={2} />
        </ScrollView>
        <View style={{borderTopWidth: 1, borderColor: '#eee'}}>
         <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: '#4DC7A4', height: 40, marginTop: 10,borderRadius: 20,alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>
            {'购买'}
          </Text>
         </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  header: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  headerFont: {
    fontSize: 11,
    color: '#555555'
  },
  content: {
    padding: 2
  },
  description: {
    fontSize: 13,
    marginTop: 10,
    lineHeight: 20,
    color: '#555555'
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee'
  },
  font: {
    fontSize: 12.5,
    color: '#555555'
  },
  subscribedLabel: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 0,
    right: 0
  }
})

