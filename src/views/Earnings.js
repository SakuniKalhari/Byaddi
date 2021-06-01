import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';
import {BarChart} from "react-native-chart-kit";
import Chart from '../component/Chart';

const back=require('../assets/img/Group18.webp')

const Earnings = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={styles.btn1} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Earnings </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Wallet Balance</Text>
                    <Text style={styles.text1}>$ 680</Text>
                </View>
                <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate('BankDetails')}>
                    <View style={{marginLeft:dimensions.paddingLevel1,alignSelf:'center',width:dimensions.widthLevel3/2}}>
                        <Text style={{fontSize:fontSizes.fontXLarge,fontFamily:fontFamilies.LatoRegular,}}>Payable Amount</Text>
                        <Text style={styles.text3}>$ 70</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Pay</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <Chart/>
                <View style={styles.container2}>
                    <View style={{width:dimensions.widthLevel3/2,marginTop:dimensions.heightLevel2,left:15}}>
                        <Text style={styles.text4}>Total Earnings</Text>
                        <Text style={styles.text5}>Bank Deposits</Text>
                        <Text style={styles.text5}>Online Payments</Text>
                    </View>
                    <View style={{marginTop:dimensions.heightLevel2,width:dimensions.widthLevel3/2,alignItems:'flex-end',right:15}}>
                        <Text style={styles.text4}>$ 680</Text>
                        <Text style={styles.text5}>$ 450</Text>
                        <Text style={styles.text5}>$ 230</Text>
                    </View>
                </View>
            </View>
        )
export default Earnings ;

const styles = StyleSheet.create({
    backgroundContainer: {
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel7*2.7,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    container:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6,
        backgroundColor:'#FFFFFF',
        shadowColor:'#00000029',
        borderRadius:10,
        elevation:10,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2,
        flexDirection:'row'
    },
    text:{
        color:'#202020',
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.LatoRegular,
        alignSelf:'center',
        width:dimensions.widthLevel3/2,
        left:10
    },
    text1:{
        color:'#202020',
        fontSize:fontSizes.fontXXXLarge,
        fontFamily:fontFamilies.LatoRegular,
        alignSelf:'center',
        fontWeight:'bold',
        width:dimensions.widthLevel3/2,
        textAlign:'right',
        right:5
    },
    btn:{
        borderRadius:10,
        width:dimensions.widthLevel9/2,
        height:dimensions.heightLevel2*2,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#743010',
        marginLeft:dimensions.paddingLevel5
    },
    btntext:{
        textAlign:'center',
        color:colors.white,
        fontSize:fontSizes.fontMedium,
        fontFamily:fontFamilies.LatoRegular,
        fontWeight:'bold'
    },
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel8,
        backgroundColor:'#FFFFFF',
        shadowColor:'#00000029',
        borderRadius:10,
        elevation:10,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2,
        flexDirection:'row'
    },
    text4:{
        fontFamily:fontFamilies.LatoRegular,
        fontSize:fontSizes.fontLarge,
    },
    text5:{
        fontFamily:fontFamilies.LatoRegular,
        fontSize:fontSizes.fontMidMedium,
        top:dimensions.heightLevel1/2
    },
    text6:{
        color:'#202020',
        fontFamily:fontFamilies.LatoRegular,
        fontWeight:'bold',
        fontSize:fontSizes.fontLarge
    },
    btn1:{
        marginTop:dimensions.heightLevel1*1.2,
        marginLeft:dimensions.paddingLevel3
    },
    text3:{
        fontSize:fontSizes.fontXXXLarge,
        fontFamily:fontFamilies.LatoRegular,
        fontWeight:'bold'
    }
})