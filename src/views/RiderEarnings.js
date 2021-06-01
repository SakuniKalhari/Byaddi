import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';
import Chart from '../component/Chart';

const back=require('../assets/img/Group18.webp')

const RiderEarnings = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('Offline')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Earnings </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Wallet Balance</Text>
                    <Text style={styles.text1}>$ 80</Text>
                </View>
                <Chart />
                <View style={styles.container2}>
                </View>
            </View>
        )
export default RiderEarnings ;

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
        marginTop:dimensions.heightLevel3,
        flexDirection:'row',
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
        right:10
    },
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel7*2,
        backgroundColor:'#FFFFFF',
        shadowColor:'#00000029',
        borderRadius:10,
        elevation:10,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2,
    }
})