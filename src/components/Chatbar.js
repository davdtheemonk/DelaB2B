import React from "react";
import { View,Image ,Text} from "react-native";
import { StyleSheet } from "react-native";
import COLORS from "../const/colors";

export default function ChatBar({data}){
    return(
        <View style={{
            
            borderRadius:50,
            height:90,
            width:"90%",
           
            flexDirection:"row",
            padding:10,
            borderRadius:15,
        
            
          
        }}>

<View style={style.imageCont}>
           
           <Image source={data.image} resizeMode="cover" style={style.CardImage}></Image>
           <View style={{}}>
           <Text style={{marginLeft:10,fontSize:17,fontWeight:'bold',textTransform:"capitalize"}}>{data.name}</Text>
           <Text style={{marginLeft:10,fontSize:17,color:COLORS.lightgrey}} >{data.name}</Text>
           </View>
        </View>
        <Text style={{marginLeft:"auto"}}>{data.rating}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    CardImage:{
        height:60,
        width:60,
        borderRadius:50,
       


    },
    imageCont:{
       
        padding:5,
        flexDirection:'row',
       
        justifyContent:'center'



    },

})