/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MovieList from './MovieList';
import { NOW_PLAYING } from './EndpointConstants';

class FlicksRN extends Component {
  render() {
    return (
      <MovieList endpoint={NOW_PLAYING} />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('FlicksRN', () => FlicksRN);
