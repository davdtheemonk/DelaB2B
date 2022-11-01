import React from "react";
import {Image,SafeAreaView,Text,StyleSheet,View,useState, Platform,RefreshControl,ActivityIndicator,ScrollView, Animated} from 'react-native'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons"
import hotels from "../../const/hotels"
import Card from "../../components/Card"

import { bounce } from "react-native/Libraries/Animated/Easing";
import COLORS from "../../const/colors";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import TravelAgencyCard from "../../components/TravelAgencyCard";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import RectCard from "../../components/RectCard"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Foundation,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { Avatar } from "react-native-paper";
import Slideshow from "../../components/Slideshow"
import tours from "../../const/tours";

const HomeScreen = ({})=>{
    const categories  = ['Explore','Business','Luxury','Family','Adventour']
    const scrollX = React.useRef(new Animated.Value(0)).current
    const [selectedCategoryIndex,setSelectedCategoryIndex] = React.useState(0)
    const [selectedPage,setSelectedPage] = React.useState("Explore")
    const [selectedItem,setSelectedItem] = React.useState("Hotels")
   
    const [refreshing, setRefreshing] = React.useState(false);
     const {width} = useWindowDimensions().width
     const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false)},1000
    )
    },[])
     const mapState = {
  

        categories: [
          { 
            name: 'Hotels', 
            icon:  <Icon name="hotel" style={{marginRight:3}} size={20} ></Icon>
            ,
          },
          {
            name: 'Travel Agencies',
            icon:<Icon name="book"  style={{marginRight:3}} size={20}></Icon>
            
          },
          {
            name: 'Resort',
            icon:<FontAwesome5  style={{marginRight:3}} name="hotel" size={20} />
            ,
          },
          {
            name: 'Rentals',
            icon:<MaterialCommunityIcons  style={{marginRight:3}} name="home-modern" size={20} />
            ,
          },
          {
            name: 'Tours',
            icon:<MaterialCommunityIcons  style={{marginRight:3}} name="binoculars" size={20} />
            ,
          }
        
         
      ],
        region: {
          latitude: 22.62938671242907,
          longitude: 88.4354486029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        },
      };
      const [state, setState] = React.useState(mapState);
   
   const Explore = () =>{

    return(
    
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      } showVerticalScrollIndicator={false}>
        <View style={style.Explorepage}>
         
            <ScrollView
        horizontal
        
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={60}
        style={style.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0,
         
         
        
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={style.chipsItem}>
            {category.icon}
            <Text style={style.btnLabel}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>



          
        
            <View style={{zIndex:0}}>
            <Slideshow></Slideshow>
            <View style={{paddingHorizontal:30}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>Recommended</Text>
            </View>
            <Animated.FlatList
            onScroll={Animated.event(
              [{nativeEvent:{contentOffset:{x:scrollX}}}],
              {useNativeDriver:true},
              )}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
      
        style={style.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        data={hotels}
        renderItem = {({item,index})=><TravelAgencyCard data={item} index={index} scrollX={scrollX}></TravelAgencyCard>}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0,
          paddingHorizontal:30,marginTop:20
        }}
        
      >

      </Animated.FlatList>
      <View style={{paddingHorizontal:30}}>
      <Text style={{fontWeight:'bold',fontSize:17}}>Favourite</Text>
           </View>
           
      <ScrollView
      
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      
      style={style.chipsScrollView}
      contentInset={{ // iOS only
        top:0,
        left:0,
        bottom:0,
        right:20
      }}
      contentContainerStyle={{
        paddingRight: Platform.OS === 'android' ? 20 : 0,
        paddingHorizontal:30,marginTop:20
      
      }}
    >
      {hotels.map((item, index) => (
        <RectCard key={index} data={item} >
        
        </RectCard>
      ))}
    </ScrollView>
    
    <View style={{paddingHorizontal:30}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>Tours</Text>
            </View>        
      <ScrollView
      
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        
        style={style.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0,
          paddingHorizontal:30,marginTop:20
        
        }}
      >
        {tours.map((item, index) => (
          <Card key={index} data={item} >
          
          </Card>
        ))}
      </ScrollView>
      
      <ScrollView
      
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      
      style={style.chipsScrollView}
      contentInset={{ // iOS only
        top:0,
        left:0,
        bottom:0,
        right:20
      }}
      contentContainerStyle={{
        paddingRight: Platform.OS === 'android' ? 20 : 0,
        paddingHorizontal:30,marginTop:20
      
      }}
    >
      {hotels.map((item, index) => (
        <RectCard key={index} data={item} >
        
        </RectCard>
      ))}
    </ScrollView>
    
                
               
              

            </View>
            

        </View>
        </ScrollView>
    
    )

   }
   const Family = ()=>{
    return(
      <View style={{justifyContent:'center',height:"100%",width:"100%",alignItems:'center'}}>
            <Text>Coming Soon</Text>
        </View>
    )

   }
   const Luxury =()=>{
    return(
        <View style={{justifyContent:'center',height:"100%",width:"100%",alignItems:'center'}}>
            <Text>Coming Soon</Text>
        </View>
    )

   }
   const Adventour =()=>{
    return(
      <View style={{justifyContent:'center',height:"100%",width:"100%",alignItems:'center'}}>
      <Text>Coming Soon</Text>
  </View>
    )

   }
   const Business =()=>{
    return(
      <View style={{justifyContent:'center',height:"100%",width:"100%",alignItems:'center'}}>
      <Text>Coming Soon</Text>
  </View>
    )

   }

