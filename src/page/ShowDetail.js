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
          <Text style={[styles.headerFont, {color: sessionColor}]}>{''}</Text>
          <Text style={styles.headerFont}> {0} mins</Text>
        </View>
        <ScrollView style={styles.content}>
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
    flexDirection: 'row',
    alignItems: 'center',
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
  }
})

