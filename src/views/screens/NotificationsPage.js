import {React} from "react";
import {Image,SafeAreaView,Text,StyleSheet,View,useState, StatusBar,TextInput} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import COLORS from "../../const/colors";
import { Platform } from "react-native";
import ChatBar from "../../components/Chatbar";
import { FlatList } from "react-native-gesture-handler";
import blogs from "../../const/blogs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import NotificationsCard from "../../components/NotificationCard";

import BlogFeed from "../../components/BlogFeed";

export default function NotificationsPage(){
return(
    <SafeAreaView  style={{flex:1,backgroundColor:COLORS.light,paddingBottom:30,height:'100%',width:'100%'}}>
            <ScrollView>
        <View style={{marginTop:40,
        flexDirection:"column",
    marginHorizontal:10,padding:5,paddingHorizontal:30,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}} >
      <Text style={{fontSize:20,fontWeight:'bold'}}>Notifications</Text>
           <FontAwesome size={25} name="filter"></FontAwesome>
        </View>
   
        <View style={style.today}>
            <Text style={{fontSize:18,fontWeight:'500',color:COLORS.lightgrey}}>Today</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <NotificationsCard></NotificationsCard>
</View>
<View style={style.today}>
            <Text style={{fontSize:18,fontWeight:'500',color:COLORS.lightgrey}}>Yesterday</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
      <NotificationsCard></NotificationsCard>
    
    
    
      {blogs.map((item, index) => (
        <BlogFeed key={index} data={item} >
        
        </BlogFeed>
      ))}
  
     
</View>
</ScrollView>
    </SafeAreaView>
)

}

const style = StyleSheet.create({
    today:{
        marginTop:30,
        flexDirection:"column",
    marginHorizontal:10,padding:5,paddingHorizontal:30,justifyContent:'space-between',alignItems:'center',flexDirection:'row'
    }
  
})