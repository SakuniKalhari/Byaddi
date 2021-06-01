import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const notification = require('../assets/img/Notification_96px.webp');
const menu = require('../assets/img/Group.webp');
const ellipse = require('../assets/img/Ellipse.webp');
const search=require('../assets/img/Search.webp');
const menu1 = require('../assets/img/Group9.webp')
const user = require('../assets/img/Ellipse10.webp')
const star = require('../assets/img/Group189.webp')
const whatsup = require('../assets/img/WhatsApp.webp')
const food1 = require('../assets/img/1.webp')
const food2 =require('../assets/img/2.webp')
const food3 =require('../assets/img/3.webp')
const food4 =require('../assets/img/4.webp')
const food5 = require('../assets/img/5.webp')
const food6 = require('../assets/img/6.webp')

const HomeScreen = (props) => (
            <View style={styles.backgroundContainer}>
                <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2,}}>
                    <TouchableOpacity style={{marginLeft:dimensions.paddingLevel5}} onPress={()=>props.navigation.openDrawer()}>
                        <Image source={menu} style={{width:dimensions.widthLevel10/8,height:dimensions.heightLevel1*1.4}}/>
                    </TouchableOpacity>
                    <Text style={styles.head}>Byaddi</Text>
                    <View style={{flexDirection:'column',marginLeft:dimensions.paddingLevel8*2}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
                            <Image source={ellipse} style={styles.img3}/>
                        </TouchableOpacity>
                        <Image source={notification} style={styles.img2}/>
                    </View>
                </View>
                <View style={styles.container1}>
                    <Image source={search} style={styles.img1}/>
                    <TextInput placeholder="Search" style={styles.placehold}/>
                    <Image source={menu1} style={styles.imgmenu}/>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.container3} onPress={()=>props.navigation.navigate('SellerDetails')}>
                        <View style={styles.container4}>
                            <Image source={user} style={styles.img4}/>
                            <Text style={styles.text}>Seller 1</Text>
                            <Image source={star} style={styles.img5}/>
                        </View>
                        <Image source={food1} style={styles.image}/>
                        <Text style={styles.text1}>Food Number 1</Text>
                        <Text style={styles.text2}>$5.99</Text>
                        <Image source={whatsup} style={styles.img}/>
                    </TouchableOpacity>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <Image source={user} style={styles.img4}/>
                            <Text style={styles.text}>Seller 2</Text>
                            <Image source={star} style={styles.img5}/>
                        </View>
                        <Image source={food2} style={styles.image}/>
                        <Text style={styles.text1}>Food Number 1</Text>
                        <Text style={styles.text2}>$5.99</Text>
                        <Image source={whatsup} style={styles.img}/>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <Image source={user} style={styles.img4}/>
                            <Text style={styles.text}>Seller 3</Text>
                            <Image source={star} style={styles.img5}/>
                        </View>
                        <Image source={food3} style={styles.image}/>
                        <Text style={styles.text1}>Food Number 1</Text>
                        <Text style={styles.text2}>$5.99</Text>
                        <Image source={whatsup} style={styles.img}/>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <Image source={user} style={styles.img4}/>
                            <Text style={styles.text}>Seller 4</Text>
                            <Image source={star} style={styles.img5}/>
                        </View>
                        <Image source={food4} style={styles.image}/>
                        <Text style={styles.text1}>Food Number 1</Text>
                        <Text style={styles.text2}>$5.99</Text>
                        <Image source={whatsup} style={styles.img}/>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <Image source={user} style={styles.img4}/>
                            <Text style={styles.text}>Seller 5</Text>
                            <Image source={star} style={styles.img5}/>
                        </View>
                        <Image source={food5} style={styles.image}/>
                        <Text style={styles.text1}>Food Number 1</Text>
                        <Text style={styles.text2}>$5.99</Text>
                        <Image source={whatsup} style={styles.img}/>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.container4}>
                            <Image source={user} style={styles.img4}/>
                            <Text style={styles.text}>Seller 6</Text>
                            <Image source={star} style={styles.img5}/>
                        </View>
                        <Image source={food6} style={styles.image}/>
                        <Text style={styles.text1}>Food Number 1</Text>
                        <Text style={styles.text2}>$5.99</Text>
                        <Image source={whatsup} style={styles.img}/>
                    </View>
                </View>
            </View>
        )
export default HomeScreen ;

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    head:{
        color:'#636363',
        fontSize:fontSizes.fontLarge,
        marginLeft:dimensions.paddingLevel8*2,
        fontFamily:fontFamilies.SFProTextRegular,
        fontWeight:'bold'
    },
    img2:{
        width:dimensions.widthLevel10/8,
        height:dimensions.heightLevel1*1.4,
        bottom:dimensions.heightLevel1/2
    },
    img3:{
        width:dimensions.widthLevel10/20,
        height:dimensions.heightLevel1/1.5,
        marginLeft:dimensions.paddingLevel1*1.8,
    },
    container1:{
        width:dimensions.widthLevel6,
        height:dimensions.heightLevel3,
        backgroundColor :colors.white,
        // alignSelf:'center',
        marginTop:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel5,
        borderRadius:10,
        flexDirection:'row',
    },
    img1:{
        width:dimensions.widthLevel10/9,
        height:dimensions.widthLevel10/9,
        marginTop:dimensions.heightLevel1/2,
        marginLeft:dimensions.paddingLevel1,
    },
    placehold:{
        marginLeft:dimensions.paddingLevel2,
        color:'#636363',
        fontSize:fontSizes.fontMediumPlus,
        fontFamily:fontFamilies.GillSansMTBold,
        width:dimensions.widthLevel8
    },
    imgmenu:{
        width:dimensions.widthLevel10/4.5,
        height:dimensions.heightLevel3,
        marginLeft:dimensions.paddingLevel3
    },
    container2:{
        // borderWidth:2,
        marginTop:dimensions.heightLevel2,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    container3:{
        width:dimensions.widthLevel4/2,
        height:dimensions.heightLevel7*2.1,
        // borderWidth:2,
        borderRadius:15,
        backgroundColor :'#FFFFFF',
        shadowColor:'#00000029',
        elevation:15,
    },
    img4:{
        width:dimensions.widthLevel10/9,
        height:dimensions.heightLevel2,
    },
    img5:{
        width:dimensions.widthLevel10/6,
        height:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel2,
    },
    text:{
        fontSize:fontSizes.fontLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        marginLeft:dimensions.paddingLevel2,
    },
    image:{
        width:dimensions.widthLevel10/3,
        height:dimensions.heightLevel5,
        alignSelf:'center',
        marginTop:dimensions.heightLevel1/2
    },
    text1:{
        textAlign:'center',
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontMediumPlus,
        marginTop:dimensions.heightLevel1
    },
    text2:{
        textAlign:'center',
        fontFamily:fontFamilies.GillSansMTBold,
        fontSize:fontSizes.fontXXLarge
    },
    img:{
        width:dimensions.widthLevel10/6,
        height:dimensions.widthLevel10/7,
        marginLeft:dimensions.paddingLevel8*2
    },
    container4:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel1/2,
        marginLeft:dimensions.paddingLevel2
    },
});
