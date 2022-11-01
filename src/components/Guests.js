import React from "react";
import NumericInput from "react-native-numeric-input";
import { StyleSheet,View,Text } from "react-native";

export default function Guests({setAdults,setChildren,setBabies,adults,children,babies}){

    return(
        <View  style={{padding:10,justifyContent:'center',flexDirection:'column'}}>
            <View style={{justifyContent:'center',flexDirection:'column'}}>
                <Text>Adults</Text>
                <NumericInput onChange={(e)=>{
                    setAdults(e)
                }}></NumericInput>
            </View>
            <View   style={{justifyContent:'center',flexDirection:'column'}}>
                <Text>Children</Text>
                <NumericInput onChange={(e)=>{
                    setChildren(e)
                }}></NumericInput>
            </View>
            <View  style={{justifyContent:'center',flexDirection:'column'}}>
                <Text>Babies</Text>
                <NumericInput onChange={(e)=>{
                    setBabies(e)
                }}></NumericInput>
            </View>

        </View>

    )
}