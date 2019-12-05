import React from 'react'
import { Platform, StyleSheet, View, Dimensions } from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'



export default class ZoomView extends React.Component {
    onGesturePinch =({nativeEvent}) => {
        
        this.props.onPinchProgress(nativeEvent.scale)
    }

    onPinchHandlerStateChange = (event) => {
        const pinch_end = event.nativeEvent.state === State.END
        const pinch_begin = event.nativeEvent.oldState === State.BEGAN
        const pinch_active = event.nativeEvent.state === State.ACTIVE
        
        if(pinch_end){
            this.props.onPinchEnd()
        } else if (pinch_begin && pinch_active){
            this.props.onPinchStart()
        }
    }

    render () {
        return (
            <PinchGestureHandler
                onGestureEvent={this.onGesturePinch}
                onHandlerStateChange={this.onPinchHandlerStateChange}>
                <View style={{height: Dimensions.get('window').height,
                              width: "100%", flexDirection:"column-reverse"}}>
                    {this.props.children}
                </View>

            </PinchGestureHandler>
        )
    }
}

