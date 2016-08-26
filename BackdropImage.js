/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PropTypes, Component } from 'react';
import {
  Image,
} from 'react-native';

function getDimension(width, height) {
  return width > height ? { width: width / 2, height } :  { height: height / 2, width };
}

const propTypes = {
  deviceWidth: PropTypes.number.isRequired,
  deviceHeight: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
};

export default class BackdropImage extends Component {
  render() {
    const { deviceWidth, deviceHeight, source } = this.props;
    return (
      <Image
        style={getDimension(deviceWidth, deviceHeight)}
        source={{ uri: source }}
        resizeMode="cover"
      />
    );
  }
}

BackdropImage.propTypes = propTypes;
