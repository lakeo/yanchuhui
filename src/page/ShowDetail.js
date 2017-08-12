/**
 * Created by xiaolu on 2017/8/3.
 */

import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
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
      <View style={[{padding: 14}, style]}>
          
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
    const sessionColor = 'red'
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.header}>
          <Text style={[styles.headerFont, ]}>地点：{'四川省体育馆'}</Text>
          <Text style={styles.headerFont}>时间： {'2017-09-08 周五 19：30'} </Text>
        </View>
        <ScrollView style={styles.content}>
            <Show style={{paddingLeft: 0, paddingRight: 0}} lineNumber={2} />
        </ScrollView>
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
    padding: 10
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

