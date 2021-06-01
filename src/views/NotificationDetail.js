import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';
import Modal from 'react-native-modal';

const food = require('../assets/img/6.webp')
const cansel = require('../assets/img/Close.webp')

const NotificationDetail = (props) => (
            <View>
                <Modal isVisible={true}>
                    <View style={{flex:1}}>
                        <View style={styles.container}>
                            <View style={styles.container1}>
                                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel1}}>
                                    <Text style={styles.text}>Egg Pasta</Text>
                                    <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
                                        <Image source={cansel} style={styles.image}/>
                                    </TouchableOpacity>
                                </View>
                                <Image source={food} style={styles.img1}/>
                                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel3,width:'100%'}}>
                                    <View style={{width:'50%',left:25}}>
                                        <Text style={styles.text5}>Date order placed</Text>
                                        <Text style={styles.text5}>Time order placed</Text>
                                        <Text style={styles.text5}>Delivery cost</Text>
                                    </View>
                                    <View style={{alignItems:'flex-end',width:'50%',right:25}}>
                                        <Text style={styles.text5}>2 April 2021</Text>
                                        <Text style={styles.text5}>14:10</Text>
                                        <Text style={styles.text5}>$2.80</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel1/2,width:'100%'}}>
                                    <View style={{width:'45%',left:25}}>
                                        <Text style={styles.text6}>Buyer details</Text>
                                        <Text style={styles.text5}>Eric Widget,</Text>
                                        <Text style={styles.text5}>Address 1,</Text>
                                        <Text style={styles.text5}>Address 2,</Text>
                                        <Text style={styles.text5}>+1234567890</Text>
                                    </View>
                                    <View style={{alignItems:'flex-end',width:'55%',right:25}}>
                                        <Text style={styles.text6}>Rider details</Text>
                                        <Text style={styles.text5}>Harry Potter,</Text>
                                        <Text style={styles.text5}>Address 1, </Text>
                                        <Text style={styles.text5}>Address 2,</Text>
                                        <Text style={styles.text5}>+1234567890</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
export default NotificationDetail ;

const styles = StyleSheet.create({
    img:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel7*2,
    },
    container:{
        width:dimensions.fullWidth,
        height:dimensions.fullHeight,
        alignSelf:'center',
        marginTop:dimensions.heightLevel5
    },
    container1:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel10*2,
        backgroundColor:colors.white,
        alignSelf:'center',
        borderRadius:15,
        marginTop:dimensions.heightLevel6*2,
        shadowColor:'#00000014',
        elevation:10
    },
    text:{
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontXLarge,
        marginLeft :dimensions.paddingLevel8*2,
    },
    image:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel3
    },
    img1:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel4,
        alignSelf:'center',
    },
    text5:{
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontSmallPlus
    },
    text6:{
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontSmallPlus,
        fontWeight:'bold'
    }
})
