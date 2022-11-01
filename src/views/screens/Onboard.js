import React,{useEffect} from "react";
import { View,Image,Text,StyleSheet,Button, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from "../../const/colors";
import { MaterialIcons } from "@expo/vector-icons";
import SvgUri from 'react-native-svg-uri';

export default function Onboard({navigation}){
 
    const onPressFinish = async () => {
        await AsyncStorage.setItem('ONBOARDED', 'true').then(()=>{
          
        }).catch((err)=>{
            console.log(err)
        })
    
      
      };
      useEffect(()=>{
        setTimeout(onPressFinish,200)

      },[])
return(

<View style={{ flex:1,backgroundColor:"white",justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<View>
            <Image source={require("../../assets/hiking.png")} style={{width:110,height:150}}></Image>
        
            </View>
    <View
    style={{
      
        position:'absolute',
        height:'100%',
        zIndex:2,
        width:'100%',
        justifyContent:'flex-end',
        paddingHorizontal:30,
        bottom:70
    }}
    >
     
        <View>



            
        </View>
     

    </View>
    
</View>


)
}

const style = StyleSheet.create({})