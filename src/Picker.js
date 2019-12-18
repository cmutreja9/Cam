import React from 'react'
import  Modal from 'react-native-modal'
import { Text, View, StyleSheet, Button } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import SearchableDropDown from 'react-native-searchable-dropdown'

const projects = [{label: 'One', value: 1},
                  {label: 'Two', value: 2},
                  {label: 'Three', value: 3},
                  {label: 'Four', value: 4},
                  {label: 'Five', value: 5}]

const ii = [{name: 'One', id: 9},
            {name: 'Two', id: 2},
            {name: 'Three', id: 3},
            {name: 'Four', id: 4},
            {name: 'Five', id: 5}]

export default class Pick extends React.Component {

    state = { show: false, text_: 'Select the project.'}

    render() {
        return(
            <View style={{marginTop: 100}}>
                <Button style={{marginTop: 100}} title='Show Modalai' onPress={() => {
                    console.log("Hi from onPress")
                    this.setState({show:true})} }/>
                <Modal isVisible={this.state.show} backdropColor='steelblue'  backgroundColor='Pink'
                      onBackdropPress={() => {console.log("Backdropping");this.close; this.setState({show:false})}}>
                    
                    
                   
                        <SearchableDropDown style={{height: '50%'}} 
                            onItemSelect = { item => {console.log(item)
                                            this.setState({show:false})}}
                            onTextChange = { txt => console.log(txt)}
                            placeholder='Select project.'
                            items={ii}
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
                                color:'pink'
                            }}
                            itemContainerStyle={{ maxHeight: '60%'}}
                            containerStyle={{maxHeight:'25%'}}
                    
                    />
                         
                    
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 12,
    },
  });
  