import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View,StyleSheet,Image } from "react-native";
import COLORS from "../const/colors";

export default function BlogFeed({data}){
  
return(
    <View style={{width:'90%',elevation:1,marginBottom:10,height:"auto",padding:5   ,backgroundColor:"white",borderRadius:8,flexDirection:'column'}}>
      
          
            <View style={{paddingHorizontal:60,justifyContent:'center',flexDirection:'row'}}>
        <View style={{flexDirection:'column',marginRight:20}}>
        <Text style={{fontWeight:'bold',marginTop:7,fontSize:20}}>{data.title}</Text>
        
         <Text style={{fontSize:19,color:COLORS.grey}}>{data.description}</Text>
         <View style={{justifyContent:'center',flexDirection:'column'}}>
            <Text style={{fontWeight:"600",fontSize:15,color:COLORS.grey,marginTop:4,color:'purple'}}>{data.date}</Text>
      </View>
         </View>
         <Image source={data.image} resizeMode="cover" style={style.CardImage}></Image>
         
             </View>
            <View>
                
            </View>
        </View>
    )
    }
const style = StyleSheet.create({

    CardImage:{
        height:100,
        width:100,
        borderRadius:15,
   
       


    },
    imageCont:{
        flexDirection:'row',
        
        justifyContent:'space-evenly',
       
        padding:10,



    },
})