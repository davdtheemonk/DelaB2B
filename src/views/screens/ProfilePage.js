import {React} from "react";
import {Image,SafeAreaView,Text,StyleSheet,View,useState, StatusBar} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import COLORS from "../../const/colors";


export default function ProfilePage(){
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white,flexDirection:"column"}}>
            <View style={style.header}>
                <Text style={style.headText}>Profile</Text>
           
                   </View>
                   <ScrollView>
                   <View style={{flexDirection:"column",alignItems:"center",width:"100%",paddingHorizontal:20,margin:10}}>
                   <View style={{
            backgroundColor:COLORS.lightgrey,
            borderRadius:50,
            marginTop:30,
            height:120,
            width:"100%",
           
            flexDirection:"row",
            elevation:15,
            paddingHorizontal:40,
            marginRight:20,
            borderRadius:15,
            
        
            
          
        }}>
           

        </View>
        <View style={{
            backgroundColor:COLORS.lightgrey,
            borderRadius:50,
            marginTop:30,
            height:520,
            width:"100%",
           
            flexDirection:"row",
            elevation:15,
            paddingHorizontal:20,
            marginRight:20,
            borderRadius:15,
            
        
            
          
        }}>
            <Text style={{fontWeight:"bold",fontSize:23,marginTop:10,color:COLORS.grey}}>Information</Text>
            <Text style={{}}></Text>
           

        </View>
        
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
 header:{
    marginTop:30,
    flexDirection:"row",
    alignItems:"center",
marginHorizontal:20,
justifyContent:"space-between" 
 },
 headText:{
    color:COLORS.grey,
    fontWeight:"bold",
    paddingHorizontal:10,
    fontSize:30

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

})