import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const propTypes = {
  message: PropTypes.string,
};

const defaultProps = {
  message: 'Network Error',
};

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

ErrorMessage.propTypes = propTypes;
ErrorMessage.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B454BFF',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
