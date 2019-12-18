import React from 'react'
import { Platform, StyleSheet, View, Button, Picker, Alert, Text } from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown'

var items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'angellist' },
    { id: 2, name: 'codepen' },
    { id: 3, name: 'envelope' },
    { id: 4, name: 'etsy' },
    { id: 5, name: 'facebook' },
    { id: 6, name: 'foursquare' },
    { id: 7, name: 'github-alt' },
    { id: 8, name: 'github' },
    { id: 9, name: 'gitlab' },
    { id: 10, name: 'instagram' },
    { id: 11, name: 'angellist_' },
    { id: 12, name: 'codepen_' },
    { id: 13, name: 'envelope_' },
    { id: 14, name: 'etsy_' },
    { id: 15, name: 'facebook_' },
    { id: 16, name: 'foursquare_' },
    { id: 17, name: 'github-alt_' },
    { id: 18, name: 'github_' },
    { id: 19, name: 'gitlab_' },
    { id: 20, name: 'instagram_' },
  ];

export default class Picke extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedValue: 'angellist'
        }
    }

    alertPickerValue = () => {
        console.log("Hey")
        Alert.alert("Selected book is: ", this.state.selectedValue)
    }

    render () {
        return(
            
            <View style={{flex:1, marginTop:30}}>
                <Text style={{marginLeft: 10}}>
                    Searchable Dropdown from Static Array!
                </Text>
                <SearchableDropdown 
                    onTextChange={text => console.log(text)} 
                    onItemSelect={item => console.log(item)}
                    containerStyle={{padding: 5}}
                    textInputStyle= {{
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: '#FAF7F6'
                    }}
                    itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1
                    }}
                    itemTextStyle={{
                        color:'#222'
                    }}
                    itemContainerStyle={{ maxHeight: '60%'}}
                    items={items}
                    defaultIndex={2}
                    placeholder="Select Project"
                    //resetValue={true}
                        />
            </View> 
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      margin :30
    },
  });
