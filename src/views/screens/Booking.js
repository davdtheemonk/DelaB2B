import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {ImageBackground,Image, SafeAreaView,Text,View,StyleSheet, StatusBar, TouchableOpacity,TextInput} from 'react-native'
import { ScrollView } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons"
import Imagesslide from "../../components/Imagesslide";
import Slideshow from "../../components/Slideshow";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../const/colors";
import hotels from "../../const/hotels";
import Guests from "../../components/Guests";

const Booking = ({navigation,route})=>{
    const item = route.params
    const [Adults,setAdults] = useState(false)
    const [Children,setChildren] =useState(false)
    const [Babies,setBabies] = useState(false)    // <Text> &#8226; </Text>
  
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            backgroundColor:COLORS.white,
            paddingBottom:20
        }}>
            <StatusBar barStyle="light-content" translucent backgroundColor="rgb(0,0,0)"></StatusBar>
            
            <View style={style.header}>
                <View style={{alignItems:"center",elevation:4,justifyContent:"center",paddingHorizontal:10,backgroundColor:COLORS.white,borderRadius:150,height:40,width:40}}>
                <Icon  onPress={()=>navigation.goBack()} name="arrow-back-ios" size={28} color={COLORS.dark} ></Icon>   
                </View>
              </View>
              <View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
                    <Text style={{fontSize:27,fontWeight:'bold'}}>Booking Details</Text>
                </View>
              <View style={style.searchBox}>
            <MaterialIcons name="date-range" size={30} color={COLORS.grey} style={{marginRight:10}}/>
    <TouchableOpacity style={{alignSelf:'center',padding:6,width:'100%'}}><Text style={{flex:1,padding:0,fontSize:17}} >
        Check-in Date
        </Text></TouchableOpacity>
  
  </View>  
  <View style={style.searchBox}>
            <MaterialIcons name="date-range" size={30} color={COLORS.grey} style={{marginRight:10}}/>
    <TouchableOpacity style={{alignSelf:'center',padding:6,width:'100%'}}><Text style={{flex:1,padding:0,fontSize:17}} >
        Check-out Date
        </Text></TouchableOpacity>
        
  
  </View>  
  <View style={style.passengerCont}>
  <MaterialIcons name="person" size={30} style={{marginRight:10,color:COLORS.grey}}></MaterialIcons>
       
    <Text style={{fontSize:17,color:COLORS.grey,marginTop:4}}>Guests</Text>
    <MaterialIcons name="arrow-drop-down" size={30} style={{marginRight:10,color:COLORS.grey}}></MaterialIcons>
       


  </View>
  <TouchableOpacity  style={style.continueBtn} onPress={()=>{
    navigation.navigate('Payment',item)
  }}>
              
              <Text style={style.textSign}>Continue</Text>
            
         
      </TouchableOpacity>
    
        </ScrollView>
        
        
    )
}
export default Booking;
const style = StyleSheet.create({
    header:{
        marginTop:60,
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between"    },
divider:{
    borderBottomColor:"grey",
    borderBottomWidth:1,
    marginVertical:3,
    width:"95%",
    marginTop:20,
    alignItems:'center',
    alignSelf:'center'
},

searchBox:{
    marginTop:Platform.OS=="ios"?40:40,
flexDirection:'row',
backgroundColor:'#fff',
width:'90%',
alignSelf:'center',
borderRadius:10,
padding:10,
shadowColor:'grey',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:114
},
passengerCont:{
    marginTop:Platform.OS=="ios"?40:40,
flexDirection:'row',
backgroundColor:'#fff',
width:'90%',
alignSelf:'center',
borderRadius:5,
padding:8,
elevation:2
,shadowColor:'#ccc',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,

}
,
continueBtn:{
    alignItems:'center',
    alignSelf:'center',
        width: "90%",
        marginTop:50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#212222",
        borderRadius: 30,
        flexDirection: 'row'
}
,textSign: {
    color: 'white',
 
    fontSize:20,
}


})