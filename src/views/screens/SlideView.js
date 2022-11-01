import React, { useRef, useEffect } from "react"
import { Modal, View, Dimensions, Animated, Pressable, Text } from "react-native"
import { useState } from "react"
import { TextInput, Image,FlatList } from 'react-native';
import { IconButton, Portal, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper"
import COLORS from "../../const/colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_KEY} from "@env";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../../../slices/navSlice";
import Rides from "../../components/Rides"
import { MaterialIcons } from "@expo/vector-icons";
export default function SlideView({ show, onDismiss, carBtn,airplane,hotelBtn,enableBackDropDismiss }) {
    const bottomSheetHeight = Dimensions.get('window').height * 0.4
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
                   
                    <IconButton color={COLORS.primary} icon="taxi" style={styles.saveIcon} > </IconButton>
                    <Text style={{color:"black"}}>Select a ride</Text>
                    <IconButton color="red" icon="close" style={styles.closeIcon} onPress={onDismiss}></IconButton>

                </View>
                
            
<View>

<GooglePlacesAutocomplete placeholder="Where from?" styles={{container:{
        backgroundColor:'white',
        paddingTop:20,
          flex:0
    },textInput:{
        fontSize:18,
        backgroundColor:"#fff",
        shadowColor:'grey',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:100
        
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }
    }}  onPress={(data, details = null) => dispatch(
        setOrigin({
            location:details.geometry.location,
            description:data.description,
        })
    
    )}fetchDetails={true} returnKeyType={"search"} enablePoweredByContainer={false} minLength={2} query={{
        key:GOOGLE_MAPS_KEY,
        language:"en"
    }} nearbyPlacesAPI="GooglePlacesSearch" debounce={400}>

    </GooglePlacesAutocomplete>


<GooglePlacesAutocomplete placeholder="Where to?" styles={{container:{
     backgroundColor:'white',
     paddingTop:20,
       flex:0
    },textInput:{
       
        backgroundColor:COLORS.light,
   
        fontSize:18,
        backgroundColor:"#fff",
        shadowColor:'grey',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:100
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }
    }} onPress={(data, details = null) => {
        dispatch(
        setDestination({
            location:details.geometry.location,
            description:data.description
        }))
        navigation.navigate()
    }}fetchDetails={true} returnKeyType={"search"} enablePoweredByContainer={false} minLength={2} query={{
        key:GOOGLE_MAPS_KEY,
        language:"en"
    }} nearbyPlacesAPI="GooglePlacesSearch" debounce={400}></GooglePlacesAutocomplete>
</View>
<View style={{padding:10,paddingHorizontal:30,marginTop:10}}>
    <Text style={{fontWeight:'bold',fontSize:17,color:COLORS.grey}}>Latest Rides</Text>
   
</View>
<View style={{paddingHorizontal:30,marginTop:20}}>
<Rides></Rides>
</View>
            </Animated.View>
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
 
    header:{
        height:50,
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
