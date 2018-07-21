/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

type Props = {};
export default class MyCard extends Component{

    constructor(props){
        super(props)

        this.imageLink = this.props.cardImageLink ? this.props.cardImageLink: 'https://res.cloudinary.com/touristimages/image/upload/v1532100989/picture-not-available.jpg';
    }

  render() {
    return (
        <Card style={inputStyles.card}>

        <CardImage 
          source={{uri: this.imageLink}}
        />

        <CardTitle
          title={this.props.cardTitle ? this.props.cardTitle:"No Title Provided"}
        />

        <CardContent text= { this.props.cardContent ? this.props.cardContent: "No Content"}
        />

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
    );
  }
}

const inputStyles = StyleSheet.create({
    card:{
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 20,
    }
    
  });
