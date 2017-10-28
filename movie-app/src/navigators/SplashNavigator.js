import { TabNavigator } from 'react-navigation';

import Movies from '../components/Movies';
import Favorites from '../components/Favorites';

const Splash = {
  Dashboard: { screen: Movies },
  Favorites: { screen: Favorites},
};

const NavigatorOptions = {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
};

export default TabNavigator(Splash, NavigatorOptions);