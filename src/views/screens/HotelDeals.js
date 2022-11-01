import React, { useRef, useEffect } from "react"
import { Modal, View, Dimensions, Animated, Pressable, Text } from "react-native"
import { useState } from "react"
import { TextInput, Image,FlatList } from 'react-native';
import { IconButton, Portal, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";
import COLORS from "../../const/colors";
import Hoteldeal from "../../components/Hoteldeal"
import deals from "../../const/deals"


export default function HotelDeals({ show, onDismiss,enableBackDropDismiss}) {
    const bottomSheetHeight = Dimensions.get('window').height * 0.4
    const deviceWidth = Dimensions.get('window').width
    const [text, setText] = React.useState("");
    const [open, setOpen] = useState(show)
    const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

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
                   
                    <IconButton color="red" icon="close" style={styles.closeIcon} onPress={onDismiss}></IconButton>

                </View>
                
            <View>
            {deals.map((item,index)=>{
        return <Hoteldeal key={index} data={item}/>
    })}
              
            </View>
<View>
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
