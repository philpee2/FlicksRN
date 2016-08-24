/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import MovieShape from './MovieShape';
import { BASE_IMAGE_URL } from './EndpointConstants';

const propTypes = {
  movie: MovieShape.isRequired,
};

function getPosterUri(movie) {
  return `${BASE_IMAGE_URL}/${movie.poster_path}`;
}

export default class MovieRow extends Component {

  render() {
    const { movie } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: getPosterUri(movie) }} />
        <View style={styles.textContainer}>
          <Text
            style={[styles.text, styles.title]}
            numberOfLines={1}
          >
            {movie.title}
          </Text>
          <Text
            style={[styles.text, styles.overview]}
            numberOfLines={3}
          >
            {movie.overview}
          </Text>
        </View>
      </View>
    );
  }
}

MovieRow.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    padding: 10,
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 12,
  },
  text: {
    color: 'rgb(57, 57, 57)',
  },
});
