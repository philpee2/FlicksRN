/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Navigator,
  BackAndroid,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NOW_PLAYING, TOP_RATED } from './EndpointConstants';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const propTypes = {
  endpoint: PropTypes.oneOf([NOW_PLAYING, TOP_RATED]).isRequired,
}

const routes = [
  { name: 'movies', title: 'Movies' },
  { name: 'movieDetail' },
];

const routeMapper = {
  LeftButton: (route, navigator) => {
    if (navigator.getCurrentRoutes().length > 1) {
      return (
        <TouchableOpacity onPress={() => navigator.pop()}>
          <Text style={[styles.navText, styles.leftNavText]}>Back</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  },
  RightButton: () => null,
  Title: (route) => <Text style={styles.navText}>{route.title}</Text>,
};

export default class NavApp extends Component {

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    if (this.navBackAndroid && this.navBackAndroid.getCurrentRoutes().length > 1) {
      this.navBackAndroid.pop();
      return true;
    } else {
      return false;
    }
  }

  navBackAndroid = null

  render() {
    const { endpoint } = this.props;
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={(route, navigator) => {
          this.navBackAndroid = navigator;
          if (route.name === 'movieDetail') {
            return <MovieDetail movie={route.movie} />;
          } else if (route.name === 'movies') {
            return (
              <MovieList
                endpoint={endpoint}
                onMoviePress={(movie) => navigator.push({
                  ...routes[1],
                  title: movie.title,
                  movie,
                })}
              />
            );
          }
        }}
        navigationBar={
          <Navigator.NavigationBar routeMapper={routeMapper} style={styles.navBar} />
        }
      />
    );
  }
}

NavApp.propTypes = propTypes;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#00A699',
  },
  navText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  leftNavText: {
    marginLeft: 15,
  }
});
