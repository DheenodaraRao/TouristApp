import React, {Component} from 'react';
import {
    View, Text, Alert, StyleSheet, ScrollView
} from 'react-native';
import DetailCard from './DetailCard';
let path = require('../config/serverpath');


export default class DetailsScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return {
          headerLeft: '',
          title: navigation.getParam('itemName'),
        };
      };

      constructor(props) {
        super(props)
        this.state = {
          'isFetching' : false,
          'places' : [],

        }

        this._load = this._load.bind(this);
    }

      componentDidMount(){
        this._load();
      }

      _load(){
        let serverpath = path.serverpath;

        let fullpath = serverpath + '/api/places/item/' + this.props.navigation.getParam('itemId');
  
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

    render(){
        return(
            <View style={inputStyles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={true}
                 >
               {this.state.places.map(item => 
                    <DetailCard 
                    cardTitle={item.placename}
                    cardImageLink={item.imageurl}
                    cardContent={item.desc1 + ' '+ item.desc2+ ' ' + item.desc3}
                    />)
                 }
                 </ScrollView>
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
  