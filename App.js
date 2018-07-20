import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './mycomp/Home';
import History from './mycomp/History';
import MyLogo from './mycomp/MyLogo';

export default createStackNavigator({

  Home:{
    screen: Home,
  },
  History:{
    screen: History,
  },
},
  {
    initialRouteName: 'Home',
    navigationOptions:{
      headerStyle:{
        backgroundColor: '#3b5998', //Dark Blue
      },
      headerTintColor: 'white',
      headerTitleStyle:{
        fontWeight: 'bold',
        marginLeft: 0,
      },
      headerLeft: <MyLogo />
    },
});