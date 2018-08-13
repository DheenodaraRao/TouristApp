import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './mycomp/Home';
import History from './mycomp/History';
import Details from './mycomp/Details';
import MyLogo from './mycomp/MyLogo';
import {fromTop, fromLeft, } from 'react-navigation-transitions'

export default createStackNavigator({

  Home:{
    screen: Home,
  },
  History:{
    screen: History,
  },
  Details: {
    screen: Details,
  }
},
  {
    initialRouteName: 'Home',
    transitionConfig: () => fromLeft(500),
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