import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const delevery = require('../assets/img/delevery.webp')
const user = require('../assets/img/Ellipse10.webp')
const call = require('../assets/img/Call.webp')

const OrderDetails = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('Offline')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Order Details </Text>
                </View>
                <Image source={delevery} style={styles.img}/>
                <View style={{marginTop:dimensions.heightLevel6,backgroundColor:"#F7F7F7",borderRadius:20}}>
                    <View style={{borderWidth:2,borderColor:'#E0E2E5',width:dimensions.fullWidth/3,alignSelf:'center',top:dimensions.heightLevel1/2}}/>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <Image source={user} style={styles.img1}/>
                        <View style={{marginTop:dimensions.heightLevel2,marginLeft:dimensions.paddingLevel3,width:'40%'}}>
                            <Text style={styles.text}>Seller</Text>
                            <Text style={styles.text1}>Ben Malcolm</Text>
                        </View>
                        <Image source={call} style={styles.img2}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={user} style={styles.img1}/>
                        <View style={{marginTop:dimensions.heightLevel2,marginLeft:dimensions.paddingLevel3,width:'40%'}}>
                            <Text style={styles.text}>Customer</Text>
                            <Text style={styles.text1}>John Hamilton</Text>
                        </View>
                        <Image source={call} style={styles.img2}/>
                    </View>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <View style={{marginTop:dimensions.heightLevel1,width:'40%',left:30}}>
                            <Text style={styles.text2}>Package</Text>
                            <Text style={styles.text3}>Egg Pasta</Text>
                        </View>
                        <View style={{marginTop:dimensions.heightLevel1,width:'20%',alignItems:'center'}}>
                            <Text style={styles.text2}>Qty</Text>
                            <Text style={styles.text3}>2</Text>
                        </View>
                        <View style={{marginTop:dimensions.heightLevel1,width:'40%',alignItems:'flex-end',right:20}}>
                            <Text style={styles.text2}>Total Price</Text>
                            <Text style={styles.text3}>$250</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel1}}>
                        <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('OnGoingTrip')}>
                            <Text style={styles.btntext}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn1} onPress={()=>props.navigation.navigate('Offline')}>
                            <Text style={styles.btntext1}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
export default OrderDetails ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel6*3,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
    },
    img:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6*3,
        alignSelf:'center',
        marginTop:dimensions.heightLevel7,
    },
    img1:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel2*2.3,
        marginLeft:dimensions.paddingLevel4,
        marginTop:dimensions.heightLevel1,
    },
    text:{
        color:'#743010',
        fontSize:fontSizes.fontSmallPlus,
        fontFamily:fontFamilies.SFProTextRegular
    },
    text1:{
        fontSize:fontSizes.fontSmallPlus,
        fontFamily:fontFamilies.SFProTextRegular
    },
    img2:{
        width:dimensions.widthLevel10/2.1,
        height:dimensions.heightLevel3*1.3,
        marginTop:dimensions.heightLevel1,
        left:25
    },
    btn:{
        borderRadius:25,
        width:dimensions.widthLevel5/2,
        height:dimensions.heightLevel2*2,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#743010',
        elevation:10,
    },
    btntext:{
        textAlign:'center',
        color:colors.white,
        fontSize:fontSizes.fontMediumPlus,
        fontFamily:fontFamilies.SFProTextRegular
    },
    btn1:{
        borderRadius:25,
        width:dimensions.widthLevel5/2,
        height:dimensions.heightLevel2*2,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.white,
        elevation:10,
    },
    btntext1:{
        textAlign:'center',
        color:'#743010',
        fontSize:fontSizes.fontMediumPlus,
        fontFamily:fontFamilies.SFProTextRegular
    },
    text2:{
        color:'#77838F',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontSmall
    },
    text3:{
        color:'#743010',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontSmall
    }
})