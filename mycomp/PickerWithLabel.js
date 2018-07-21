import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Picker
} from 'react-native';

export default class PickerWithLabel extends Component {
    constructor(props) {
        super(props);

        this.orientation = this.props.orientation ? (this.props.orientation == 'horizontal' ? 'row' : 'column') : 'column';
    }

    render() {
        return (
            <View style={inputStyles.container}>
              <Text style={inputStyles.label}>
                {this.props.label ? this.props.label : ''}
              </Text>
              <Picker
                style={inputStyles.picker}
                mode={this.props.mode ? this.props.mode : 'dropdown'}
                prompt={this.props.prompt ? this.props.prompt : ''}
                selectedValue={this.props.value}
                onValueChange={this.props.onValueChange}
              >
                {this.props.items.map((item, index) => {
                  return(<Picker.Item label={item.value} value={item.key} key={item.key} />)
                })}
              </Picker>
            </View>
        )
    }
}

const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    label: {
        flex: 2,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 3,
        textAlignVertical: 'center',
        alignItems: 'center',
        color: '#3b5998',
    },
    picker:{
        flex: 8,
        marginLeft: 2,
    }

});