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
        <Image
          style={styles.image}
          source={{ uri: getPosterUri(movie) }}
          resizeMode="contain"
        />
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
    paddingTop: 10,
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    height: 100,
    width: 100,
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
