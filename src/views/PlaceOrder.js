import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PlaceFood from '../component/PlaceFood';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const user=require('../assets/img/2.webp')
const back=require('../assets/img/Group18.webp')

const PlaceOrder = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} 
                        onPress={()=>props.navigation.navigate('BenMalcolm')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Place Order </Text>
                </View>
                <PlaceFood/>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2,justifyContent:'space-evenly'}}>
                    <View style={styles.container}>
                        <View style={{width:dimensions.widthLevel10/2}}>
                            <Text style={{fontSize:fontSizes.fontXXXLarge,color:'#757575',fontFamily:fontFamilies.SFProTextRegular}}>Total</Text>
                            <Text style={styles.text1}>QTY</Text>
                            <Text style={styles.text1}>Delivery fee</Text>
                        </View>
                        <View style={{width:dimensions.widthLevel10/2,alignItems :'flex-end'}}>
                            <Text style={{fontSize:fontSizes.fontXXXLarge,color:'#757575',fontFamily:fontFamilies.SFProTextRegular}}>$11.98</Text>
                            <Text style={styles.text1}>2</Text>
                            <Text style={styles.text1}>$0.00</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.container1} onPress={()=>props.navigation.navigate('SelectRider')}>
                        <Text style={styles.btntext}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
export default PlaceOrder ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel8*2,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
    },
    container:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel6,
        backgroundColor:colors.white,
        // alignSelf:'center',
        borderRadius:10,
        shadowColor: "#00000029",
        flexDirection:'row',
        elevation: 10,
    },
    container1:{
        width:dimensions.widthLevel10/2,
        height:dimensions.heightLevel6,
        backgroundColor:colors.white,
        borderRadius:10,
        shadowColor: "#00000029",
        elevation: 10,
    },
    text1:{
        fontSize:fontSizes.fontMedium,
        color:'#757575',
        fontFamily:fontFamilies.GillSansMTBold
    },
    btntext:{
        color:'#4CAF50',
        fontSize:fontSizes.fontXXXLarge,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:fontFamilies.SFProTextRegular
    },
});