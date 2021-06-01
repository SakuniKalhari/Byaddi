import React, { Component } from 'react';
import { View, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';
import FoodSelect from '../component/FoodSelect';

const search=require('../assets/img/Search.webp');
const down = require('../assets/img/Down.webp');
const up = require('../assets/img/up.webp');

const FoodSearch = (props) => (
            <View style={styles.backgroundContainer}>
                <Text style={styles.head}> Byaddi </Text>
                <View style={styles.container}>
                    <Image source={search} style={styles.img}/>
                    <TextInput placeholder="Search" style={styles.placehold}/>
                    <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('Foods')}>
                    </TouchableOpacity>
                </View>
                <Image source={up} style={styles.img3}/>
                <View style={styles.container3}>
                    <View style={styles.container4}>
                        <Image source={down} style={styles.img2}/>
                        <Text style={styles.text2}>Choose a city</Text>
                    </View>
                    <View style={styles.container5}>
                        <CheckBox />
                        <Text style={styles.text1}>Best rated</Text>
                        <CheckBox />
                        <Text style={styles.text1}>Cheapest</Text>
                    </View>
                </View>
                <FoodSelect/>
            </View>
)
export default FoodSearch ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        marginTop:dimensions.heightLevel2,
        color:'#636363',
        textAlign:'center',
        fontFamily:fontFamilies.Stcaiyun,
    },
    container:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel3,
        backgroundColor :colors.white,
        alignSelf:'center',
        marginTop:dimensions.heightLevel1,
        borderRadius:10,
        flexDirection:'row',
    },
    container3:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel3,
        backgroundColor :'#743010',
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
    },
    img:{
        width:dimensions.widthLevel10/9,
        height:dimensions.widthLevel10/9,
        marginTop:dimensions.heightLevel1/2,
        marginLeft:dimensions.paddingLevel1,
    },
    placehold:{
        marginLeft:dimensions.paddingLevel2,
        color:'#636363',
        fontSize:fontSizes.fontLarge,
        // fontFamily:fontFamilies.GillSansMTBold,
    },
    container4:{
        width:dimensions.widthLevel7/2,
        height:dimensions.heightLevel2,
        backgroundColor :colors.white,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        marginLeft:dimensions.paddingLevel1
    },
    img2:{
        width:dimensions.widthLevel10/12,
        height:dimensions.heightLevel2/2,
        marginLeft:dimensions.paddingLevel1/2,
        alignSelf:'center'
    },
    container5:{
        alignSelf:'center',
        flexDirection:'row',
        marginLeft:dimensions.paddingLevel1
    },
    btn:{
        width:dimensions.widthLevel10/5,
        marginLeft:dimensions.paddingLevel9*2.8
    },
    img3:{
        width:dimensions.widthLevel10/12,
        height:dimensions.heightLevel2/2,
        marginLeft:dimensions.paddingLevel10*4.3
    },
    text1:{
        color:'#FFFFFF',
        fontFamily:fontFamilies.GillSansMTBold,
        marginTop:dimensions.heightLevel1/2
    },
    text2:{
        color:'#743010',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.GillSansMTBold
    },
})