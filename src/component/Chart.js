import React from 'react'
import { dimensions, fontSizes , colors, fontFamilies,imageSizes} from '../configurations/constants';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';

const arrow = require('../assets/img/ExpandArrow_96px-1.webp')
const arrow1 = require('../assets/img/ExpandArrow_96px.webp')

const Chart= (props) => (
        <View style={styles.container1}>
                <Text style={styles.text2}>Feb 1- 7</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <Image source={arrow} style={styles.img1}/>
                        <Text style={styles.text3}>$ 700</Text>
                        <Image source={arrow1} style={styles.img1}/>
                    </View>
                    <View style={styles.label}>
                        <Text style={{fontFamily:fontFamilies.LatoRegular,fontSize:fontSizes.fontSmall,color:'white',textAlign:'center'}}>Feb 3</Text>
                        <Text style={styles.text7}>$ 69</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',height:dimensions.heightLevel10}}>
                        <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel5,marginTop:dimensions.heightLevel7}}></View>
                        <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel9,marginTop:dimensions.heightLevel2}}></View>
                        <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel6,marginTop:dimensions.heightLevel6}}></View>
                        <View>
                            <View style={{color:'#707070',height:dimensions.heightLevel5,borderWidth:1,width:dimensions.widthLevel10/100,alignSelf:'center'}}></View>
                            <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel7}}></View>
                        </View>
                        <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel1,marginTop:dimensions.heightLevel4*2.6}}></View>
                        <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel8,marginTop:dimensions.heightLevel3}}></View>
                        <View style={{width:dimensions.widthLevel10/11,backgroundColor:'#743010',height:dimensions.heightLevel3,marginTop:dimensions.heightLevel8}}></View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <Text style={styles.text6}>S</Text>
                        <Text style={styles.text6}>M</Text>
                        <Text style={styles.text6}>T</Text>
                        <Text style={styles.text6}>W</Text>
                        <Text style={styles.text6}>T</Text>
                        <Text style={styles.text6}>F</Text>
                        <Text style={styles.text6}>S</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <Text style={{fontFamily:fontFamilies.LatoRegular,fontSize:fontSizes.fontMidMedium}}>Total orders</Text>
                        <Text style={{fontFamily:fontFamilies.LatoRegular,fontSize:fontSizes.fontMidMedium,marginLeft:dimensions.paddingLevel1/2}}>200</Text>
                    </View>
                </View>
    )

export default Chart;

const styles = StyleSheet.create({
    container1:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel10*2,
        backgroundColor:'#FFFFFF',
        shadowColor:'#00000029',
        borderRadius:10,
        elevation:10,
        alignSelf:'center',
        marginTop:dimensions.heightLevel2
    },
    text2:{
        color:'#202020',
        fontFamily:fontFamilies.LatoRegular,
        fontSize:fontSizes.fontMedium,
        textAlign:'center'
    },
    text3:{
        fontFamily:fontFamilies.LatoRegular,
        fontWeight:'bold',
        fontSize:fontSizes.fontXXLarge,
        textAlign:'center',
    },
    img1:{
        width:dimensions.widthLevel10/6,
        height:dimensions.heightLevel1,
        marginTop:dimensions.heightLevel1/2,
    },
    label:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel1*2,
        backgroundColor:'#743010',
        alignSelf:'center',
        borderRadius:10,
        marginTop:dimensions.heightLevel1/2,
    },
    line:{
        color:'#707070',
        borderWidth:1/4,
        marginTop:dimensions.heightLevel1,
        width:dimensions.widthLevel4,
        alignSelf:'center'
    },
    text7:{
        fontFamily:fontFamilies.LatoRegular,
        fontSize:fontSizes.fontSmall,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }
})

