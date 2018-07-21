/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, ScrollView,
  View,
  Picker,
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { FloatingAction } from 'react-native-floating-action';
import MyCard from './MyCard';

const actions = [{
  text: 'History',
  icon: {uri: 'https://res.cloudinary.com/touristimages/image/upload/v1532093526/touristimages/baseline_history_white_18dp.png'},
  name: 'history',
  position: 1
}];

type Props = {};
export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
          'selectedState' : '',
        }
    };

  render() {
    return (
      <View style={inputStyles.container}>
      <ScrollView
      showsHorizontalScrollIndicator={true}
      >

      {/*Picker Component*/}
      <Picker
        mode={'dropdown'}
        prompt={'Select State'}
        selectedValue = {this.state.selectedState}

        onValueChange = {
          (newState, newStateIndex) => this.setState({selectedState: newState})
        }
      >

        <Picker.Item label='Selangor' value='01'/>
        <Picker.Item label='Kedah' value='02'/>
        <Picker.Item label='Johor' value='03'/>
      </Picker>

      <Text> State is {this.state.selectedState}</Text>

    </ScrollView>

      <FloatingAction
          actions={actions}
          overrideWithAction={true}
          color={'#3b5998'}
          onPressItem={
            () => {
              this.props.navigation.navigate('History')
            }
          }
          iconWidth = {30}
          iconHeight = {30}
          distanceToEdge	= {20}
        />
    </View>
    );
  }
}

const inputStyles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 5,
      backgroundColor: '#f7f7f7',
  },
  card:{
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
  },
  style:{
    color: '#3b5998',
    fontSize: 20,
    margin: 10,
    padding: 10,
  }
});
