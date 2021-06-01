import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const logo= require('../assets/img/Logo.webp');

const SignUp = (props) => (
            <View style={styles.backgroundContainer}>
                <Text style={styles.text}> Sign up </Text>
                <Image source={logo} style={styles.img}/>
                <View style={{marginTop:dimensions.heightLevel2}}>
                    <TextInput style= {styles.input} placeholder="Name"/>
                    <View style={styles.line}></View>
                    <TextInput style= {styles.input} placeholder="Email"/>
                    <View style={styles.line}></View>
                    <TextInput style= {styles.input} placeholder="Mobile number"/>
                    <View style={styles.line}></View>
                    <TextInput style= {styles.input} placeholder="Address"/>
                    <View style={styles.line}></View>
                    <TextInput style= {styles.input} placeholder="Password"/>
                    <View style={styles.line}></View>
                    <TextInput style= {styles.input} placeholder="Confirm password"/>
                    <View style={styles.line}></View>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.container1}>
                   <Text style={styles.text1}>already member?</Text>
                   <TouchableOpacity style={{marginLeft:dimensions.paddingLevel4}}>
                       <Text style={styles.btntext}>Sign in</Text>
                   </TouchableOpacity>
                </View>
            </View>
        )
export default SignUp ;

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
        marginTop:dimensions.heightLevel1/2
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
    container1:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel1,
    },
    text1:{
        fontSize:fontSizes.fontSmallPlus,
        marginLeft:dimensions.paddingLevel6,
        fontFamily:fontFamilies.SFProTextRegular,
        color:'#8A8A8A'
    },
    line:{
        borderWidth:1,
        borderColor:'#E6E6E6',
        width:dimensions.widthLevel3,
        marginLeft:dimensions.paddingLevel4,
    },
    btntext:{
        color:'#743010',
        fontSize:fontSizes.fontSmallPlus,
        fontWeight:'bold',
        fontFamily:fontFamilies.SFProTextRegular
    }
})
