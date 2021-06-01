import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const user=require('../assets/img/2.webp')
const tick= require('../assets/img/TickBox.webp')
const plus =require('../assets/img/Plus.webp')

const PlaceFood  = (props) => {
        return(
            <View>
                <ListItem title="Food number 1" details="$5.99" iconName="tick" />
                <ListItem title="Food number 2" details="$5.99" iconName="tick" />
                <ListItem title="Food number 3" details="$5.99" iconName="plus" />
                <ListItem title="Food number 4" details="$5.99" iconName="plus" />
                <ListItem title="Food number 5" details="$5.99" iconName="plus" />
            </View>
        )
}

const ListItem = ({title="" ,details="",iconName="" }) => {
    let icon;
    switch (iconName) {
    case "tick":
        icon = tick
        break;

    case "tick":
      icon = tick
      break;

    case "plus":
        icon = plus
        break;

    case "plus":
        icon = plus
        break;

    case "plus":
        icon = plus
        break;

        default:
            break;
    }

    return(
        <View style={styles.container2}>
            <Image source={user} style={styles.img1}/>
            <View style={{alignSelf:'center',marginLeft:dimensions.paddingLevel4}}>
                <Text style={styles.text}>{title}</Text>
                <Text style={{fontSize:fontSizes.fontMidMedium,color:'#918E8E',fontFamily:fontFamilies.GillSansMTBold,}}>{details}</Text>
            </View>
            <Image source={icon} style={styles.img}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6,
        backgroundColor:colors.white,
        marginTop:dimensions.heightLevel1*2,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        shadowColor: "#00000029",
        elevation: 10,
    },
    img1:{
        width:dimensions.widthLevel10/3.8,
        height:dimensions.heightLevel10/3,
        marginLeft :dimensions.paddingLevel2,
        alignSelf:'center'
    },
    text:{
        alignSelf :'center',
        fontSize:fontSizes.fontXLarge,
        marginRight:dimensions.paddingLevel3,
        fontFamily:fontFamilies.GillSansMTBold,
    },
    img:{
        width:dimensions.widthLevel10/8,
        height:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel6,
        alignSelf:'center'
    },
})

export default PlaceFood;