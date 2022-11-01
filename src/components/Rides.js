import {View,Image,Text,StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native"
import COLORS from "../const/colors"
import Icon from "react-native-vector-icons/MaterialIcons"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"
const Rides = ()=>{
    
    return(
        <View style={{
            backgroundColor:COLORS.light,
            borderRadius:50,
            marginBottom:40,
            height:100,
            width:"100%",
           
            flexDirection:"row",
            alignItems:'center',
            justifyContent:'space-evenly',
           
            elevation:7,
            marginRight:20,
            borderRadius:15,
        
            
          
        }}>
          
            <View style={style.imageCont}>
           
          <Image style={{   height:60,
        width:60,
        borderRadius:50,}} source={require("../assets/cam.jpg")}/>
          
             </View>
             <View style={{flexDirection:'column',padding:0}}>
                <View  style={{flexDirection:'column',padding:4,marginRight:50}} >
<View style={{width:"auto",height:"auto",elevation:15,  shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,backgroundColor:'white',borderRadius:5}}>
    <Text style={{fontSize:22,fontWeight:"500",margin:3,}}>BB 456</Text>
</View>
               
             <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:14,fontWeight:'300'}}>Toyota-Corolla &#8226; Black</Text>
             </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:22,fontWeight:'500'}}>Sam Khan</Text>
                <Text>&#8226;</Text>
                <MaterialIcons size={20} color={COLORS.orange} name="star">

                </MaterialIcons>
                <Text style={{fontSize:17,color:COLORS.grey}}>4.4</Text>
            </View>
            </View>
               
            </View>
            <View style={{padding:20,flexDirection:'column',justifyContent:'flex-end'}} >
                    <MaterialIcons size={30} name="message"/>
                    <MaterialIcons size={30} style={{marginTop:5}} name="call"/>
                </View>
        </View>
    )
}
export default Rides
const style = StyleSheet.create({

  
    imageCont:{
       
        padding:10,
        paddingHorizontal:10,
      
        alignItems:'center',
        justifyContent:'center',
       
        borderRadius:15



    },
})