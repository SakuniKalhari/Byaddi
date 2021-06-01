import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FoodDetails from '../component/FoodDetails';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const food = require('../assets/img/6.webp')
const arrow = require('../assets/img/Back_96px-1.webp')
const arrow1 = require('../assets/img/Back_96px.webp')

const OrderFoodDetails = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('Orders')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Eric Widget </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel4}}>
                    <Image source={arrow} style={styles.img1}/>
                    <Image source={food} style={styles.img}/>
                    <Image source={arrow1} style={styles.img1}/>
                </View>
                <View style={{marginTop:dimensions.heightLevel5,color:"#F7F7F7",backgroundColor:'white',borderRadius:35}}>
                    <View style={{borderWidth:2,top:dimensions.heightLevel1,borderColor:'#E0E2E5',width:dimensions.fullWidth/3,alignSelf:'center'}}/>
                     <FoodDetails/>

                     <View style={{flexDirection:'row',width:'100%'}}>
                        <View style={{width:'50%',marginLeft:dimensions.paddingLevel3,}}>
                            <Text style={styles.text5}>Commission rate</Text>
                            <Text style={styles.text5}>Earned amount</Text>
                            <Text style={styles.text5}>Charged amount</Text>
                            <Text style={styles.text5}>Buyer details</Text>
                        </View>
                        <View style={{width:'50%',alignItems:'flex-end',right:40}}>
                            <Text style={styles.text5}>20%</Text>
                            <Text style={styles.text5}>$1.80</Text>
                            <Text style={styles.text5}>Ben Malcolm</Text>
                            <Text style={styles.text5}>Eric Widget,</Text>
                        </View>
                    </View>

                </View>
                <View style={{alignItems:'flex-end',marginRight:dimensions.paddingLevel1,top:dimensions.heightLevel1}}>
                        <Text style={styles.text5}>Address 1</Text>
                        <Text style={styles.text5}>Address 2</Text>
                        <Text style={styles.text5}>mobile number</Text>
                        <Text style={styles.text5}>2 April 2021</Text>
                        <Text style={styles.text5}>14:21</Text>
                    </View>
            </View>
        )
export default OrderFoodDetails ;

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
    text5:{
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontMidMedium,
        marginRight:dimensions.paddingLevel3
    },
})
