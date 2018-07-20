import {createStackNavigator} from 'react-navigation';
import Home from './mycomp/Home';
import History from './mycomp/History';

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
        backgroundColor: '#3b5998', //Sangria color
      },
      headerTintColor: '#BEA42E',
      headerTitleStyle:{
        fontWeight: 'bold',
      },
    },
});