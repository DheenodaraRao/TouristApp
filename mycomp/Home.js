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
  Alert,
} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import MyCard from './MyCard';
import PickerWithLabel from './PickerWithLabel';

let mystates = require('./StateCodes');
let path = require('../config/serverpath');

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
          'isFetching' : false,
          'noStateSelected': true,
          'places' : [],

        }

        this._load = this._load.bind(this);
    }

    componentDidMount(){
      this._load();
    }

    _load(){
      let serverpath = path.serverpath;
      let fullpath = '';
      if(this.state.noStateSelected){
        fullpath = serverpath + '/api/places';
      }
      else{
        fullpath = serverpath + '/api/places/'+ this.state.selectedState; 
      }

      this.setState({isFetching: true});
      console.log(fullpath);
      fetch(fullpath, {method: 'GET',                        // Specifies an HTTP POST request
      headers: {
        Accept: 'application/json',          // The client sends data in JSON
        'Content-Type': 'application/json',  // The response content is in JSON
      }})
      .then((response) => {
        if(!response.ok){
          Alert.alert('Error',response.status.toString());
          throw Error('Error'+ response.status);
        }
        console.log('******', response);
        return response.json()
      })
      .then((places) => {
        console.log('######', places);
        this.setState({places: places});
        //console.log('CurrentState: '+ this.state.places);
        this.setState({isFetching: false});
      })
      .catch((error) => {
        console.log(error)
      });
    }

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
          this.setState({
            selectedState: itemValue,
            noStateSelected: false,
          }, () => {
            this._load();
          })
          console.log('++++++Pressed', itemValue);
          console.log('State: ', this.state.selectedState);
        }}
      />

      {/*Testing out picker*/}
      {/*<Text> State is {this.state.selectedState}</Text>
      <Text>{this.state.places.length}</Text>
      {console.log('+++++++place state: ',this.state.places)}
      <Text>{path.serverpath +' '+ this.state.isFetching }</Text>
      */}

      {this.state.places.map(item => 
      <MyCard 
      cardTitle={item.placename}
      cardImageLink={item.imageurl}
      cardContent={item.location}
      onPress={
        () => {
          this.props.navigation.navigate('Details',
        {
          itemId : item.id,
          itemName: item.placename,
        })
        }
        
      }
      />)
      }
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
