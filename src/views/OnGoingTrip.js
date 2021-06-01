import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const delevery = require('../assets/img/delevery.webp')
const user = require('../assets/img/Ellipse10.webp')
const call = require('../assets/img/Call(2).webp')

const OnGoingTrip = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Ongoing Trip </Text>
                </View>
                <Image source={delevery} style={styles.img}/>
                <View style={{marginTop:dimensions.heightLevel3}}>
                <View style={{flexDirection:'row',width:'100%'}}>
                    <Image source={user} style={styles.img1}/>
                    <View style={{marginTop:dimensions.heightLevel1*2,left:20,width:'60%'}}>
                        <Text style={styles.text}>Order No: 9876</Text>
                        <Text style={styles.text1}>Ben Malcolm - Crossville, 4KM</Text>
                    </View>
                    <Image source={call} style={styles.img2}/>
                </View>
                <View style={styles.line}></View>
                <View style={{marginTop:dimensions.heightLevel2,marginLeft:dimensions.paddingLevel3}}>
                    <Text style={styles.text2}>Delivery Address</Text>
                    <Text style={styles.text3}>1168 Pleasant Way Hanford, California(CA), 93230</Text>
                    <Text style={styles.text3}>Vestibulum libero elit, pulvinar ut erat nec, gravi.</Text>
                </View>
                <View style={styles.line1}></View>
                <View style={{marginTop:dimensions.heightLevel1,marginLeft:dimensions.paddingLevel3}}>
                    <Text style={styles.text2}>Payment Mode</Text>
                    <Text style={styles.text3}>Cash on delivary</Text>
                    <Text style={styles.text3}>$30.99</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('Offline')}>
                    <Text style={styles.btntext}>End</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
export default OnGoingTrip ;

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
        marginLeft:dimensions.paddingLevel3,
        marginTop:dimensions.heightLevel2,
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
        width:dimensions.widthLevel10/3,
        height:dimensions.heightLevel2*2,
        marginTop:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel3,
    },
    btn:{
        borderRadius:25,
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel2*2,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#743010',
        elevation:10,
        shadowColor:'#00000029',
        marginTop:dimensions.heightLevel2
    },
    btntext:{
        textAlign:'center',
        color:colors.white,
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
    },
    text2:{
        color:'#333333',
        fontSize:fontSizes.fontMedium,
        fontFamily:fontFamilies.SFProTextRegular,
    },
    text3:{
        color:'#77838F',
        fontSize:fontSizes.fontMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        top :dimensions.heightLevel1/3
    },
    line:{
        borderWidth:0.5,
        borderColor:'#E6E6E6',
        width:dimensions.widthLevel2,
        marginLeft:dimensions.paddingLevel4,
        top:dimensions.heightLevel1/2
    },
    line1:{
        borderWidth:0.5,
        borderColor:'#E6E6E6',
        width:dimensions.widthLevel2,
        marginLeft:dimensions.paddingLevel4,
        top:dimensions.heightLevel1
    },
})
