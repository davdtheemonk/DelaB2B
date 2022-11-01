import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import COLORS from "../const/colors";

export default function NotificationsCard(){
return(
    <View style={{width:'90%',elevation:1,marginBottom:10,height:"auto",padding:5,backgroundColor:"white",borderRadius:8,flexDirection:'column'}}>
        <View style={{margin:0,padding:10,paddingHorizontal:30,justifyContent:'flex-start',flexDirection:'row'}}>
      <Text style={{fontWeight:'bold',fontSize:17}}>Book now!! JK-432 flight ticket price gone down by 76%</Text>
        </View>
        <View style={{margin:0,padding:1,paddingHorizontal:30,justifyContent:'flex-start',flexDirection:'column'}}>
            <Text style={{fontWeight:"600",fontSize:15,color:"purple"}}>Sep 25,2022</Text>
      </View>
    </View>
)

}