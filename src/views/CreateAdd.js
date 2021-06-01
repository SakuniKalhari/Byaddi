import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Group18.webp')
const down= require('../assets/img/Down.webp')
const upload = require('../assets/img/AddImage_96px.webp')

const CreateAdd = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <TouchableOpacity style={styles.btn2} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                        <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}> Create Add </Text>
                </View>
                <View style={{marginLeft:dimensions.paddingLevel3,marginTop:dimensions.heightLevel2}}>
                    <Text style={styles.text}>Ad details</Text>
                    <TextInput style={styles.input} placeholder="Ad title"/>
                    <View style={{borderWidth:1,borderColor:'#E6E6E6',width:dimensions.widthLevel3,}}></View>
                    <View style={styles.input1}>
                       <TextInput placeholder="Section"/>
                       <View style={styles.container}>
                           <Image source={down} style={styles.image}/>
                           <Text style={{left:dimensions.paddingLevel3}}>Section</Text>
                       </View>
                    </View>
                    <View style={{borderWidth:1,borderColor:'#E6E6E6',width:dimensions.widthLevel3}}></View>
                    <View style={styles.input1}>
                       <TextInput placeholder="City       "/>
                       <View style={styles.container}>
                           <Image source={down} style={styles.image}/>
                           <Text style={{left:dimensions.paddingLevel3}}>City</Text>
                       </View>
                    </View>
                    <View style={{borderWidth:1,borderColor:'#E6E6E6',width:dimensions.widthLevel3}}></View>
                    <TextInput style={styles.input} placeholder="Description"/>
                    <View style={{borderWidth:1,borderColor:'#E6E6E6',width:dimensions.widthLevel3}}></View>
                    <View style={styles.input1}>
                       <TextInput placeholder="Price"/>
                        <Text style={styles.text1}>0.00$</Text>
                    </View>
                    <View style={{borderWidth:1,borderColor:'#E6E6E6',width:dimensions.widthLevel3}}></View>
                    <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                        <View>
                            <Text style={styles.text2}>Ad image</Text>
                            <Text style={styles.text2}>(max 5 images)</Text>
                        </View>
                        <Image source={upload} style={styles.image1}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                    <Text style={styles.btntext}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                    <Text style={styles.btntext1}>Cancel</Text>
                </TouchableOpacity>
            </View>
)

export default CreateAdd; 

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel7*2.4,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular
    },
    btn2:{
        marginTop:dimensions.heightLevel1*1.2,
        marginLeft:dimensions.paddingLevel3
    },
    img:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel7*2,
    },
    text:{
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMidMedium,
        color:'#636363',
        fontWeight:'bold',
        marginTop:dimensions.heightLevel2,
    },
    input:{
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel3,
        color:'#989898',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMidMedium,
        marginTop:dimensions.heightLevel1,
    },
    input1:{
        width:dimensions.widthLevel9,
        height:dimensions.heightLevel3,
        color:'#989898',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMidMedium,
        marginTop:dimensions.heightLevel1,
        flexDirection:'row',
    },
    container:{
        flexDirection:'row',
        borderWidth:0.1,
        marginLeft:dimensions.paddingLevel10*3,
        height:dimensions.heightLevel2,
        width:dimensions.widthLevel10/2,
        top:dimensions.heightLevel1/2,
        borderRadius:2,
        position:'absolute'
    },
    image:{
        width:dimensions.widthLevel10/15,
        height:dimensions.heightLevel1/1.5,
        marginTop:dimensions.heightLevel1/3,
        left:dimensions.paddingLevel1
    },
    text1:{
        color:'#989898',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontXXXXLarge,
        marginLeft:dimensions.paddingLevel10*3,
        width:dimensions.widthLevel10/2,
        position:'absolute'
    },
    text2:{
        color:'#989898',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontMidMedium,
    },
    image1:{
        width:dimensions.widthLevel10/5,
        height:dimensions.heightLevel3,
        marginLeft:dimensions.paddingLevel9*3
    },
    btn:{
        borderRadius:25,
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel2*2,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#743010',
        elevation:10,
        marginTop:dimensions.heightLevel8
    },
    btntext:{
        textAlign:'center',
        color:colors.white,
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        fontWeight:'bold'
    },
    btn1:{
        borderRadius:25,
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel2*2,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.white,
        elevation:10,
        marginTop:dimensions.heightLevel1
    },
    btntext1:{
        textAlign:'center',
        color:'#743010',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
        fontWeight:'bold'
    },
})