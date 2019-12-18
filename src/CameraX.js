import React from 'react'
import { Platform, StyleSheet, View, Text } from 'react-native'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import { Dimensions } from 'react-native'
import { Slider } from 'react-native'
import ZoomView from './ZoomView'


const MAX_ZOOM = 7; 
const Zoom_F = Platform.OS === 'ios' ? 0.01 : 0.1;

function GetSlider(props) {
    
    if (props.show) {
        
        return (
            <View>
            <Text> {props.value}</Text>
            <Slider style={{marginBottom:"10%", 
                    color: 'yellow',
                    alignContent:"flex-end", 
                    }}  
                    minimumTrackTintColor='red'
                    maximumTrackTintColor='green'
                    thumbTintColor='pink'
                    value={props.value}
                    onValueChange={(val) => props.onChange(val)} /></View>
        )
    } else {
        
        return null;
    }
}

export default class CameraX extends React.Component {
    constructor(props) {
        super(props)
        this.state = {zoom: 0.0, cameraZoom: 0.0, showSlider: false}
        this.timer = null
        
    }
    
    showTimer = () => {
       
       this.timer = setTimeout(() => this.setState({showSlider:false}), 5000)
    }

    UpdateTimer = (value) => {
        this.setState({zoom:value})   
        // clears the old timer and start new one.                                                                                                  
        clearTimeout(this.timer)                                    
        this.setState({showTimer:true})
        this.showTimer()
    }

    _onPinchStart = () => {
        this._prevPinch = 1
        this.setState({showSlider:true})
       
    }

    _onPinchEnd = () => {
        this._prevPinch = 1
        
        this.showTimer()
    }

    _onPinchProgress = (p) => {
        let p2 = p - this._prevPinch
        if (p2 > 0 && p2 > Zoom_F){
            this._prevPinch = p
            this.setState({zoom: Math.min(this.state.zoom + Zoom_F, 1)}, () => {})
            
        } else if (p2 < 0 && p2 < -Zoom_F){
            this._prevPinch = p
            this.setState({zoom: Math.max(this.state.zoom - Zoom_F, 0)}, () => {})
            
        }
    }
    
    render() {

        slider = <Slider value={this.state.zoom}
                        onValueChange={(val) => this.setState({zoom:val})}/>
        
        return(
            <View>
                <Camera ref={ref => {this.camera = ref}}
                    style={{height: Dimensions.get('window').height,
                    width: "100%",}}
                    zoom={this.state.zoom}
                    >
                
                <ZoomView 
                        onPinchEnd={this._onPinchEnd}
                        onPinchStart={this._onPinchStart}
                        onPinchProgress={this._onPinchProgress} >
                        
                        {/* { this.showSlider &&  <Slider 
                                value={this.state.zoom}
                                onValueChange={(val) => this.setState({zoom:val})}/> } */}

                        <GetSlider  show={this.state.showSlider} value={this.state.zoom} onChange={(val) => this.UpdateTimer(val)}/>
                </ZoomView>
                <GetSlider show={this.state.showSlider} value={this.state.zoom} onChange={(val) => this.UpdateTimer(val)}/>
                </Camera>
            </View>
        )
    }
}

