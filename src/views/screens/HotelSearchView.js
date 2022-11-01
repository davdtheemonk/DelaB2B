import React, { useRef, useEffect } from "react"
import { Modal, View, Dimensions, Animated, Pressable, Text,ScrollView,StatusBar } from "react-native"
import { useState } from "react"
import { TextInput, Image,TouchableOpacity } from 'react-native';
import { IconButton, Portal, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper"
import COLORS from "../../const/colors";
import { useDispatch } from "react-redux";
import NumericInput from "react-native-numeric-input";
import Icon from "react-native-vector-icons/MaterialIcons"
import { MaterialIcons } from "@expo/vector-icons";


export default function HotelSearchView({selectedCheckinDate,setSelectedCheckinDate,openDatePicker1,openDatePicker2,setOpenDatePicker1,setOpenDatePicker2,show, onDismiss,enableBackDropDismiss,selectedCheckoutDate, setSelectedCheckoutDate,}) {

    const [hotelname,setHotelName]  = useState("")
    const [rooms,setRooms]  = useState("")
    const [adults,setAdults]  = useState("")
    const [children,setChildren]  = useState("")
    const [guestCard,setGuestsCard] = useState(false)

   console.log(selectedCheckinDate)
    const bottomSheetHeight = Dimensions.get('window').height * 0.5
    const today = new Date()
    const deviceWidth = Dimensions.get('window').width
    const [text, setText] = React.useState("");
    const [open, setOpen] = useState(show)
    const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
    const dispatch = useDispatch()
    const onGesture = (event) => {
        if (event.nativeEvent.translateY > 0) {
            bottom.setValue(event.nativeEvent.translateY)
        }

    };


    const onGestureEnd = (event) => {
        if (event.nativeEvent.translateY > bottomSheetHeight / 2) {
            onDismiss();
        } else {
            bottom.setValue(0);
        }

    };




    useEffect(() => {
        if (show) {
            setOpen(show);
            Animated.timing(bottom, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();

        } else {
            Animated.timing(bottom, {
                toValue: -bottomSheetHeight,
                duration: 500,
                useNativeDriver: false
            }).start(() => {
                setOpen(false)

            });
        }

    }, [show]);
    if (!open) {
        return null;
    }
    return (
        <Portal>
            <Pressable onPress={enableBackDropDismiss ? onDismiss : undefined} style={styles.backDrop}>

            </Pressable>


            <Animated.View
                style={[styles.root,
                {
                    height: bottomSheetHeight,
                    bottom: bottom,
                    shadowOffset: {
                        height: -3
                    }
                }, styles.common]}
            >

                <View style={[styles.header, styles.common, {
                    shadowOffset: {
                        height: 3
                    },
                },

                ]}>

                    <View style={{
                        width: 60,
                        height: 3,
                        borderRadius: 1.5,
                        position: 'absolute',
                        top: 0,
                        left: (deviceWidth - 60) / 2,
                        zIndex: 10,
                        backgroundColor: "#ccc"
                    }}>
                    </View>
                  <IconButton color="red" icon="close" style={styles.closeIcon} onPress={()=>{onDismiss()
                setOpenDatePicker2(false);setOpenDatePicker1(false)
                }}></IconButton>

                </View>
               
                <View style={{flexDirection:"row",
        alignItems:"center",
        alignSelf:'center',
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:70
}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            backgroundColor:COLORS.white,
            paddingBottom:20
        }}>
         
              
              <View style={{   flexDirection:"row",
        alignItems:"center",
    marginHorizontal:20,
justifyContent:"space-between",
marginTop:10
}}>
                 
                </View>
                <View style={styles.searchBox}>
            <MaterialIcons name="hotel" size={30} color={COLORS.grey} style={{marginRight:10}}/>
    <TextInput placeholder="Destination/property" placeholderTextColor={COLORS.grey} autoCapitalize="none" style={{flex:1,padding:0,fontSize:17}} ></TextInput>
 
  
  </View>
              <View style={styles.searchBox}>
            <MaterialIcons name="date-range" size={30} color={COLORS.grey} style={{marginRight:10}}/>
    <TouchableOpacity style={{alignSelf:'center',padding:6,width:'100%'}}><Text style={{flex:1,padding:0,fontSize:17}} >
        Check-in Date
        </Text></TouchableOpacity>
  
  </View>  
  <View style={styles.searchBox}>
            <MaterialIcons name="date-range" size={30} color={COLORS.grey} style={{marginRight:10}}/>
    <TouchableOpacity style={{alignSelf:'center',padding:6,width:'100%'}}><Text style={{flex:1,padding:0,fontSize:17}} >
        Check-out Date
        </Text></TouchableOpacity>
        
  
  </View>  
  <View style={styles.passengerCont}>
  <MaterialIcons name="person" size={30} style={{marginRight:10,color:COLORS.grey}}></MaterialIcons>
       
    <Text style={{fontSize:17,color:COLORS.grey,marginTop:4}}>Guests</Text>
    <MaterialIcons name="arrow-drop-down" size={30} style={{marginRight:10,color:COLORS.grey}}></MaterialIcons>
       


  </View>



<TouchableOpacity  style={styles.continueBtn}>
              
              <Text style={styles.textSign}>Search</Text>
            
         
      </TouchableOpacity>
    
  </ScrollView></View></Animated.View>

        </Portal>


    )
}



const styles = StyleSheet.create({
    root:{
        position:'absolute',
        left:0,
        right:0,
        zIndex:100,
        backgroundColor:COLORS.light,
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
        overflow:"hidden",

    },
    imgIn:{
       width:100,
       height:100,
       alignItems:'center',
       justifyContent:'center',
       marginRight:'auto',
       marginLeft:'auto'
    },
    textIn:{
       paddingLeft:6,
       marginTop:40,
       
    },
    btnView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
        

    },
    dates:{
  



    },

    saveBtn:{
       marginTop:20,
       width: 100

    },
    descr:{
        marginTop:40,
       
        borderRadius: 50,
        

    },
 
continueBtn:{
    alignItems:'center',
    alignSelf:'center',
        width: "90%",
        marginTop:30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#212222",
        borderRadius: 5,
        flexDirection: 'row'
}
,textSign: {
    color: 'white',
 
    fontSize:20,
},
    header:{
    
        backgroundColor:"white"
    },
    common:{
        shadowColor:"black",
        shadowOffset:{
            width:0,
        },
        shadowOpacity:0.24,
        shadowRadius:4,
        elevation:3

    },

searchBox:{
    marginTop:Platform.OS=="ios"?20:20,
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

}
,
    closeIcon:{
       position:'absolute',
       right:0,
       top:0,
       zIndex:10 
    },
    backDrop:{
        ...StyleSheet.absoluteFillObject,
        zIndex:80,
        backgroundColor:'rgba(0,0,0,0.012)'
    }

})