const CategoryList = () =>{
        return(
            <View style={style.CategoryListContainer}>
                {categories.map((item,index)=>(
<TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>{setSelectedCategoryIndex(index)
setSelectedPage(item)
} }>
    <View>
        <Text style={{...style.CategoryListText,color:selectedCategoryIndex==index?COLORS.primary:COLORS.grey}}>
            {item}
        
        </Text>
        
        {selectedCategoryIndex==index &&(
        <View style={{height:3,width:"auto",backgroundColor:COLORS.primary,marginTop:2}}/>)}
    
 
    </View>
    

</TouchableOpacity>
                ))}

                
                    
                
            </View>
            
            
        )
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#212222"}}>
            
            <View style={style.header}>
            <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:30,fontWeight:'bold',color:COLORS.white}}>
                    Dela
                </Text>
             
                
                </View>
         
              
                <MaterialIcons name="more-vert" size={24} color={COLORS.white}></MaterialIcons>
              
                
            </View>
         
                <CategoryList></CategoryList>
                <View style={{height:1,width:"auto",backgroundColor:COLORS.grey}}/>
           
               
              <View style={style.ContentCont}>
                {selectedPage=="Explore" && <Explore/>}
                {selectedPage=="Business" && <Business/>}
                {selectedPage=="Luxury" && <Luxury/>}
                {selectedPage=="Family" && <Family/>}
                {selectedPage=="Adventour" && <Adventour/>}
              </View>
                
           
        </SafeAreaView>
    ) 
}
const style = StyleSheet.create({
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        


    },
    CategoryListContainer:{
        flexDirection:'row',

        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:20,
    

    },
    CategoryListText:{
        fontWeight:'400',
        fontSize:17, 
        margin:7


    },
    chipsItem: {
        flexDirection:"row",
        backgroundColor:"white", 
        borderRadius:20,
        padding:8,
        marginTop:15,
        paddingHorizontal:20, 
        marginHorizontal:7,
        height:35,
        elevation: 5,
        width:"auto",
        justifyContent:'space-between',
       
      },
    btn:{
    height:30,
    padding:5,
    elevation:1,
  
    
    flexDirection:'row',

    justifyContent:'space-between',
    margin:10,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    marginTop:20,
    },
    btncont:{
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btnLabel:{
        fontSize:15,
     
    
      marginLeft:3,
      marginRight:2
    },
    iconBox:{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        borderRadius:50,
        elevation:2
    }
,Explorepage:{
 
},
    ContentCont:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:COLORS.white,

    }
})
export default HomeScreen