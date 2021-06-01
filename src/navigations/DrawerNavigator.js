import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from './StackNavigation';
import {SafeAreaView,  TouchableOpacity , Text, View,Image } from "react-native";
import {colors, fontFamilies ,fontSizes , dimensions} from "../configurations/constants"

const cansel = require('../assets/img/Close.webp')
const user = require('../assets/img/Ellipse10.webp')
const setting = require('../assets/img/Settings.webp')
const icon5 = require('../assets/img/Icon.webp')
const icon2 = require('../assets/img/Icon(2).webp')
const icon3 = require('../assets/img/Icon(3).webp')
const icon4 = require('../assets/img/Icon(4).webp')
const back = require('../assets/img/Icon5.webp')
const line = require('../assets/img/Line.webp')
const Orders= require('../assets/img/Icon10.webp')
const Riders = require('../assets/img/Group180.webp')

// menu13
//const icon1 = require('../assets/img/Icon(1).webp')

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    initialRouteName="StackNavigations" 
    drawerContent={props => CustomDrawerContent(props)}  
    edgeWidth={0} drawerStyle={{backgroundColor: 'transparent'}} 
    // options={{ swipeEnabled: false }}
    >
      <Drawer.Screen name="StackNavigations" component={StackNavigation} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;



const CustomDrawerContent = ({navigation}) => {
  return (
    <SafeAreaView style={{flex : 1 , backgroundColor : colors.white, borderTopRightRadius : 15  , borderBottomRightRadius : 15}}>
      <View style={{marginVertical : dimensions.paddingLevel3 , width : "100%" , flexDirection : "row", paddingVertical : dimensions.paddingLevel1, alignSelf : "center"}}>
          <Text style={{width : "100%", textAlign : "center" , fontFamily : fontFamilies.SFProTextRegular , fontSize:fontSizes.fontXLarge,fontWeight:'bold',color:'#636363'}}>Menu</Text>      
        <TouchableOpacity style={{position : "absolute" , right : 0 , alignSelf : "center" }}>
          <Image source={cansel} style={{width:dimensions.widthLevel10/6,height:dimensions.heightLevel8}}/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{width:'100%',position:'absolute',top:dimensions.heightLevel7,backgroundColor:"white",flexDirection:"row",paddingVertical:dimensions.paddingLevel3,elevation:10}} 
        onPress={()=>navigation.navigate('EditProfile')}
        >
          <View style={{width : "25%" , justifyContent : "center" , alignItems : "center",left:dimensions.paddingLevel1 }}>
            <Image source={user} style={{width:dimensions.widthLevel9/4,height:dimensions.heightLevel4}}/>
          </View>
          
          <View style={{width : "65%" , paddingHorizontal : dimensions.paddingLevel3,alignSelf:'center' }}>
            <Text style={{color:'#743010',fontFamily:fontFamilies.SFProTextRegular,fontSize:fontSizes.fontLarge,fontWeight:'bold',}}>John Hamilton</Text>
            <Text style={{color:'#878786',fontFamily:fontFamilies.SFProTextRegular,fontSize:fontSizes.fontMedium}}>+12 345 678 901</Text>
          </View>
          
          <View style={{width : "10%" , justifyContent : "center" , alignItems : "center",right:dimensions.paddingLevel1 }}>
            <Image source={setting} style={{width:dimensions.widthLevel9/9,height:dimensions.heightLevel2}} />
          </View>
      </TouchableOpacity>

      <View style={{marginVertical : dimensions.paddingLevel10*2}}>
        {/* here */}
        <ListItem iconName="Orders" title="Orders" navigation={()=>navigation.navigate('Offline')}  />
        <Image source={line} style={{width:dimensions.widthLevel0,height:dimensions.heightLevel1/20}}/>
        <ListItem iconName="Riders" title="Riders" navigation={()=>navigation.navigate('Offline')}/>
        <Image source={line} style={{width:dimensions.widthLevel8,height:dimensions.heightLevel1/20}}/>
        <ListItem iconName="icon5" title="Sellers" navigation={()=>navigation.navigate('Offline')}/>
        <Image source={line} style={{width:dimensions.widthLevel0,height:dimensions.heightLevel1/20}}/>
        <ListItem iconName="icon2" title="Help" navigation={()=>navigation.navigate('Offline')}/>
        <Image source={line} style={{width:dimensions.widthLevel0,height:dimensions.heightLevel1/20}}/>
        <ListItem iconName="icon3" title="Terms & Policies" navigation={()=>navigation.navigate('Offline')}/>
        <Image source={line} style={{width:dimensions.widthLevel0,height:dimensions.heightLevel1/20}}/>
        <ListItem iconName="icon4" title="Log Out" navigation={()=>navigation.navigate('Offline')}/>
        <Image source={line} style={{width:dimensions.widthLevel0,height:dimensions.heightLevel1/20}}/>
      </View>
    
    </SafeAreaView>
  )
}

const ListItem = ({iconName="" ,title="" , navigation}) => {

let icon;
  switch (iconName) {
    case "Orders":
      icon = Orders
      break;

    case "Riders":
      icon = Riders
      break;
      
    case "icon5":
      icon = icon5
      break;

    case "icon2":
      icon = icon2
      break;

    case "icon3":
      icon = icon3
      break;

    case "icon4":
      icon = icon4
      break;
  
    default:
      break;
  }

  return (
    <View style={ { width : "100%" , flexDirection : "row", paddingVertical : dimensions.paddingLevel1 }}>

      <View style={{width : "15%" ,   justifyContent : "center" , alignItems : "center",left:10}}>
        <Image source={icon} style={{width:dimensions.widthLevel10/13,height:dimensions.heightLevel1,flex: 1,resizeMode: 'contain'}} />
      </View>
      
      <View style={{width : "70%" , paddingHorizontal : dimensions.paddingLevel3 }}>
        <Text style={{color:'#636363',fontFamily:fontFamilies.SFProTextRegular,fontSize:fontSizes.fontMidMedium}}>{title}</Text>
      </View>
      
      <TouchableOpacity style={{width : "15%" , justifyContent : "center" , alignItems : "center" }} onPress={navigation}>
        <Image source={back} style={{width:dimensions.widthLevel10/20,height:dimensions.heightLevel1}}/>
      </TouchableOpacity>
  </View>
  )
}