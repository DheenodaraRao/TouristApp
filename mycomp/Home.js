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
export default class Home extends Component {

    constructor(props) {
        super(props)
    };

  render() {
    return (
      <ScrollView style={inputStyles.container}
      showsHorizontalScrollIndicator={true}
      >

      {/*Card 1*/}
      <Card style={inputStyles.card}>
        <CardImage 
          source={{uri: 'https://res.cloudinary.com/touristimages/image/upload/v1531925296/touristimages/pantai-cenang-langkawi.jpg'}} 
        />
        <CardTitle
          title="Pantai Cenang"
        />
        <CardContent text="Langkawi, Kedah" />
        <CardAction 
          separator={true} 
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#3b5998"
          />
        </CardAction>
      </Card>
    
    {/*Card 2*/}
    <Card style={inputStyles.card}>
        <CardImage 
          source={{uri: 'http://bit.ly/2GfzooV'}} 
        />
        <CardTitle
          title="Pantai Rendang"
        />
        <CardContent text="Pulau Rendang, Kedah" />
        <CardAction 
          separator={true} 
          inColumn={false}>
          <CardButton
            onPress={() => {}}
            title="Explore"
            color="#BEA42E"
          />
        </CardAction>
      </Card>
    </ScrollView>
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
  }
  
});
