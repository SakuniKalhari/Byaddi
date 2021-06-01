import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')

const BankDetails = (props) => (
        <View style={styles.backgroundContainer}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('Earnings')}>
                    <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                </TouchableOpacity>
                <Text style={styles.head}> Bank Details </Text>
            </View>
            <View style={styles.container}>
                <View style={{width:dimensions.widthLevel2/2,justifyContent:'space-evenly'}}>
                    <Text style={styles.text1}>Bank</Text>
                    <Text style={styles.text1}>Account number</Text>
                    <Text style={styles.text1}>Branch</Text>
                </View>
                <View style={{width:dimensions.widthLevel2/2,alignItems:'flex-end',justifyContent:'space-evenly',right:5}}>
                    <Text style={styles.text2}>516516516351</Text>
                    <Text style={styles.text2}>REID Branch</Text>
                    <Text style={styles.text2}>Central Bank</Text>
                </View>
            </View>
            <Text style={styles.text}>Byaddi Private LTD</Text>
        </View>
)
export default BankDetails;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel5*3.4,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    container:{
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel10,
        alignSelf:'center',
        marginTop:dimensions.heightLevel3,
        borderRadius:15,
        backgroundColor:colors.white,
        justifyContent:'space-evenly',
        shadowColor:'#00000029',
        elevation: 10,
        flexDirection:'row'
    },
    text:{
        fontSize:fontSizes.fontXLarge,
        marginTop:dimensions.heightLevel10*3.2,
        alignSelf:'center',
        fontFamily:fontFamilies.GillSansMTBold
    },
    text1:{
        fontSize:fontSizes.fontXLarge,
        paddingLeft:dimensions.paddingLevel2,
        fontFamily:fontFamilies.GillSansMTBold
    },
    text2:{
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.GillSansMTBold
    },
    btn:{
        marginTop:dimensions.heightLevel1*1.2,
        marginLeft:dimensions.paddingLevel3
    },
});