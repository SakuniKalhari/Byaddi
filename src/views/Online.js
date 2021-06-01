import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RiderOnline from '../component/RiderOnline';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';

const notification = require('../assets/img/Notification_96px.webp');
const menu = require('../assets/img/Group.webp');
const ellipse = require('../assets/img/Ellipse.webp');
const green = require('../assets/img/Ellipse9.webp');

const Online = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                        <Image source={menu} style={styles.img}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container1} onPress={()=>props.navigation.navigate('Offline')}>
                        <Text style={styles.head}>Online</Text>
                        <Image source={green} style={styles.img4}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'column',marginLeft:dimensions.paddingLevel7*2.2}} onPress={()=>props.navigation.navigate('Notification')}>
                        <Image source={ellipse} style={styles.img3}/>
                        <Image source={notification} style={styles.img2}/>
                    </TouchableOpacity>
                </View>
                <RiderOnline/>
            </View>
            )
export default Online ;
    
const styles = StyleSheet.create({
    backgroundContainer: {
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
    },
    container:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel2,
    },
    head:{
        color:'#636363',
        fontSize:fontSizes.fontLarge,
        textAlign:'center',
        fontFamily:fontFamilies.GillSansMTBold
    },
    img:{
        width:dimensions.widthLevel10/8,
        height:dimensions.heightLevel1*1.4,
        marginLeft:dimensions.paddingLevel5
    },
    img2:{
        width:dimensions.widthLevel10/8,
        height:dimensions.heightLevel1*1.4,
        bottom:dimensions.heightLevel1/2
    },
    img3:{
        width:dimensions.widthLevel10/20,
        height:dimensions.heightLevel1/1.5,
        marginLeft:dimensions.paddingLevel1*1.8,
    },
    container1:{
        flexDirection:'row',
        width:dimensions.widthLevel10/2.3,
        height:dimensions.heightLevel2,
        borderRadius:15,
        justifyContent:'center',
        backgroundColor:colors.white,
        marginLeft:dimensions.paddingLevel7*2        
    },
    img4:{
        width:dimensions.widthLevel10/9,
        height:dimensions.heightLevel1*1.4,
        marginLeft:dimensions.paddingLevel1
    }
})
