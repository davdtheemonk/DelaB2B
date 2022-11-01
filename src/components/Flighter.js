import {View,Image,TouchableOpacity,TextInput,Text,StyleSheet} from "react-native"
import { useNavigation } from "@react-navigation/native"
import COLORS from "../const/colors"
import Icon from "react-native-vector-icons/MaterialIcons"
import { FontAwesome5, Ionicons,MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons"

const Flighter = ()=>{
    
    return(
        <View style={{
            backgroundColor:COLORS.light,
            borderRadius:50,
            marginBottom:40,
          
            width:"100%",
            flex:1,
            marginRight:20,
            borderRadius:15,
        
            
          
        }}>
          
          
            <View>
                
            <View style={style.searchBox}>
            <MaterialIcons name="flight-takeoff" color={COLORS.grey} size={30} style={{marginRight:10}}/>
    <TextInput placeholder="Start" placeholderTextColor={COLORS.grey}  autoCapitalize="none" style={{flex:1,padding:0,fontSize:17}} ></TextInput>
 
  
  </View>

  <View style={style.searchBox}>
            <MaterialIcons name="flight-land" size={30} color={COLORS.grey} style={{marginRight:10}}/>
    <TextInput placeholder="Destination" placeholderTextColor={COLORS.grey} autoCapitalize="none" style={{flex:1,padding:0,fontSize:17}} ></TextInput>
 
  
  </View>
  <View style={style.floatingBtn}>
    <MaterialCommunityIcons color={COLORS.grey} name="swap-vertical" size={30}></MaterialCommunityIcons>
  </View>
  <View style={{flexDirection:"row",width:"100%",alignContent:'center',justifyContent:'space-between',paddingHorizontal:25}}>
  <View style={style.dateContainer}>
  <Ionicons name="today-outline" size={30} style={{marginRight:10,color:COLORS.grey}}></Ionicons>
       
    <Text style={{fontSize:17,flex:1,color:COLORS.grey,marginTop:5}}>Departure date</Text>

  </View>
  <View style={style.dateContainer}>
  <Ionicons name="today-outline" size={30} style={{marginRight:10,color:COLORS.grey}}></Ionicons>
       
    <Text style={{fontSize:17,color:COLORS.grey,marginTop:5}}>Return date</Text>

  </View>
  </View>
  <View style={style.passengerCont}>
  <MaterialIcons name="person" size={30} style={{marginRight:10,color:COLORS.grey}}></MaterialIcons>
       
    <Text style={{fontSize:17,color:COLORS.grey,marginTop:4}}>Passengers</Text>
    <MaterialIcons name="arrow-drop-down" size={30} style={{marginRight:10,color:COLORS.grey}}></MaterialIcons>
       


  </View>
  <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:30}}>
  <TouchableOpacity  style={style.signIn}>
              
                    <Text style={style.textSign}>Find Flight</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
               
            </TouchableOpacity>
  <View>
  </View>

  </View>
            </View>
        </View>
    )
}
export default Flighter
const style = StyleSheet.create({
    floatingBtn:{
        height:"auto",
      
        width:"auto",

        backgroundColor:"white",
        position:"absolute",
        flexDirection:"row",
        
        padding:15,
        right:50,
        top:80,
        justifyContent:'center',
    borderRadius:50,
    elevation:1,
        alignItems:'center',

    },
    dateContainer:{
        marginTop:Platform.OS=="ios"?20:20,
flexDirection:'row',
backgroundColor:'#fff',
width:'40%',
alignSelf:'center',
alignContent:'center',
justifyContent:'center',

borderRadius:5,
padding:10,
shadowColor:'grey',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:114


    },
    passengerCont:{
        marginTop:Platform.OS=="ios"?20:20,
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

    },
searchBox:{
    marginTop:Platform.OS=="ios"?40:40,
flexDirection:'row',
backgroundColor:'#fff',
width:'90%',
alignSelf:'center',
borderRadius:5,
padding:10,
shadowColor:'grey',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:114
},
signIn: {
    width: "90%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#212222",
    borderRadius: 10,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontWeight: 'bold'
}
  
  
})