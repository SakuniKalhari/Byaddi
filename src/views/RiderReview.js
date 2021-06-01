import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';
import Modal from 'react-native-modal';

const star = require('../assets/img/starblack.webp')
const cancle = require('../assets/img/Close.webp')

const RiderReview = (props) => (
            <View>
                <Modal isVisible={true}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.btnimg} onPress={()=>props.navigation.navigate('Riders')}>
                            <Image source={cancle} style={{width:dimensions.widthLevel8/2,height:dimensions.heightLevel2}}/>
                        </TouchableOpacity>
                        <View style={styles.container}>
                            <Text style={styles.head}>John Hamilton</Text>
                            <View style={styles.container2}>
                                <Image source={star} style={styles.image}/>
                                <Image source={star} style={styles.image}/>
                                <Image source={star} style={styles.image}/>
                                <Image source={star} style={styles.image}/>
                                <Image source={star} style={styles.image}/>
                            </View>
                            <View style={styles.container1}>
                                <TextInput placeholder="Write Something"/>
                            </View>
                            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('Riders')}>
                                <Text style={styles.btntext}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
export default RiderReview ;

const styles = StyleSheet.create({
    container:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel10*2,
        backgroundColor:colors.white,
        alignSelf:'center',
        borderRadius:15,
        marginTop:dimensions.heightLevel6*2,
        shadowColor:'#00000014',
        elevation:10
    },
    head:{
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontXXLarge,
        textAlign:'center'
    },
    image:{
        width:dimensions.widthLevel10/6,
        height:dimensions.heightLevel1*2
    },
    btn:{
        borderRadius:25,
        width:dimensions.widthLevel5/2,
        height:dimensions.heightLevel3,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#743010',
        elevation:10,
        marginTop:dimensions.heightLevel2
    },
    btntext:{
        textAlign:'center',
        color:colors.white,
        fontSize:fontSizes.fontMediumPlus,
        fontFamily:fontFamilies.SFProTextRegular
    },
    btnimg:{
        width:dimensions.widthLevel10/2,
        marginLeft:dimensions.paddingLevel1,
        marginTop:dimensions.heightLevel2,
    },
    container1:{
        marginTop:dimensions.heightLevel1,
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6*2,
        borderColor:'#F2F2F2',
        borderWidth:1
    },
    container2:{
        marginLeft:dimensions.paddingLevel1,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:dimensions.heightLevel1/2
    },
})