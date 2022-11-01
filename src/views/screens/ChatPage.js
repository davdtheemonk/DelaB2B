import {React} from "react";
import {Image,SafeAreaView,Text,StyleSheet,View,useState, StatusBar,TextInput} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import COLORS from "../../const/colors";
import ChatBar from "../../components/Chatbar";
import { FlatList } from "react-native-gesture-handler";
import hotels from "../../const/hotels";
import { Ionicons } from "@expo/vector-icons";
export default function ChatPage(){
return(
    <SafeAreaView  style={{flex:1,backgroundColor:COLORS.white,paddingBottom:30,height:'100%',width:'100%'}}>
        <View style={{marginTop:50,
        flexDirection:"column",
    marginHorizontal:10}} >
        <View style={style.searchBox}>
    <TextInput placeholder="Search user" placeholderTextColor={COLORS.grey} autoCapitalize="none" style={{flex:1,padding:0}} ></TextInput>
  <Ionicons name="menu" size={20}></Ionicons>
  
  </View>
           
        </View>

    </SafeAreaView>
)

}

const style = StyleSheet.create({
    searchBox:{
    
marginTop:Platform.OS=="ios"?20:20,
marginBottom:20,
flexDirection:'row',
backgroundColor:'#fff',
width:'90%',
alignSelf:'center',
borderRadius:5,
padding:10,
shadowColor:'black',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:10
    }
})