/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PropTypes, Component } from 'react';
import {
  Text,
} from 'react-native';

const propTypes = {
  rating: PropTypes.number.isRequired,
};

function getStyle(rating) {
  if (rating > 7.5) {
    return 'green';
  } else if (rating > 5.0) {
    return '#C9C32AFF';
  }
  return 'red';
}

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    if (rating === 0) {
      return <Text>No ratings</Text>;
    }
    return <Text style={{ color: getStyle(rating), fontWeight: 'bold' }}>{rating}</Text>;
  }
}

Rating.propTypes = propTypes;
