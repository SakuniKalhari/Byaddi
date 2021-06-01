import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const user=require('../assets/img/Ellipse10.webp')
const back=require('../assets/img/Group18.webp')

const EditProfile = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('Offline')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Edit Profile </Text>
                </View>
                <Image source={user} style={styles.img} />
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel4,marginLeft:dimensions.paddingLevel4}}>
                    <TextInput placeholder="User Name" style={styles.input}/>
                    <Text style={styles.text3}>Harry Potter</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container}>
                    <TextInput placeholder="Phone Number" style={styles.input}/>
                    <Text style={styles.text}>+12 345 678 901</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container}>
                    <TextInput placeholder="Email Address" style={styles.input}/>
                    <Text style={styles.text2}>email@domain.com</Text>
                </View>
                <View style={styles.line}></View>
                <Text style={styles.text1}>Change Your Password</Text>
                <View style={styles.container}>
                    <TextInput placeholder="Old password" style={styles.input}/>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container}>
                    <TextInput placeholder="New password" style={styles.input}/>
                </View>
                <View style={styles.line}></View>
                <View style={styles.container}>
                    <TextInput placeholder="Confirm Password" style={styles.input}/>
                </View>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
export default EditProfile ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel7*2.2,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    img:{
        width:dimensions.widthLevel7/3.3,
        height:dimensions.heightLevel6,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2
    },
    input:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel3,
        color:'#989898',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMidMedium,
    },
    text:{
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel2,
        color:'#636363'
    },
    text1:{
        fontSize:fontSizes.fontLarge,
        fontFamily:fontFamilies.SFProTextRegular,
        color:'#636363',
        marginLeft:dimensions.paddingLevel4,
        marginTop:dimensions.heightLevel2
    },
    button:{
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel1*3,
        borderRadius:25,
        backgroundColor:'brown',
        alignSelf:'center',
        marginTop:dimensions.heightLevel4,
        justifyContent:'center'
    },
    buttonText:{
        color:colors.white,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular
    },
    line:{
        borderWidth:1,
        borderColor:'#E6E6E6',
        width:dimensions.widthLevel3,
        marginLeft:dimensions.paddingLevel4,
        top:dimensions.heightLevel1/3
    },
    container:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel4
    },
    text2:{
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        marginTop:dimensions.heightLevel1,
        color:'#636363'
    },
    text3:{
        fontSize:fontSizes.fontMidMedium,
        marginLeft:dimensions.paddingLevel7,
        fontFamily:fontFamilies.SFProTextRegular,
        marginTop:dimensions.heightLevel1,
        color:'#636363'
    },
})