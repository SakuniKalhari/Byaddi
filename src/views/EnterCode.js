import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const back=require('../assets/img/Back.webp')

const EnterCode = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
                    <Image source={back} style={styles.img1}/>
                    <Text style={styles.head}> Enter Code </Text>
                </View>
                <View style={{marginTop:dimensions.heightLevel5,alignSelf:'center'}}>
                    <Text style={styles.text}>Enter the four-digit code we sent you</Text>
                    <Text style={styles.text1}>+61 123 456 78 90</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:dimensions.heightLevel8}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#cfcaca'}} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center'}}></Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: '#cfcaca'}} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center'}}></Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: '#cfcaca'}} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center'}}></Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: '#cfcaca'}} />
                    </View>
                    
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
export default EnterCode ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        fontSize:fontSizes.fontLarge,
        fontWeight:'bold',
        marginTop:dimensions.heightLevel1,
        marginLeft:dimensions.paddingLevel7*2.3,
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
    },
    img:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel5,
        marginLeft:dimensions.paddingLevel2,
    },
    button:{
        width:dimensions.widthLevel2,
        height:dimensions.heightLevel1*3,
        borderRadius:25,
        backgroundColor:'#743010',
        alignSelf:'center',
        marginTop:dimensions.heightLevel7*4,
        justifyContent:'center',
        shadowColor:'#00000029',
        elevation:10
    },
    buttonText:{
        color:colors.white,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.SFProTextRegular,
    },
    img1:{
        width:dimensions.widthLevel10/7,
        height:dimensions.heightLevel1,
        marginTop:dimensions.heightLevel1*1.2,
        marginLeft:dimensions.paddingLevel2
    },
    text:{
        color:'#636363',
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.SFProTextRegular,
    },
    text1:{
        color:'#333333',
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.SFProTextRegular,
    },
});