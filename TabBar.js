import React from 'react';
import {
  View,
  TabBarIOS,
  StyleSheet,
} from 'react-native';
import NavApp from './NavApp';
import { NOW_PLAYING, TOP_RATED } from './EndpointConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Roughly the height of the tab bar
    marginBottom: 50,
  },
});

function tabStyle(selectedTabIndex, tabIndex) {
  if (selectedTabIndex === tabIndex) {
    return [styles.tabBarText, styles.selectedTab];
  } else {
    return styles.tabBarText;
  }
}

const nowPlayingIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCAIMGB2o7j+MAAACsUlEQVQ4y7XVT2icRRgG8N983+6GZKNJSKJVg4FCQ3sRD6UqiBRR0FpBEFHBP/XiRdGDNw/Wgxc9CHoRPUkVjy2K+Oci2ta0RVAP6oZIlaS1AVdqu6txN9nvGw+b/7tr9OBzGIYZ3vd55p15n+F/RpB030i3DU1FUUEi/jfOVIqr3YIgdErqhUSQST3gkBGfKHrTnLCRv9DzlLncbZ42oV/RXfr1eU4i205sgilvmHZKVZSJvnfCzWwsXugIjHJjnnKHxHUmsSQgNe2sQxJ5t2onEpmSJ7xot1E3GLEkVfesqr1yBRfNSLfWPaykOeB9076xKIr+0JQ7acj9ouikj1zZqTfgRm+bdsbvokxTdMx+p0UfO68pOuM9fevBycq04GVv2WXSPsMyNVFTxWlzuNO1Shpq5j1qYKPsgBGfmhblWnLRI+7VUvOlzLJcdNnnjjviOw+u1mqVeafEBGouaVhwUdWvrnCToKDhayc0JO5zyTNekknaGRLRC4btVlRxK+6212OukUtFs2bUDdljj5LrncfRVeaIdww6h8tGEe1yFRLzPjOrYtQ+w46qY9Ty5qfBa45rimZkMrnoN1/40Cmv4rDoFbwuqjjSPuz6I/nJQXU7jCC16FuzMn+63biW/aZkCg6aUHXBMWH9ugtannePIRPKfnBOMGynUUUNJcuKlpU09Kv4yuOCGNauKxryARb1yQ2atKOjZaJgwVl1BzYGtzWUPeRJM8ZMKWuIaz0UBVHQMucXh/28ObjNnnpXWZ+WrItRBJlxD6+aQtiyScmA5V6WJ2haYr0tO1vknxE2T1bNLa6txZWxG2KvnO0027NvYJ4yoKAlaiJVFw0pm7ew2S83o+2e4wY1DaoJoqIxP7ogsdhb5DrzmD5/GZCoKxi2qGrp30nvVsnQ7YfYir8BDIrjhC0vbFAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMDgtMDJUMTI6MjQ6MjktMDQ6MDCk20bLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA4LTAyVDEyOjI0OjI5LTA0OjAw1Yb+dwAAAABJRU5ErkJggg==';
const topRatedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCAIMGhGTbhElAAAB1ElEQVQ4y5XUvU4bQRAH8N/enUGykFAkIiipDC9BAxUSkJqSnornQLxECl6BhpIG8QKUkYKCLIoo4SOJ724pfP44n23iGeludndm/rP731nmSRDmLSdzAlmzVlkLSopLl5W1kAQse/BgeXHsFLuiaHc29qw9B3wBR4siByy5F0X3lj4KD5IxbWFHVCpFO2jV1kO97L7jQCMOUSgqq7mODEG0YUMuFauspcNh6kNfKysKCplHj0I/RYZTUS6OaTnFipXXaRU1PKATz6Je5VrWggdzPdGzk8kDTLDlTtRT1JAGWuiJ7mxNIzhDy8UEah39Qmu84Dp6igPdxj5LUdcB0tmtFGTY9NQ4sCebyJp7HUlUom21kXZVmxHD04L74yOZXBjuNMhljszr/iFpN6JCPrxPuUJ089ENT7CtJ/onenHs2Es16tmej53hTPQmutUBHbfVzNksmkZFX4tK5zJk1fdcKbqeV3iCjlLX/hijffb3dZU6swtPsefK+gSjffbXXdlTe5JC9Q0Vz/22S5WIY6ymkxyPgpvjhqNEUExz7mjL5FVLBrl10XffBi0/mxw+W/HXil+CVMsfP/z0OrWCBvKaZW/aEr+lPnnV1bOwhOH/P97qd5DK452mSvA3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA4LTAyVDEyOjI2OjE3LTA0OjAwfp7qSAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wOC0wMlQxMjoyNjoxNy0wNDowMA/DUvQAAAAASUVORK5CYII=';

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
      <TabBarIOS>
        <TabBarIOS.Item
          title="Now playing"
          selected={tabIndex === 0}
          onPress={() => this.selectTab(0)}
          icon={{ uri: nowPlayingIcon }}
        >
          <View style={styles.container}><NavApp endpoint={NOW_PLAYING} /></View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Top rated"
          selected={tabIndex === 1}
          onPress={() => this.selectTab(1)}
          icon={{ uri: topRatedIcon }}
        >
          <View style={styles.container}><NavApp endpoint={TOP_RATED} /></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
