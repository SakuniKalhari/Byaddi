import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FoodDetails from '../component/FoodDetails';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const food = require('../assets/img/6.webp')
const arrow = require('../assets/img/Back_96px-1.webp')
const arrow1 = require('../assets/img/Back_96px.webp')

const VisitorDetails = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('Order')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Eric Widget </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel4}}>
                    <Image source={arrow} style={styles.img1}/>
                    <Image source={food} style={styles.img}/>
                    <Image source={arrow1} style={styles.img1}/>
                </View>
                <View style={styles.container}>
                    <View style={styles.container2}/>
                    <FoodDetails/>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <View style={{width:'50%',marginLeft:dimensions.paddingLevel3}}>
                            <Text style={styles.text5}>Commission rate</Text>
                            <Text style={styles.text5}>Earned amount</Text>
                            <Text style={styles.text5}>Seller</Text>
                            <Text style={styles.text5}>Buyer</Text>
                        </View>
                        <View style={{width:'50%',alignItems:'flex-end',right:40}}>
                            <Text style={styles.text5}>10%</Text>
                            <Text style={styles.text5}>$1.80</Text>
                            <Text style={styles.text5}>Ben Malcolm</Text>
                            <Text style={styles.text5}>Eric Widget,</Text>
                        </View>
                    </View>
 
                    <View style={{flexDirection:'row',width:'100%',top:10}}>
                        <View style={{width:'50%',marginLeft:dimensions.paddingLevel3}}>
                            <Text style={styles.text7}></Text>
                            <Text style={styles.text7}></Text>
                            <Text style={styles.text7}>Mobile number</Text>
                            <Text style={styles.text7}>Delivered date and time</Text>
                        </View>
                        <View style={{width:'50%',alignItems:'flex-end',right:40}}>
                            <Text style={styles.text7}>Address 1,</Text>
                            <Text style={styles.text7}>Address 2,</Text>
                            <Text style={styles.text7}>+1234567890</Text>
                            <Text style={styles.text7}>2 April 2021</Text>
                            <Text style={styles.text7}>14:21</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
export default VisitorDetails ;

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
        marginTop:dimensions.heightLevel1/3,
    },
    text7:{
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontMidMedium,
        marginTop:dimensions.heightLevel1/5,
    },
    container:{
        marginTop:dimensions.heightLevel5,
        color:"#F7F7F7",
        backgroundColor:'white',
        borderRadius:35,
        height:dimensions.heightLevel10*3
    },
    container2:{
        borderWidth:2,
        borderColor:'#E0E2E5',
        width:dimensions.fullWidth/3,
        alignSelf:'center',
        top:dimensions.heightLevel1
    },
})
