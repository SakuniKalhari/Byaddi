import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';

const notificationIcon = require('../assets/img/Notification_96px.webp');
const menu = require('../assets/img/Group.webp');
const ellipse = require('../assets/img/Ellipse.webp');
const order=require('../assets/img/ShoppingBag.webp');
const ad = require('../assets/img/CreateDocument_96px.webp');
const orders = require('../assets/img/TaskCompleted.webp');
const post =require('../assets/img/PurchaseOrder.webp');
const earn = require('../assets/img/MoneyBagPokem.webp');
const rider = require('../assets/img/Truck.webp');

const BenMalcolm = (props) => (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={{marginLeft:dimensions.paddingLevel5}} 
                    onPress={()=>props.navigation.openDrawer()}>
                    <Image source={menu} style={styles.img}/>
                </TouchableOpacity>
                <Text style={styles.head}>Ben Malcolm</Text>
                <View style={{flexDirection:'column',marginLeft:dimensions.paddingLevel10,}}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
                        <Image source={ellipse} style={styles.img3}/>
                    </TouchableOpacity>
                    <Image source={notificationIcon} style={styles.img2}/>
                </View>
            </View>
                <TouchableOpacity style={styles.container2}>
                    <Text style={styles.text}>Place order</Text>
                    <Image source={order} style={styles.img1}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container2} onPress={()=>props.navigation.navigate('CreateAdd')}>
                    <Text style={styles.text}>Create ad</Text>
                    <Image source={ad} style={styles.img1}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container2} onPress={()=>props.navigation.navigate('PlaceOrder')}>
                    <Text style={styles.text}>Orders</Text>
                    <Image source={orders} style={styles.img1}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container2} onPress={()=>props.navigation.navigate('PostedAds')}>
                    <Text style={styles.text}>Posted ads</Text>
                    <Image source={post} style={styles.img1}/>
                </TouchableOpacity>
                <View style={styles.container3}>
                    <TouchableOpacity style={styles.container4} onPress={()=>props.navigation.navigate('Earnings')}>
                        <Image source={earn} style={styles.text2}/>
                        <Text style={styles.text1}>My Earnings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container4} onPress={()=>props.navigation.navigate('SelectRider')}>
                        <Image source={rider} style={styles.img4}/>
                        <Text style={styles.text3}>Riders</Text>
                    </TouchableOpacity>
                </View>
            </View>
)
export default BenMalcolm ;
    
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
        marginLeft:dimensions.paddingLevel7*2,
        fontFamily:fontFamilies.SFProTextRegular,
        fontWeight:'bold'
    },
    img:{
        width:dimensions.widthLevel10/8,
        height:dimensions.heightLevel1*1.4,
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
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6,
        backgroundColor:colors.white,
        marginTop:dimensions.heightLevel3,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'flex-end',
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
            elevation: 10,
     },
    img1:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel10/3,
        marginRight:dimensions.paddingLevel3,
        alignSelf:'center'
    },
    text:{
        alignSelf :'center',
        fontSize:fontSizes.fontXLarge,
        marginRight:dimensions.paddingLevel3,
        fontFamily:fontFamilies.GillSansMTBold,
    },
    container3:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel3,
        justifyContent:'space-evenly',
    },
    text2:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel10/3,
        alignSelf:'center'
    },
    container4:{
        width:dimensions.widthLevel6/2,
        height:dimensions.heightLevel6*2,
        backgroundColor:colors.white,
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'center',
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text1:{
        fontSize:fontSizes.fontXLarge,
        marginLeft:dimensions.paddingLevel2,
        marginTop:dimensions.heightLevel1/2
    },
    img4:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel10/3,
        alignSelf:'center'
    },
    text3:{
        fontSize:fontSizes.fontXLarge,
        textAlign:'center',
        marginTop:dimensions.heightLevel1/2
    },
});