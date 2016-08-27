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
  TouchableOpacity,
} from 'react-native';
import MovieShape from './MovieShape';
import { getImageUri } from './Api';
import getYear from './getYear';
import Rating from './Rating';

const propTypes = {
  movie: MovieShape.isRequired,
  onPress: PropTypes.func.isRequired,
};

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
  dateAndRating: {
    flexDirection: 'row',
  },
  releaseDate: {
    marginRight: 5,
  },
});

export default class MovieRow extends Component {

  render() {
    const {
      movie: {
        poster_path,
        overview,
        release_date,
        title,
        vote_average,
      },
      onPress,
    } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: getImageUri(poster_path) }}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text
              style={[styles.text, styles.title]}
              numberOfLines={1}
            >
              {title}
            </Text>
            <View style={styles.dateAndRating}>
              <Text style={[styles.text, styles.releaseDate]}>{getYear(release_date)}</Text>
              <Rating rating={vote_average} />
            </View>
            <Text
              style={[styles.text, styles.overview]}
              numberOfLines={3}
            >
              {overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

MovieRow.propTypes = propTypes;
