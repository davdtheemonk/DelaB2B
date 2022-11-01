import React, { useEffect,useState } from "react";
import { StyleSheet,View ,Text} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Slideshow(){
    const [images,setImages] = useState([])
    useEffect(()=>{
        const imagescont = [require("../assets/banner2.webp"),
                require("../assets/banner1.webp"),
                require("../assets/banner3.jpg"),
    ]
setImages(imagescont)

    },[])
    
    return(
        <View style={styles.container}>
               <View style={styles.advertlogo}>
                <Text>
                    Ads
                </Text>
               </View>
<SliderBox   ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}
  imageLoadingColor="#2196F3" images={images} sliderBoxHeight={170}>

</SliderBox>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    height:200,
    width:'100%',
    flex:1

 }
 ,
 advertlogo:{
    height:50,
    opacity:0.9,
    width:"auto",
    backgroundColor:"white",
    position:"absolute",
    flexDirection:"row",
    zIndex:1,
    padding:15,
    left:20,
    top:10,
    justifyContent:'center',
    alignItems:'center',


 }
})