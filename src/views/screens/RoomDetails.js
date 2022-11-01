import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {ImageBackground,Image, SafeAreaView,Text,View,StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons"
import Imagesslide from "../../components/Imagesslide";
import Slideshow from "../../components/Slideshow";
import COLORS from "../../const/colors";
import hotels from "../../const/hotels";


const RoomDetails = ({navigation,route})=>{
    const item = route.params
 console.log(item)
  
    // <Text> &#8226; </Text>
  
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
                <View>
                    <View style={{justifyContent:'center',flexDirection:'row'}}>
                <View style={{alignItems:"center",elevation:4,justifyContent:"center",paddingHorizontal:10,backgroundColor:COLORS.white,borderRadius:150,height:40,width:40}}>
            <MaterialCommunityIcons name="tag-plus" size={20}></MaterialCommunityIcons>
               </View>
               <View style={{alignItems:"center",alignSelf:'center',marginLeft:5,elevation:4,justifyContent:"center",paddingHorizontal:10,backgroundColor:COLORS.white,borderRadius:150,height:40,width:40}}>
            <MaterialCommunityIcons name="share-variant" size={19}></MaterialCommunityIcons>
               </View>
               </View>
               </View>
                
                         </View>
                         <View style={{paddingVertical:24,paddingHorizontal:32,marginBottom:8}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                   
                    <Icon name="place" size={15} color={COLORS.primary}></Icon>   
                                     <Text style={{fontSize:15,fontWeight:'bold',fontWeight:"400",color:COLORS.grey,marginTop:5}}>{item.location}</Text>
                    
                    </View>
                   
                  
             </View>
            <Imagesslide navigation={navigation}></Imagesslide>

            
            <View style={{paddingVertical:24,paddingHorizontal:32,backgroundColor:"white",elevation:4}}>
  <View>
                        <Text style={{fontSize:20,fontWeight:'bold',fontWeight:"bold",color:COLORS.grey,marginTop:5}}>Overview</Text>
                        <Text style={{lineHeight:20,color:COLORS.grey,fontSize:15,marginTop:10}}>{item.details}</Text>
                      <View style={{justifyContent:'space-between',alignItems:'center'}}>


                      </View>
                      <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                      <View style={{width:100,justifyContent:'space-around',height:80,borderRadius:10,flexDirection:'column',elevation:1,backgroundColor:COLORS.primary,padding:10,borderRadius:14}}>
    <Text style={{color:"white",fontSize:16,fontWeight:'bold'}}>7.3</Text>

    <View >
        <Text style={{color:"white"}}>Good</Text>
        <Text style={{color:"white"}}>998 reviews</Text>
    </View>
</View>
<View style={{width:100,justifyContent:'space-around',height:80,borderRadius:10,flexDirection:'column',elevation:1,backgroundColor:"white",padding:10,borderRadius:14}}>
<MaterialIcons name="location-city" size={20}></MaterialIcons>

    <View >
        <Text style={{color:"white"}}>Good</Text>
        <Text style={{color:"black"}}>Urban View</Text>
    </View>
    
</View>
<View style={{width:100,justifyContent:'space-around',height:80,borderRadius:10,flexDirection:'column',elevation:1,backgroundColor:"white",padding:10,borderRadius:14}}>
    <MaterialIcons name="waves" size={20}></MaterialIcons>

    <View >
        <Text style={{color:"black"}}></Text>
        <Text style={{color:"black"}}>Beach View </Text>
    </View>
</View>
</View>

                    </View>
                 
<Text  style={{fontSize:20,fontWeight:'bold',fontWeight:"bold",color:COLORS.grey,marginTop:20}}>Amenities</Text>

<View style={{paddingVertical:24,paddingHorizontal:32,marginTop:10,marginBottom:30,backgroundColor:"#eee",flexDirection:'row',elevation:1,justifyContent:'space-between'}}>
<View style={{alignItems:'center',justifyContent:'center'}}>
<MaterialIcons color="black" name="sports-rugby" size={30}/>
<Text>gym</Text>
</View>
<View style={{alignItems:'center',justifyContent:'center'}}>
<MaterialIcons color="black" name="tv" size={30}/>
<Text>television</Text>
</View>
<View style={{alignItems:'center',justifyContent:'center'}}>
<MaterialIcons color="black" name="drive-eta" size={30}/>
<Text>taxi</Text>
</View>
<View style={{alignItems:'center',justifyContent:'center'}}>
<MaterialIcons color="black" name="set-meal" size={30}/>
<Text>food</Text>
</View>
</View>



            </View>
            <View style={{paddingVertical:24,paddingHorizontal:32,marginBottom:30,height:250}}>
            <Text  style={{fontSize:20,fontWeight:'bold',fontWeight:"bold",color:COLORS.grey,marginTop:5,marginBottom:10}}>Location</Text>

<MapView initialRegion={{}} mapType="mutedStandard" style={{flex:1}}
 ></MapView>
            </View>
            <View style={{paddingVertical:24,paddingHorizontal:32,marginBottom:30,backgroundColor:"#eee"}}>
            <Text  style={{fontSize:20,fontWeight:'bold',fontWeight:"bold",color:COLORS.grey,marginTop:5}}>Photos</Text>

<View style={style.photoContainer}>
    {hotels.map((item,index)=>{
        return <Image key={index} source={item.image} style={style.photo}/>
    })}
</View>

</View>
            <TouchableOpacity activeOpacity={0.7}  style={style.planBtn} onPress={()=>navigation.navigate('Booking',item)}>
                <Text style={{color:COLORS.white,fontWeight:"bold",fontSize:20}}>Book</Text>
            </TouchableOpacity>
        <View activeOpacity={0.7} style={style.Pricing}>
            <View style={{width:50,height:50,borderRadius:50,backgroundColor:'#eee',alignItems:'center',justifyContent:'center'}}>
         <MaterialIcons name="message" size={30}></MaterialIcons>
         </View>
              <View style={{width:50,height:50,borderRadius:50,backgroundColor:'#eee',alignItems:'center',justifyContent:'center'}}>
         
         <MaterialIcons name="call" size={30}></MaterialIcons>
           </View>
           </View>
            
        </ScrollView>
        
        
    )
}
export default RoomDetails;
const style = StyleSheet.create({
    headerImage:{
        height:400,
      
        overflow:'hidden'
    },
    photoContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:16

    },
    photo:{
        width:108,
        height:108,
        marginBottom:12,
        borderRadius:8,
        margin:2

    },
    header:{
        marginTop:60,
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between"    }
,
planBtn:{
    position:'absolute',
    bottom:10,
    backgroundColor:"#212222",
    width:"40%",
   
    elevation: 10,
    right:10,
    alignItems:"center",
    justifyContent:"center",
    height:50
   
    
},
Pricing:{
    position:'absolute',
    bottom:10,
    backgroundColor:"white",
    width:"40%",
    height:70,
   
    borderRadius:100,
   padding:20,
    left:10,
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row",
 
   
    
},
divider:{
    borderBottomColor:"#444",
    borderBottomWidth:1,
    marginVertical:24
}

})