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
  ListView,
} from 'react-native';
import { NOW_PLAYING, TOP_RATED, API_KEY, BASE_DATA_URL } from './EndpointConstants';
import MovieRow from './MovieRow';

function getUrl(endpoint) {
  return `${BASE_DATA_URL}/${endpoint}?api_key=${API_KEY}`
}

const propTypes = {
  endpoint: PropTypes.oneOf([NOW_PLAYING, TOP_RATED]).isRequired,
}

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      isLoading: true,
      dataSource: ds,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    this.setState({ isLoading: true });
    const url = getUrl(this.props.endpoint);
    fetch(url).then(movies => movies.json()).then(moviesJson => {
      this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows(moviesJson.results),
      });
    });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { dataSource, isLoading } = this.state;
    if (isLoading) {
      return <Text style={styles.loading}>Loading...</Text>
    } else {
      return (
        <ListView
          style={styles.container}
          dataSource={dataSource}
          renderRow={movie => <MovieRow movie={movie} />}
        />
      );
    }
  }
}

MovieList.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  loading: {
    marginTop: 20,
  }
});
