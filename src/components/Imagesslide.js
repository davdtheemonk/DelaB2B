import React, { useEffect,useState } from "react";
import { StyleSheet,View ,Text} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Imagesslide(){
    const [images,setImages] = useState([])
    useEffect(()=>{
        const imagescont = [require("../assets/view.jpg"),
                require("../assets/banner1.webp"),
                require("../assets/banner3.jpg"),
    ]
setImages(imagescont)

    },[])
    
    return(
        <View style={styles.container}>
              
<SliderBox   ImageComponentStyle={{ width: '100%', marginTop: 5}}
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