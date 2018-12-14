import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native'
import { FormattedMessage } from 'react-intl'
import { Metrics } from '../../Themes'

export default class Button extends Component {

  constructor(props) {
    super(props)
  }

  loadingOrText() {
    if (this.props.isLoading && this.props.showLoading) {
      return (
        <ActivityIndicator size="large" style={[{
          position: 'absolute', left: 0, right: 0, bottom: 0, top: 0
        }]} />
      )
    } else {
      return <Text style={styles.text}>
        {this.props.id !== null && this.props.id !== undefined ?
          <FormattedMessage id={this.props.id} /> : this.props.text
        }
      </Text>
    }
  }
  render() {
    return (

      <TouchableOpacity style={[styles.container, this.props.disabled && { opacity: 0.5 }, this.props.style]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}>
        {this.loadingOrText()}
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: Metrics.heightUnit(48),
    width: Metrics.widthUnit(312),
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: Metrics.heightUnit(6),
    borderWidth: 2,
    borderColor: '#3a84ff'
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    color: "#3a84ff",
    fontWeight: '500',
    fontSize: Metrics.heightUnit(16),
    letterSpacing: 0,
    fontFamily: "Roboto-Medium",
  }
})
