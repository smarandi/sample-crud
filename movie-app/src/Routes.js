import { StackNavigator } from 'react-navigation';

import Splash from "./navigators/SplashNavigator";
import AddMovieScreen from './components/AddMovieScreen';
import ViewMovieDetails from './components/ViewMovieDetails';
import UpdateMovieScreen from './components/UpdateMovieScreen';
const Routes = {
  Splash: {screen: Splash },
  AddMovieScreen: {screen: AddMovieScreen},
  ViewMovieDetails: {
    path: 'movie/:id',
    screen: ViewMovieDetails
  },
  UpdateMovieScreen: {
    path: 'movie/:id',
    screen: UpdateMovieScreen,
  }
};

const NavigatorOptions = { headerMode: 'none' };

export default StackNavigator(Routes, NavigatorOptions);
