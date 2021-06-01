import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const star = require('../assets/img/Star.webp')
const user = require('../assets/img/Ellipse10.webp')

const FoodDetails  = (props) => {
    return(
        <View>
            <View style={{flexDirection:'row',marginTop:dimensions.heightLevel1,marginLeft:dimensions.paddingLevel3}}>
                <Text style={styles.text}>Egg Pasta</Text>
                <Text style={styles.text1}>$5.99</Text>
            </View>
            <Text style={styles.text2}>Spicy egg pasta</Text>
            <Text style={styles.text3}>Details</Text>
            <Text style={styles.text4}>Thai cuisine combines vegetable, fish, and other meat cooked with many kinds of spices such as
                garlic, chili, lemongrass, coconut milk, tamarind, ginger, coriander, basil, and peanuts.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text1:{
        fontSize:fontSizes.fontXXXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginLeft:dimensions.paddingLevel10*2,
        marginTop:dimensions.heightLevel1/2
    },
    text:{
        fontSize:fontSizes.fontXXXXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
    },
    text2:{
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginLeft:dimensions.paddingLevel3
    },
    text3:{
        fontSize:fontSizes.fontXXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginLeft:dimensions.paddingLevel3,
        marginTop:dimensions.heightLevel1/2
    },
    text4:{
        fontFamily:fontFamilies.GillSansMTBold,
        color:'#676565',
        fontSize:fontSizes.fontMedium,
        marginLeft:dimensions.paddingLevel3
    },
})

export default FoodDetails;