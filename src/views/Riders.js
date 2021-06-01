import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RiderDetails from '../component/RiderDetails';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const star = require('../assets/img/Star.webp')
const user = require('../assets/img/Ellipse10.webp')
const whats = require('../assets/img/Group31.webp')
const star1 = require('../assets/img/Star1.webp')

const Riders = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('HomeScreen')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Riders </Text>
                </View>
                <Image source={user} style={styles.img}/>
                <View style={styles.container}>
                    <Text style={styles.text}>Harry Porter</Text>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <Image source={star} style={styles.img1}/>
                        <Image source={star} style={styles.img1}/>
                        <Image source={star} style={styles.img1}/>
                        <Image source={star} style={styles.img1}/>
                        <Image source={star1} style={styles.img1}/>
                    </View>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('RiderReview')} style={styles.btn1}>
                        <Text style={{fontFamily:fontFamilies.SFProTextRegular,fontSize:fontSizes.fontMidMedium,textAlign:'center'}}>Write a review</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:dimensions.heightLevel1/2}}>
                        <View>
                            <Text style={{color:'#878786',fontFamily:fontFamilies.SFProTextRegular,fontSize:fontSizes.fontMedium}}>Orders</Text>
                            <Text style={styles.text1}>279</Text>
                        </View>
                        <View style={{marginLeft:dimensions.paddingLevel8}}>
                            <Text style={{color:'#878786',fontFamily:fontFamilies.SFProTextRegular,fontSize:fontSizes.fontMedium}}>Since</Text>
                            <Text>7 months</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <View style={{width:'40%',left:10}}>
                            <Text style={styles.text2}>Email Adress</Text>
                            <Text style={styles.text2}>Phone number</Text>
                            <Text style={styles.text2}>City</Text>
                            <Text style={styles.text2}>Price for 1KM</Text>
                        </View>
                        <View style={{alignItems :'flex-end',width:'60%',right:10}}>
                            <Text style={styles.text1}>rider@domain.com</Text>
                            <Text style={styles.text1}>+12 345 678 901</Text>
                            <Text style={styles.text1}>New York</Text>
                            <Text style={styles.text1}>$2</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.text4}>Reviews</Text>
                    <RiderDetails/>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Chat via Whatsapp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
export default Riders ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel8*2.2,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    img:{
        width:dimensions.widthLevel7/3.3,
        height:dimensions.heightLevel6,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2
    },
    img1:{
        width:dimensions.widthLevel10/12,
        height:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel1,
        marginTop:dimensions.heightLevel1/2
    },
    text:{
        textAlign:'center',
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontXXLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel3
    },
    text1:{
        color:'#636363',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular
    },
    text2:{
        color:'#989898',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMidMedium
    },
    btn:{
        backgroundColor:'#40C351',
        width:dimensions.widthLevel4,
        height:dimensions.heightLevel3,
        alignSelf :'center',
        borderRadius:15,
        justifyContent:'center',
        marginTop:-70
    },
    container:{
        color:'#FFFFFF',
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel9*2,
        marginTop:-40,
        alignSelf:'center',
        shadowColor:'#00000014',
        elevation:10
    },
    btn1:{
        width:dimensions.widthLevel9/2,
        backgroundColor:'#FFFFFF',
        borderRadius:7,
        alignSelf:'center',
        marginTop:dimensions.heightLevel1/2,
        shadowColor:'#00000029',
        elevation:10
    },
    container1:{
        color:'#FFFFFF',
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel10*2,
        alignSelf:'center',
        shadowColor:'#00000014',
        elevation:10,
    },
    btntext:{
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontXLarge,
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    text4:{
        color:'#636363',
        fontSize:fontSizes.fontMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        fontWeight:'bold'
    },
})