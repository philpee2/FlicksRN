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
import { NOW_PLAYING, TOP_RATED } from './EndpointConstants';
import MovieRow from './MovieRow';
import { fetchMovies } from './Api';

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
      error: '',
    };

    this.loadMovies = this.loadMovies.bind(this);
  }

  loadMovies() {
    this.setState({ isLoading: true });
    fetchMovies(this.props.endpoint).then(movies => {
      this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows(movies),
      });
    }).catch(error => {
      this.setState({ isLoading: false, error });
    });
  }

  componentDidMount() {
    this.loadMovies();
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
