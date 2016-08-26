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
import moment from 'moment';

const propTypes = {
  movie: MovieShape,
};

function getYear(date) {
  return moment(date, 'YYYY-MM-DDD').year();
}

export default class MovieDetail extends Component {

  render() {
    const {
      movie: {
        backdrop_path,
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
          source={{ uri: getImageUri(backdrop_path) }}
          resizeMode="cover"
        />

        <Text>{title}</Text>
        <Text>{getYear(release_date)}</Text>
        <Text>{vote_average}</Text>
        <Text>{overview}</Text>

      </View>
    );
  }
}

MovieDetail.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
  },
  backdrop: {
    height: 200,
    alignSelf: 'stretch',
  }
});
