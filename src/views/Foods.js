import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FoodSelect from '../component/FoodSelect';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';

const search=require('../assets/img/Search.webp');

const Foods = (props) => (
            <View style={styles.backgroundContainer}>
                <Text style={styles.head}> Byaddi </Text>
                <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate('FoodSearch')}>
                    <Image source={search} style={styles.img}/>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('FoodSearch')}>
                        <Text style={styles.placehold}>Search</Text> 
                    </TouchableOpacity>
                </TouchableOpacity>
                <FoodSelect/>
            </View>
        )
export default Foods ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel2,
        color:'#636363',
        textAlign:'center',
        fontFamily:fontFamilies.SFProTextRegular,
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
        fontFamily:fontFamilies.GillSansMTBold,
        // backgroundColor:'red',
        marginTop:dimensions.heightLevel1/2
    },
})