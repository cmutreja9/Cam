'use strict'
import React, { PureComponent } from 'react'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class ExampleApp extends PureComponent {
    render() {
        return (
            <View>
                <RNCamera  ref={ref => {this.camera = ref}}
                            style={StyleSheet.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}


                />
            </View>
        )
    }
}
