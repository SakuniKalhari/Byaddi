import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const star = require('../assets/img/Star.webp')
const user = require('../assets/img/Ellipse10.webp')

const RiderDetails  = (props) => {
        return(
            <View>
                <ListItem iconName="" title="Eric Widget" details="Aenean euismod pellentesque tincidunt era. Nam eu enim erat. In dictum, nibh a eu."/>
                <ListItem iconName="" title="Niles Peppertrout" details="Fusce quis ante nisi. Pellentesque odio pellentesque odio augue, id vestibulum." />
                <ListItem iconName="" title="Max Conversion" details="Curabitur ullamcorper pulvinar egestas vel condimentum. Quisque dictum urna vel." />
                <ListItem iconName="" title="Bailey Wonger" details="Aenean euismod pellentesque tincidunt era. Nam eu enim erat. In dictum, nibh a eu." />
            </View>
        )
}

const ListItem = ({iconName="",title="" ,details="", props}) => {
    let icon;
    switch (iconName) {
      case "user":
        icon = user
        break;

        default:
            break;
    }

    return(
        <View style={{flexDirection:'row',marginTop:dimensions.heightLevel1,height:dimensions.heightLevel6}}>
            <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
                <Image source={user} style={styles.img2}/>
            </TouchableOpacity>
            <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel1,flexDirection:'column'}}>
                <View style={{flexDirection:'row',width:'100%'}}>
                    <Text style={styles.text3}>{title}</Text>
                    <View style={{flexDirection:'row',width:'35%'}}>
                        <Image source={star} style={styles.img3}/>
                        <Image source={star} style={styles.img3}/>
                        <Image source={star} style={styles.img3}/>
                        <Image source={star} style={styles.img3}/>
                        <Image source={star} style={styles.img3}/>
                    </View>
                </View>
                <View style={{marginTop:dimensions.heightLevel1/2}}>
                    <Text style={styles.text4}>{details}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text6:{
        color:'#636363',
        fontSize:fontSizes.fontMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        fontWeight:'bold'
    },
    img2:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel4,
    },
    text3:{
        color:'#333333',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMedium,
        width:'65%'
    },
    img3:{
        width:dimensions.widthLevel10/17,
        height:dimensions.heightLevel1/1.4,
        marginLeft:dimensions.paddingLevel1,
    },
    text4:{
        fontSize:fontSizes.fontMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        color:'#787878'
    },
})

export default RiderDetails;
