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
import { FloatingAction } from 'react-native-floating-action';
import MyCard from './MyCard';
import PickerWithLabel from './PickerWithLabel';

let mystates = require('./StateCodes');

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
      <PickerWithLabel
        label={'State'}
        prompt={'Select State'}
        items={mystates.states}
        value={this.state.selectedState}
        onValueChange={(itemValue, itemIndex) => {
          this.setState({selectedState: itemValue})
        }}
      />

      {/*Testing out picker*/}
      <Text> State is {this.state.selectedState}</Text>

    </ScrollView>

        {/*Floating Action Component*/}
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
