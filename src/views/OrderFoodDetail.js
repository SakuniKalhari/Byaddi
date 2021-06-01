import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FoodDetails from '../component/FoodDetails';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const food = require('../assets/img/6.webp')
const arrow = require('../assets/img/Back_96px-1.webp')
const arrow1 = require('../assets/img/Back_96px.webp')

const OrderFoodDetail = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('OrdersHome')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Eric Widget </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel4}}>
                    <Image source={arrow} style={styles.img1}/>
                    <Image source={food} style={styles.img}/>
                    <Image source={arrow1} style={styles.img1}/>
                </View>
                <View style={{marginTop:dimensions.heightLevel4,color:"#F7F7F7",backgroundColor:'white',borderRadius:25}}>
                    <View style={{borderWidth:2,borderColor:'#E0E2E5',width:dimensions.fullWidth/3,alignSelf:'center',top:dimensions.heightLevel1}}/>
                     <FoodDetails/>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <View style={{width:'50%',marginLeft:dimensions.paddingLevel3}}>
                            <Text style={styles.text5}>Date order placed</Text>
                            <Text style={styles.text5}>Time order placed</Text>
                            <Text style={styles.text5}>Delivery cost</Text>
                            <Text style={styles.text}>Buyer details</Text>
                        </View>
                        <View style={{width:'50%',alignItems:'flex-end',right:40}}>
                            <Text style={styles.text5}>2 April 2021</Text>
                            <Text style={styles.text5}>14:10</Text>
                            <Text style={styles.text5}>$2.80</Text>
                            <Text style={styles.text}>Rider details</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',width:'100%',top:10}}>
                        <View style={{width:'50%',marginLeft:dimensions.paddingLevel3}}>
                            <Text style={styles.text6}>Eric Widget,</Text>
                            <Text style={styles.text6}>Address 1,</Text>
                            <Text style={styles.text6}>Address 2,</Text>
                            <Text style={styles.text6}>+1234567890</Text>
                        </View>
                        <View style={{width:'50%',alignItems:'flex-end',right:40}}>
                            <Text style={styles.text6}>Harry Potter,</Text>
                            <Text style={styles.text6}>Address 1,</Text>
                            <Text style={styles.text6}>Address 2,</Text>
                            <Text style={styles.text6}>+1234567890</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
export default OrderFoodDetail ;

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
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontMidMedium,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1/2,
    },
    text5:{
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontMidMedium,
        marginTop:dimensions.heightLevel1/3,
    },
    text6:{
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontMidMedium,
    },
})
