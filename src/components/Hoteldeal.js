import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import COLORS from "../const/colors"
import { MaterialIcons } from "@expo/vector-icons"

import Icon from "react-native-vector-icons/MaterialIcons"
const Hoteldeal = ({data,index})=>{
    const navigation = useNavigation();
    console.log(data)


    return(
      
        <View style={{
            backgroundColor:"white",
          
            marginBottom:10,
            height:70,
            width:"100%",
           
            flexDirection:"row",
            justifyContent:'space-between',
            alignSelf:'center',
            padding:15,
          
           
        
        
            
          
        }}>
            <Text style={{color:'black',fontSize:20}}>{data.name}</Text>
            <TouchableOpacity style={{  width: "20%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.primary,
    flexDirection: 'row'}} onPress={()=>{
                 navigation.navigate('Booking',item)

            }}>
                <Text>Book</Text>
            </TouchableOpacity>
        </View>
        
    )}

    export default Hoteldeal;