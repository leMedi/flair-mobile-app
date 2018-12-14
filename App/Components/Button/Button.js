import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Metrics } from '../../Themes';
import ActivityIndicator from "../ActivityIndicator";


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  loadingOrText() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator color={"#ffffff"} />
      )
    } else {
      return <Text style={[styles.text, this.props.disabled && { color: "#ffffff" }]}>
        {this.props.id !== null && this.props.id !== undefined ?
          <FormattedMessage id={this.props.id} /> : this.props.text
        }
      </Text>
    }
  }
  render() {

    return (
      <TouchableOpacity style={[styles.container, this.props.style]}
        onPress={() => this.props.onPress()}
        disabled={this.props.disabled}>
        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={this.props.disabled ? ['#79A9FA', '#71BBF7'] : ['#3a84ff', '#2e9ff9']} style={[styles.linearGradient,
        this.props.style && this.props.style.height && { height: this.props.style.height },
        this.props.style && this.props.style.width && { width: this.props.style.width }]}>
          {this.loadingOrText()}
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.heightUnit(48),
    width: Metrics.widthUnit(312),
    borderRadius: Metrics.heightUnit(6),
    marginBottom: Metrics.heightUnit(10),
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    color: "#ffffff",
    fontWeight: '500',
    fontSize: Metrics.heightUnit(16),
    letterSpacing: 0,
    fontFamily: "Roboto-Medium",
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.heightUnit(48),
    width: Metrics.widthUnit(312),
    borderRadius: Metrics.heightUnit(6),
  },
});
