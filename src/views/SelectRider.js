import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Rider from '../component/Rider';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const search=require('../assets/img/Search.webp');

const SelectRider = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel1}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('PlaceOrder')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Select rider </Text>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1/1.2,marginLeft:dimensions.paddingLevel10}} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                        <Text style={{fontSize:fontSizes.fontMidMedium,fontFamily:fontFamilies.GillSansMTBold}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Image source={search} style={styles.img1}/>
                    <TextInput placeholder="Search" style={styles.placehold}/>
                </View>
                
                <Rider/>
            </View>
        )
export default SelectRider ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1/2,
        marginLeft:dimensions.paddingLevel8*2,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    text:{
        fontWeight:'bold',
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginRight:dimensions.paddingLevel8*2
    },
    container:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel3,
        backgroundColor :colors.white,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2,
        borderRadius:10,
        flexDirection:'row',
    },
    img1:{
        width:dimensions.widthLevel10/9,
        height:dimensions.widthLevel10/9,
        marginTop:dimensions.heightLevel1/2,
        marginLeft:dimensions.paddingLevel1,
    },
    placehold:{
        marginLeft:dimensions.paddingLevel2,
        color:'#636363',
        fontSize:fontSizes.fontLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        width:dimensions.widthLevel6
    },
});