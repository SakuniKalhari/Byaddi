import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CustomerDetails from '../component/CustomerDetails';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')

const Orders = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Orders </Text>
                </View>
                <CustomerDetails/>
            </View>
        )
export default Orders ;

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
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel4,
    },
    text:{
        fontWeight:'bold',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.Humanst521BT,
    }
});