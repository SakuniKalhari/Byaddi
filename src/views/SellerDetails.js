import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const food = require('../assets/img/6.webp')
const arrow = require('../assets/img/Back_96px-1.webp')
const arrow1 = require('../assets/img/Back_96px.webp')
const whats = require('../assets/img/Group31.webp')
const time = require('../assets/img/Group20.webp')
const hill = require('../assets/img/Group21.webp')
const star = require('../assets/img/Group189.webp')
const heart = require('../assets/img/Heart.webp')

const SellerDetails = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={styles.btn1} onPress={()=>props.navigation.navigate('HomeScreen')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Sellers')}>
                        <Text style={styles.head}> Ben Malcolm </Text>
                    </TouchableOpacity>
                    <View style={{marginLeft:dimensions.paddingLevel7*2.1,flexDirection:'column'}}>
                        <Image source={star} style={{width:dimensions.widthLevel10/6,height:dimensions.heightLevel1*2}}/>
                        <Image source={heart} style={{width:dimensions.widthLevel10/9,height:dimensions.heightLevel1,left:dimensions.paddingLevel1/2}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel4}}>
                    <Image source={arrow} style={styles.img1}/>
                    <Image source={food} style={styles.img}/>
                    <Image source={arrow1} style={styles.img1}/>
                </View>
                <View style={{marginTop:dimensions.heightLevel6,color:"#F7F7F7",backgroundColor:'white',borderRadius:35,height:dimensions.heightLevel10*3.5}}>
                    <View style={{borderWidth:2,borderColor:'#E0E2E5',width:dimensions.fullWidth/3,alignSelf:'center',top:dimensions.heightLevel1}}/>
                    <View style={{flexDirection:'row',marginTop:dimensions.heightLevel3,width:'100%'}}>
                        <Text style={styles.text}>Egg Pasta</Text>
                        <Text style={styles.text1}>$5.99</Text>
                    </View>
                    <Text style={styles.text2}>Spicy egg pasta</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel2}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={time} style={{width:dimensions.widthLevel10/12,height:dimensions.heightLevel1}}/>
                            <Text style={styles.text5}>15-20 min</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={hill} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1,marginLeft:dimensions.paddingLevel9*2}}/>
                            <Text style={styles.text5}>1052 cal</Text>
                        </View>
                    </View>
                    <Text style={styles.text3}>Details</Text>
                    <Text style={styles.text4}>Thai cuisine combines vegetable, fish, and other meat cooked with many kinds of spices such as
                    garlic, chili, lemongrass, coconut milk, tamarind, ginger, coriander, basil, and peanuts.</Text>
                    <TouchableOpacity styles={styles.btn}>
                        <Image source={whats} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
export default SellerDetails ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel7*2.2,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    img:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel7*2,
    },
    img1:{
        marginTop:dimensions.heightLevel4,
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel5
    },
    text:{
        fontSize:fontSizes.fontXXXXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        width:'50%',
        left:20
    },
    text1:{
        fontSize:fontSizes.fontXXXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        width:'50%',
        textAlign:'right',
        right:25
    },
    text2:{
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginLeft:dimensions.paddingLevel3
    },
    text3:{
        fontSize:fontSizes.fontXXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginLeft:dimensions.paddingLevel3,
        marginTop:dimensions.heightLevel2
    },
    text4:{
        fontFamily:fontFamilies.GillSansMTBold,
        color:'#676565',
        fontSize:fontSizes.fontMedium,
        marginLeft:dimensions.paddingLevel3,
        marginTop:dimensions.heightLevel1/2
    },
    image:{
        width:dimensions.widthLevel1,
        height:dimensions.heightLevel5,
        marginTop:dimensions.heightLevel1,
        alignSelf:'center'
    },
    text5:{
        color:'#676565',
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontLarge
    },
    btn1:{
        marginTop:dimensions.heightLevel1*1.2,
        marginLeft:dimensions.paddingLevel3
    },
})