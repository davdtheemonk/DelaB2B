import {View,Image,Text,StyleSheet, Dimensions, Animated} from "react-native"
import { useNavigation } from "@react-navigation/native"
import COLORS from "../const/colors"
import Icon from "react-native-vector-icons/MaterialIcons"
import { MaterialIcons,Fontisto, Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"

const TravelAgencyCard = ({data,scrollX,index})=>{
    const navigation = useNavigation();
    const {width} = Dimensions.get('screen')
    const cardWidth = width/1.8;
   
    const inputRange = [
        (index - 1) * cardWidth,
        index * cardWidth,
        (index + 1) *cardWidth,
    ]
    
    const opacity = scrollX.interpolate({
        inputRange,
        outputRange:[0.8,1,0.1]
    });
    const scale = scrollX.interpolate({
        inputRange,
        outputRange:[0.8,1,0.8]
    })
    return(
        
        <Animated.View style={{
            backgroundColor:"white",
            borderRadius:50,
            marginBottom:40,
            marginTop:10,
            height:300,
            width:240,
            elevation:0.6,
            marginRight:20,
            borderRadius:15,
            transform:[{scale}]
        
            
          
        }} >
            <Animated.View style={{   height:"100%",
        backgroundColor:'white',
        position:'absolute',
        zIndex:100,
        opacity:opacity,
        width:"100%",
        borderRadius:15}}>
            <TouchableOpacity  activeOpacity={0.9}   onPress={()=>navigation.navigate('RoomDetails',data)}
            >
            <View style={style.imageCont}>
           
              
                <Image source={data.image} resizeMode="cover" style={style.CardImage}></Image>
          
             </View>
             <View style={style.priceTag}>
                <Ionicons name="heart-circle-sharp" color="white"  size={40}></Ionicons>
                </View> 
             <View style={{flexDirection:'column',paddingHorizontal:30}}>
             <Text style={{fontWeight:'bold',fontSize:19}}>{data.name}</Text>
             <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star" color={COLORS.primary}></MaterialIcons>
                <MaterialIcons name="star"></MaterialIcons>

             <Text>{data.rating}</Text>
             </View>
             <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
             <Text style={{fontWeight:"bold",fontSize:16}}>${data.price}</Text>
             <View style={{width:40,height:20,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:5}}>
             <Text style={{fontWeight:"400",color:'white',fontSize:16}}>{data.type}</Text>
             </View>
             </View>
             
             
             </View>
             </TouchableOpacity>
             </Animated.View>
        </Animated.View>
    )
}
export default TravelAgencyCard
const style = StyleSheet.create({
    priceTag:{
        height:70,
       
        width:"auto",
      
        position:"absolute",
        flexDirection:"row",
        zIndex:1,
        padding:15,
        right:20,
        top:5,
      
        justifyContent:'center',
        alignItems:'center'
    },
    CardImage:{
        height:200,
        width:"90%",
        borderRadius:15,
      


    },
    imageCont:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,



    },
})