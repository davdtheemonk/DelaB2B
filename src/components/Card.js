import {View,Image,Text,StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native"
import COLORS from "../const/colors"
import Icon from "react-native-vector-icons/MaterialIcons"

import { TouchableOpacity } from "react-native-gesture-handler"
import { Fontisto,Ionicons } from "@expo/vector-icons"

const Card = ({data})=>{
    const navigation = useNavigation();
    const selected = data.type=="hotel"?"DetailsScreen":"RoomDetails"
   
    return(
        <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>navigation.navigate(selected,data) 
    }>
        <View style={{
            backgroundColor:COLORS.light,
            borderRadius:50,
            marginBottom:40,
            
            
            
        
            
          
        }
    }>
           <View style={{ width:"100%",height:100,alignItems:"center"}}>
    <Image source={data.image} resizeMode="cover" style={{width:"95%",margin:10,height:200,borderRadius:15,borderRadius:15}}></Image>

 
</View>
            
            <View style={style.cardInner}>
               <View style={style.priceTag}>
               <Ionicons name="heart-circle-sharp" color={COLORS.light}  size={40}></Ionicons>
               
                </View>      
                            <Text style={{fontWeight:"500",fontSize:20,color:'white'}}>{data.name}</Text>
              <View></View>
              <Text style={{color:COLORS.light,fontWeight:'bold',fontSize:17}}>{data.location}</Text>
              </View>
        
          
            
            
        </View>
        </TouchableOpacity>
    )
}
export default Card
const style = StyleSheet.create({
    priceTag:{
        height:70,
        opacity:0.9,
        width:"auto",
      
        position:"absolute",
        flexDirection:"row",
        zIndex:1,
    
        padding:15,
        right:0,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    cardInner:{
        height:100,
        padding:25,
        margin:10


    }
})