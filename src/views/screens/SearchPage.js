import { MaterialIcons,Entypo,MaterialCommunityIcons,Fontisto, Ionicons } from "@expo/vector-icons";
import { faL } from "@fortawesome/free-solid-svg-icons";
import {React,useState,useEffect,useRef} from "react";
import { useSelector } from "react-redux";
import {Image,SafeAreaView,Text,StyleSheet,View, Touchable, TouchableOpacity, Platform} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native";
import COLORS from "../../const/colors";
import { Button } from "react-native-paper";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout,Marker,Circle } from "react-native-maps";
import {GOOGLE_MAPS_KEY} from "@env"
import SlideView from "./SlideView";
import { Provider } from 'react-native-paper';
import { selectOrigin } from "../../../slices/navSlice";
import * as Location from "expo-location"
import HotelSearchView from "./HotelSearchView"
import DatePicker from "react-native-modern-datepicker"
import Flightsearch from "./Flightsearch";

export default function SearchPage(){
const [hotelBtn,selectHotelBtn] = useState(false)
const [carBtn,selectCarBtn] = useState(false)
const [planeBtn,selectPlaneBtn] = useState(false)



const [selectedCheckinDate, setSelectedCheckinDate] = useState('');
const [openDatePicker1, setOpenDatePicker1] = useState(false);
const [airplane,selectAirplaneBtn] = useState(false)
const [show,setShow] = useState(false)
const [openDatePicker2, setOpenDatePicker2] = useState(false);
   
    
const [selectedCheckoutDate, setSelectedCheckoutDate] = useState('');

const origin = useSelector(selectOrigin)

const [pin,setPin] = useState({
  latitude:13.4564,longitude:123.3753,longitudeDelta:0.005,latitudeDelta:0.0005
})
const mapState = {
  

    categories: [
      { 
        name: 'Fastfood Center', 
        icon: <MaterialCommunityIcons style={style.chipsIcon} name="food-fork-drink" size={18} />,
      },
      {
        name: 'Restaurant',
        icon: <Ionicons name="ios-restaurant" style={style.chipsIcon} size={18} />,
      },
      {
        name: 'Dineouts',
        icon: <Ionicons name="md-restaurant" style={style.chipsIcon} size={18} />,
      },
      {
        name: 'Snacks Corner',
        icon: <MaterialCommunityIcons name="food" style={style.chipsIcon} size={18} />,
      },
     
  ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };
  const [state, setState] = useState(mapState);
const mapRef = useRef(null);

const locate = () => {
  useEffect(()=>{
  (async () => {
    console.log(pin)
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
  
    setPin({
      latitude:location.coords.latitude,
      longitude:location.coords.longitude,
      longitudeDelta:0.005,latitudeDelta:0.0005
    });
  
    mapRef.current?.animateToRegion(pin)
   
  })();
}, []);
}

/*{hotelBtn &&
  <View style={{marginTop:20,alignItems:'center'}}>


<View style={style.searchContainer}>
   <MaterialIcons name="location-pin" color={COLORS.primary} size={20}></MaterialIcons>
   <TextInput placeholder="Search hotel" style={{fontSize:17,width:"80%",paddingLeft:10}}></TextInput>
 
 </View>
 <View style={style.searchContainer}>
   <MaterialIcons name="calendar-today" color={COLORS.primary} size={20}></MaterialIcons>
   <TextInput placeholder="Check-in date" style={{fontSize:17,width:"80%",paddingLeft:10}}></TextInput>
 
 </View>
 <View style={style.searchContainer}>
   <MaterialIcons name="person" color={COLORS.primary} size={20}></MaterialIcons>
   <TextInput placeholder="1 adult - 2 children" style={{fontSize:17,width:"80%",paddingLeft:10}}></TextInput>
 
 </View>
 <Button  style={{marginTop:20}}size={90}contentStyle={{ width: 250 }}  color="wheat" icon="" mode="contained" > Search</Button>
 </View>
 

  }*/
    return(
      <Provider>
      <SafeAreaView style={{flex:1,backgroundColor:COLORS.white,paddingBottom:20,height:'100%',width:'100%'}}>
      
  {origin!=null?<MapView mapType="mutedStandard" style={{flex:1}}
  initialRegion={{latitude:origin.location.lat,longitude:origin.location.lng,longitudeDelta:0.005,latitudeDelta:0.005}}
  >
{origin ?.location && (
<Marker coordinate={{latitude:origin.location.lat,longitude:origin.latitude.lng}} title="Origin" description={origin.description} identifier="origin"/>
)}

  </MapView>:<MapView ref={mapRef} mapType="mutedStandard" style={{flex:1}}
  initialRegion={pin}
  >
<Marker  draggable={true} showUserLocation={true} onUserLocationChange={(e)=>{
setPin({
  latitude:e.nativeEvent.coordinate.latitude,
  longitude:e.nativeEvent.coordinate.longitude
})
}}  coordinate={pin} onDragStart={(e)=>{
console.log("drag start",e.nativeEvent.coordinate)
  }} pinColor="gold">

</Marker>
<Circle center={pin} radius={100}/>
  </MapView>}
  <TouchableOpacity activeOpacity={0.1} onPressIn={()=>console.log("clicked")}>
  <View style={{ elevation:10,position:'absolute',bottom:120,right:15,backgroundColor:'white',borderRadius:50}}>
    <Ionicons name="ios-locate" color={COLORS.primary} size={30}></Ionicons>
  </View>
  </TouchableOpacity>
      <View style={style.boxTab}>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>selectHotelBtn(true)}>
        <View style={{alignItems:'center',elevation:3,width:'auto',height:50,padding:10,borderRadius:15,backgroundColor:"#212222"}}>
          <Fontisto name="hotel-alt" color={COLORS.primary} size={30}></Fontisto>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
          
  selectCarBtn(true)}} activeOpacity={0.5}>
          <View style={{alignItems:'center',elevation:3,width:'auto',height:50,padding:10,borderRadius:15,backgroundColor:"#212222"}}>
         
          <MaterialCommunityIcons name="taxi" color={COLORS.primary} size={30}></MaterialCommunityIcons>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>selectPlaneBtn(true)} activeOpacity={0.5}>
          <View style={{alignItems:'center',elevation:3,width:'auto',height:50,padding:10,borderRadius:15,backgroundColor:'#212222'}}>
         
          <Entypo name="aircraft" color={COLORS.primary} size={30}></Entypo>
          </View>
          </TouchableOpacity>
     
          
        </View>
        <View style={style.searchBox}>
    <TextInput placeholder="Where to?" placeholderTextColor="#000" autoCapitalize="none" style={{flex:1,padding:0}} ></TextInput>
  <Ionicons name="search" size={20}></Ionicons>
  
  </View>
 
  <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={style.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={style.chipsItem}>
            {category.icon}
            <Text style={{fontSize:15}}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
        <SlideView show={carBtn}   onDismiss={()=>{
      selectCarBtn(false);}
      }
      enableBackDropDismiss>
        
      
      </SlideView>
      <Flightsearch show={planeBtn}   onDismiss={()=>{
      selectPlaneBtn(false);}
      }
      enableBackDropDismiss>
        
      
      </Flightsearch>
      
<HotelSearchView setOpenDatePicker1={setOpenDatePicker1} setSelectedCheckinDate={setSelectedCheckinDate} openDatePicker1={openDatePicker1} openDatePicker2={openDatePicker2} setOpenDatePicker2={setOpenDatePicker2} selectedCheckoutDate={selectedCheckoutDate} setSelectedCheckoutDate={setSelectedCheckoutDate} show={hotelBtn}  onDismiss={()=>{
      selectHotelBtn(false)}
      }></HotelSearchView>
       <View style={{position:'absolute',width:'100%'}}>
                {openDatePicker1&&<DatePicker
      options={{
      
        textHeaderColor: COLORS.primary,
        textDefaultColor: 'black',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor:  COLORS.primary,
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
  
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}
      minimumDate={new Date().toISOString().slice(0, 10)}
      onSelectedChange={(date) => {
        setSelectedCheckinDate(date)
      
    setOpenDatePicker1(false)
    }}
    />}
     {openDatePicker2&&selectedCheckinDate!==""&&<DatePicker
      options={{
      
        textHeaderColor: COLORS.primary,
        textDefaultColor: 'black',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor:  COLORS.primary,
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      mode="calendar"
      
      minuteInterval={30}
      style={{ borderRadius: 10 }}
      minimumDate={selectedCheckinDate}
      onSelectedChange={(date) => {
        setSelectedCheckoutDate(date)
    setOpenDatePicker2(false)
    }}
    />}
</View>
      
      </SafeAreaView>
      </Provider>
    )
}

const style = StyleSheet.create({
  boxTab:{
    
    height:100,
    elevation:13,
    backgroundColor:"white",
    width:"95%",
    borderRadius:15,
    marginLeft:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    position:'absolute',
   bottom:9

  },
   chipsScrollView: {
    position:'absolute', 
    top:100, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  searchBox:{
position:'absolute',
marginTop:Platform.OS=="ios"?40:40,
flexDirection:'row',
backgroundColor:'#fff',
width:'90%',
alignSelf:'center',
borderRadius:5,
padding:10,
shadowColor:'#ccc',
shadowOffset:{width:0,height:3},
shadowOpacity:0.5,
shadowRadius:5,
elevation:10
  },
  searchContainer:{
    height:50,
    backgroundColor:"#eee",
    marginTop:2,
    width:"95%",
    paddingHorizontal:20,
  
    flexDirection:'row',
    alignItems:'center',
  
    

  }
})