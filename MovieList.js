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
  View,
  RefreshControl,
} from 'react-native';
import { NOW_PLAYING, TOP_RATED } from './EndpointConstants';
import MovieRow from './MovieRow';
import { fetchMovies } from './Api';
import ErrorMessage from './ErrorMessage';

const propTypes = {
  endpoint: PropTypes.oneOf([NOW_PLAYING, TOP_RATED]),
  onMoviePress: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

const defaultProps = {
  endpoint: NOW_PLAYING,
};

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      isLoading: true,
      isRefreshing: false,
      dataSource: ds,
      hasError: false,
      movies: [],
    };

    this.loadMovies = this.loadMovies.bind(this);
  }

  loadMovies({ endpoint = this.props.endpoint, fromRefresh = false } = {}) {
    this.setState({ isLoading: !fromRefresh, isRefreshing: fromRefresh });
    fetchMovies(endpoint).then(movies => {
      this.setState({
        isLoading: false,
        isRefreshing: false,
        hasError: false,
        movies,
      });
    }).catch(error => {
      console.log(error)
      this.setState({ isLoading: false, hasError: true });
    });
  }

  componentDidMount() {
    this.loadMovies();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.endpoint !== this.props.endpoint) {
      this.loadMovies({ endpoint: nextProps.endpoint });
    }
  }

  filteredMovies = () => {
    const { searchText } = this.props;
    const { movies } = this.state;
    return movies.filter(movie => movie.title.includes(searchText));
  }

  render() {
    const { dataSource, isLoading, isRefreshing, hasError } = this.state;
    const { onMoviePress } = this.props;
    if (isLoading) {
      return <Text style={styles.loading}>Loading...</Text>
    } else {
      return (
        <View style={styles.container}>
          {hasError && <ErrorMessage />}
          {/* Added cloneWithRows here to make things more declarative. This probably has perf
          issues? Might be good to optimize with shouldComponentUpdate */}
          <ListView
            dataSource={dataSource.cloneWithRows(this.filteredMovies())}
            renderRow={movie => (
              <MovieRow movie={movie} onPress={() => onMoviePress(movie)} />
            )}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={() => this.loadMovies({ fromRefresh: true })}
              />
            }
          />
        </View>
      );
    }
  }
}

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
    backgroundColor: '#DFE5E9FF',
  },
  loading: {
    marginTop: 70,
  }
});
