import React, { Component,useEffect } from 'react'
import { Text, View, StyleSheet, Image, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';
import SplashScreen from 'react-native-splash-screen';


const logo= require('../assets/img/Logo.webp');

const SignIn = (props) => {

    // useEffect(() => {
    //     SplashScreen.hide();
    //   }, [])

      return (
            <View style={styles.backgroundContainer}>
                <Text style={styles.text}> Sign in </Text>
                <Image source={logo} style={styles.img}/>
                <View style={{marginTop:dimensions.heightLevel7}}>
                    <TextInput style= {styles.input} placeholder="Mobile number"/>
                    <View style={styles.line}></View>
                    <TextInput style= {styles.input} placeholder="Password"/>
                    <View style={styles.line}></View>
                </View>
                <TouchableOpacity style={{marginLeft:dimensions.paddingLevel10*3.3,marginTop:dimensions.heightLevel2}}>
                    <Text style={{color:'#743010',fontSize:fontSizes.fontSmallPlus,fontFamily:fontFamilies.SFProTextRegular}}>
                    Forgot Password?</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2,marginLeft:dimensions.paddingLevel5}}>
                    <CheckBox style={{color:'#743010',borderColor:'#E6E6E6'}}/>
                    <Text style={styles.text2}>Remember Me</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Foods')}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.container1}>
                   <Text style={styles.text1}>Don't have a account?</Text>
                   <TouchableOpacity style={{marginLeft:dimensions.paddingLevel2}}>
                       <Text style={styles.btntext}>Sign up</Text>
                   </TouchableOpacity>
                </View>
            </View>)
        }
export default SignIn ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    text:{
        alignSelf:'center',
        marginTop:dimensions.heightLevel2,
        fontWeight:'bold',
        fontSize:fontSizes.fontLarge,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
    },
    img:{
        width:dimensions.widthLevel10/2,
        height:dimensions.heightLevel10,
        alignSelf:'center',
        marginTop:dimensions.heightLevel3
    },
    input: {
        borderRadius:10,
        height:dimensions.heightLevel3,
        width:dimensions.widthLevel3,
        marginLeft:dimensions.paddingLevel4,
        marginTop:dimensions.heightLevel2,
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        color:'#989898'
    },
    button:{
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel1*3,
        borderRadius:25,
        backgroundColor:'#743010',
        alignSelf:'center',
        marginTop:dimensions.heightLevel2,
        justifyContent:'center',
    },
    buttonText:{
        color:colors.white,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
    },
    container1:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel1,
    },
    text1:{
        fontSize:fontSizes.fontSmallPlus,
        marginLeft:dimensions.paddingLevel4,
        fontFamily:fontFamilies.SFProTextRegular,
        color:'#8A8A8A',
    },
    btntext:{
        color:'#743010',
        fontSize:fontSizes.fontSmallPlus,
        fontWeight:'bold',
        fontFamily:fontFamilies.SFProTextRegular
    },
    line:{
        borderWidth:1,
        borderColor:'#E6E6E6',
        width:dimensions.widthLevel3,
        marginLeft:dimensions.paddingLevel4,
    },
    text2:{
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        top:dimensions.heightLevel1/3,
        color:'#989898'
    },
})
