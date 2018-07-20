import React, {Component} from 'react';
import {
    Image, View, Text, StyleSheet
} from 'react-native';

type Props = {};
export default class MyLogo extends Component{
    render() {
      return (
        <View style={inputStyles.container}>
        <Image
          source={{uri: 'https://res.cloudinary.com/touristimages/image/upload/v1532065756/touristimages/baseline_card_travel_white_18dp.png'}}
          style = {inputStyles.image}
        />
        
        <Text style = {inputStyles.text}> 
          MyTourist App
        </Text>
        </View>
      );
    }
  }

  const inputStyles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#3b5998',
    },
    container:{
      flex: 1,
      flexDirection: 'row'
    }, 
    image:{
      width: 30, 
      height: 30, 
      marginLeft: 15,
      marginRight: 15,
    }
    
  });
  