/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Touchable,
  Text, ScrollView,
  View
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

type Props = {};
export default class History extends Component{

  //setting the back button and title
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: '',
      title: 'History'
    };
  };
  render() {
    return (
      //can be replaced with flatmap etc, scrollview is just for initial development
      <ScrollView style={inputStyles.container}
      showsHorizontalScrollIndicator={true}
      >

        <Text>History Page</Text>

    </ScrollView>
    );
  }
}

const inputStyles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 5,
      backgroundColor: 'white',
  },
  card:{
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
  }
  
});
