import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const user=require('../assets/img/Ellipse10.webp')

const CustomerNotification  = (navigation) => {
        return(
           <View>
                <ListItem iconName="user" title="Eric Widget" 
                    details="Aenean euismod pellentesque tincidunt era.nam eu enim erat.In dictum, nibh a eu." 
                        navigation={navigation}/>
                <ListItem iconName="user" title="Niles Peppertrout" 
                    details="Fusce quis ante nisi.Pellentesque odio Pellentesque odio augue, id vestibulum."  
                        navigation={navigation}/>
                <ListItem iconName="user" title="Max Conversion" 
                    details=" Curabitur ullamcorper pulvinar egestas vel condimentum.Quisque dictum urna vel."  
                        navigation={navigation}/>
                <ListItem iconName="user" title="Bailey Wonger" 
                    details="Nam ac metus tincidunt,faucibus ipsum nec,malesuada lorem. Ut tempus justo."  
                        navigation={navigation}/>
           </View>
       )
}

const ListItem = ({iconName="",title="" ,details="", navigation}) => {
    let icon;
    switch (iconName) {
      case "user":
        icon = user
        break;

        default:
            break;
    }

    return(
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('OrderDetails')}>
            <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
                <Image source={icon} style={styles.img}/>
            </TouchableOpacity>
            <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
                <Text style={styles.text}>{title}</Text>
                <View style={{marginTop:dimensions.heightLevel1/2}}>
                    <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>{details}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
     
export default CustomerNotification ;

const styles = StyleSheet.create({
    img:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel4,
    },
    text:{
        fontWeight:'bold',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.Humanst521BT,
    },
    btn:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel3,
        marginLeft:dimensions.paddingLevel2
    },
});