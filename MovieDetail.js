/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import MovieShape from './MovieShape';

const propTypes = {
  movie: MovieShape,
};

export default class MovieDetail extends Component {

  render() {
    const { movie} = this.props;

    return <Text style={styles.container}>{movie.title}</Text>
  }
}

MovieDetail.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
