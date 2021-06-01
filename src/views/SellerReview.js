import React, { useState,Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';
import Modal from 'react-native-modal';

const user = require('../assets/img/Ellipse10.webp')
const star = require('../assets/img/starblack.webp')
const cancle = require('../assets/img/Close.webp')

const SellerReview = (props) => (
            <View>
                <Modal isVisible={true}>               
                    <View style={{flex:1}}>
                        <View style={styles.container}>
                        <TouchableOpacity style={styles.btnimg} onPress={()=>props.navigation.navigate('Sellers')}>
                            <Image source={cancle} style={{width:dimensions.widthLevel8/2,height:dimensions.heightLevel2}}/>
                        </TouchableOpacity>
                            <View style={{flexDirection:'row',width:'100%'}}>
                                <Image source={user} style={styles.img}/>
                                <View style={{width:'80%'}}>
                                    <Text style={styles.head}>John Hamilton</Text>
                                    <View style={{flexDirection:'row',marginTop:dimensions.heightLevel1/2,left:10}}>
                                        <Image source={star} style={styles.image}/>
                                        <Image source={star} style={styles.image}/>
                                        <Image source={star} style={styles.image}/>
                                        <Image source={star} style={styles.image}/>
                                        <Image source={star} style={styles.image}/>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.text}>
                                <TextInput placeholder="Write Something"/>
                            </View>
                            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('Sellers')}>
                                <Text style={styles.btntext}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
export default SellerReview ;

const styles = StyleSheet.create({
    container:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel10*2,
        backgroundColor:colors.white,
        alignSelf:'center',
        borderRadius:15,
        marginTop:dimensions.heightLevel7*2,
        shadowColor:'#00000014',
        elevation:10,
        justifyContent:'center',
    },
    head:{
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontXXLarge,
        left:10
    },
    image:{
        width:dimensions.widthLevel10/6,
        height:dimensions.heightLevel1*2,
    },
    btn:{
        borderRadius:25,
        width:dimensions.widthLevel5/2,
        height:dimensions.heightLevel3,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#743010',
        elevation:10,
        marginTop:dimensions.heightLevel1/3,
    },
    btntext:{
        textAlign:'center',
        color:colors.white,
        fontSize:fontSizes.fontMediumPlus,
        fontFamily:fontFamilies.SFProTextRegular,
    },
    btnimg:{
        width:dimensions.widthLevel10/2,
        // backgroundColor:'red',
        alignSelf:'flex-end',
        top:7,
        left:18
    },
    img:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel4,
        marginLeft:dimensions.paddingLevel1,
        marginTop:dimensions.heightLevel1/2,
    },
    text:{
        marginTop:dimensions.heightLevel1,
        width:dimensions.widthLevel5,
        height:dimensions.heightLevel6*2,
        borderColor:'#F2F2F2',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:5
    },
})