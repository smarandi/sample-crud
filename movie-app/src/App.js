import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';

import Routes from './Routes';

export default App = () => (<Provider store={Store}><Routes /></Provider>);

// import { Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';

// const AppNavigator = StackNavigator(Routes, NavigatorOptions);
//
// class Splash extends Component {
//   render() {
//     return (<AppNavigator />);
//   }
// }
