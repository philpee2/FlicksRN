import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import NavApp from './NavApp';
import { NOW_PLAYING, TOP_RATED } from './EndpointConstants';

function tabStyle(selectedTabIndex, tabIndex) {
  if (selectedTabIndex === tabIndex) {
    return [styles.tabBarText, styles.selectedTab];
  } else {
    return styles.tabBarText;
  }
}

export default class TabBar extends React.Component {
  state = {
    tabIndex: 0,
  }

  selectTab(tabIndex) {
    this.setState({ tabIndex });
  }

  render() {
    const { tabIndex } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.scene}>
          <NavApp endpoint={tabIndex === 0 ? NOW_PLAYING : TOP_RATED} />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => this.selectTab(0)}>
            <Text style={tabStyle(tabIndex, 0)}>Now playing</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.selectTab(1)}>
            <Text style={tabStyle(tabIndex, 1)}>Top rated</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgb(175, 29, 189)',
    borderWidth: 1,
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    height: 50,
    backgroundColor: 'rgb(94, 94, 94)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarText: {
    color: 'rgba(255, 255, 255, 0.36)',
    fontSize: 20,
  },
  selectedTab: {
    color: 'white',
  },
});
