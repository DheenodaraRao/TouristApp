/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet, Touchable,
  Text, ScrollView, FlatList, TouchableHighlight,
  View,
} from 'react-native';

let SQLite = require('react-native-sqlite-storage');

type Props = {};
export default class History extends Component{

  //setting the back button and title
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: '',
      title: 'History'
    };
  };

  constructor(props){
    super(props)

    this.state = {
      places: []
    }

    this._query = this._query.bind(this);

    this.db = SQLite.openDatabase({
      name: 'historydb',
      createFromLocation : '~historydb.sqlite'
    }, this.openDb, this.errorDb);
  }

  openDb(){
    console.log('Database opened successfully');
  }

  errorDb(err){
    console.log('Error occured ', err);
  }

  _query(){
    this.db.transaction((tx) => {
      tx.executeSql('Select distinct id, name, location from history order by id desc', [], (tx, results) => {
        this.setState({places: results.rows.raw()});
      })
    })
  }

  componentDidMount(){
    this._query();
  }

  render() {
    return (
      //can be replaced with flatmap etc, scrollview is just for initial development
      <View style={inputStyles.container}>
        <FlatList
          data={ this.state.places }
          extraData={this.state}
          showsVerticalScrollIndicator={ true }
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={'#cccccc'}
              onPress={ () => {}}
            >
              <View style={inputStyles.item}>
                <Text style={inputStyles.itemTitle}>{ item.name }</Text>
                <Text style={inputStyles.itemSubtitle}>{item.location}</Text>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={(item) => {item.id.toString()}}
        />
      </View>
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
  },
  item: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',

  },
  itemSubtitle: {
    fontSize: 18,
  }
  
});
