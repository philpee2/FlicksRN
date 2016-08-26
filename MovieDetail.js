/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import MovieShape from './MovieShape';
import { getImageUri } from './Api';
import Rating from './Rating';
import { getYear } from './getYear';

const propTypes = {
  movie: MovieShape,
};

export default class MovieDetail extends Component {

  render() {
    const {
      movie: {
        backdrop_path,
        poster_path,
        overview,
        release_date,
        title,
        video,
        vote_average,
      }
    } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{ uri: getImageUri(backdrop_path || poster_path) }}
          resizeMode="cover"
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{getYear(release_date)}</Text>
          <Rating rating={vote_average} />
          <Text>{overview}</Text>
        </View>
      </View>
    );
  }
}

MovieDetail.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
  },
  backdrop: {
    height: 200,
    alignSelf: 'stretch',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsContainer: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-around'
  }
});
