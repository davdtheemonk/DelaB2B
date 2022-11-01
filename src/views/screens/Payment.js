import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {ImageBackground,Image, SafeAreaView,Text,View,StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons"
import Imagesslide from "../../components/Imagesslide";
import Slideshow from "../../components/Slideshow";
import COLORS from "../../const/colors";
import hotels from "../../const/hotels";


const Payment = ({navigation,route})=>{
    const item = route.params
    console.log(item)
    // <Text> &#8226; </Text>
  
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            backgroundColor:COLORS.white,
            paddingBottom:20
        }}>
            <StatusBar barStyle="light-content" translucent backgroundColor="rgb(0,0,0)"></StatusBar>
            
            <View style={style.header}>
                <View style={{alignItems:"center",elevation:4,justifyContent:"center",paddingHorizontal:10,backgroundColor:COLORS.white,borderRadius:150,height:40,width:40}}>
                <Icon  onPress={()=>navigation.goBack()} name="arrow-back-ios" size={28} color={COLORS.dark} ></Icon>   
                </View>
                </View>
                <View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
                    <Text style={{fontSize:27,fontWeight:'bold'}}>Payment</Text>
                </View>
                <View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
    <Text style={{fontSize:20,fontWeight:'600'}}>Your Price Summary</Text>
</View>
<View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
    <Text style={{fontSize:17}}>Superior double room</Text>
    <Text style={{fontSize:17,fontWeight:'600'}}>$38.00</Text>
</View>
<View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
    <Text style={{fontSize:17}}>10% Property Service charge</Text>
    <Text style={{fontSize:17,fontWeight:'600'}}>$7.00</Text>
</View>
<View style={style.divider}></View> 
<View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
    <Text style={{fontSize:17,fontWeight:'bold'}}>Price</Text>
    <Text style={{fontSize:17,fontWeight:'600'}}>$45.00</Text>
</View>

<View style={{   flexDirection:"column",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:60
}}>
    <Text style={{fontSize:17,fontWeight:'300'}}>Payment Methods</Text>
   <View style={{flexDirection:'row',width:"70%",height:130,alignItems:'center',justifyContent:'center'}}>
   <View style={{width:130,height:110,padding:34}}>
    <Image source={require('../../assets/visa.jpg')}></Image>
    </View>
    <View style={{width:130,height:110,padding:19}}>
    <Image source={require('../../assets/mastercard.jpg')} style={{width:"auto",height:"100%"}} ></Image>
</View>
   </View>
</View>


<TouchableOpacity  style={style.continueBtn}>
              
              <Text style={style.textSign}>Continue</Text>
            
         
      </TouchableOpacity>
      <View style={{   flexDirection:"column",
     
     marginHorizontal:20,
 justifyContent:"space-between",
 marginTop:60
 }}>
    <Text style={{color:'blue'}}>* Read cancelation policy</Text>
     </View>
    
            
        </ScrollView>
        
        
    )
}
export default Payment;
const style = StyleSheet.create({
    header:{
        marginTop:60,
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between"    },
divider:{
    borderBottomColor:"grey",
    borderBottomWidth:1,
    marginVertical:3,
    width:"95%",
    marginTop:20,
    alignItems:'center',
    alignSelf:'center'
},
continueBtn:{
    alignItems:'center',
    alignSelf:'center',
        width: "90%",
        marginTop:30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#212222",
        borderRadius: 30,
        flexDirection: 'row'
}
,textSign: {
    color: 'white',
 
    fontSize:20,
}


})