import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import COLORS from "../const/colors"
import { MaterialIcons } from "@expo/vector-icons"

import Icon from "react-native-vector-icons/MaterialIcons"
const RectCard = ({data,index})=>{
    const navigation = useNavigation();
    const selected = data.type=="hotel"?"DetailsScreen":"RoomDetails"
   
    return(
        <TouchableOpacity  activeOpacity={1}   onPress={()=>navigation.navigate(selected,data)}
        >
        <View style={{
            backgroundColor:"white",
            borderRadius:50,
            marginBottom:40,
            height:120,
            width:"100%",
           
            flexDirection:"row",
            elevation:0.3,
            marginRight:20,
            borderRadius:15,
        
            
          
        }}>
          
            <View style={style.imageCont}>
           
                <Image source={data.image} resizeMode="cover" style={style.CardImage}></Image>
          
             </View>
             <View style={{flexDirection:'column',padding:10,width:'60%'}}>

             <Text style={{fontWeight:'bold',fontSize:20}}>{data.name}</Text>
             <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star" color={COLORS.primarzy}></MaterialIcons>
                <MaterialIcons name="star"></MaterialIcons>

             <Text>{data.rating}</Text>
             </View>
             <Text>{data.location}</Text>
             <View style={style.divider}>
                </View>  
                <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{marginTop:10,width:90,height:20,backgroundColor:'#212222',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                    <Text style={{color:'white'}}>${data.price}/person</Text>
                    
                    
                    </View>  
                    <View style={{marginTop:10,width:40,height:20,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:5}}>
             <Text style={{fontWeight:"400",color:'white',fontSize:16}}>{data.type}</Text>
             </View>  
             </View>      
            <View>
            </View>
                
            </View>
           
        </View>
        </TouchableOpacity>
    )
}
export default RectCard
const style = StyleSheet.create({

    CardImage:{
        height:100,
        width:100,
        borderRadius:15,
       


    },
    imageCont:{
       
        padding:10,



    },
    divider:{
        borderBottomColor:"#eee",
        borderBottomWidth:1,
        marginVertical:3
    }
})