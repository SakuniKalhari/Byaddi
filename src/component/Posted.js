import React from 'react'
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const reset= require('../assets/img/Reset.webp')
const user=require('../assets/img/2.webp')

const Posted = () => {
    return(
        <View>
            <ListItem title="Food number 1" price="$5.99" days="4 days old" iconName="reset"/>
            <ListItem title="Food number 2" price="$5.99" days="4 days old" iconName="reset"/>
            <ListItem title="Food number 3" price="$5.99" days="4 days old" iconName="reset"/>
            <ListItem title="Food number 4" price="$5.99" days="4 days old" iconName="reset"/>
            <ListItem title="Food number 5" price="$5.99" days="4 days old" iconName="reset"/>
            <ListItem title="Food number 6" price="$5.99" days="4 days old" iconName="reset"/>
        </View>
    )
}

const ListItem = ({title="" ,price="", days="",iconName=""}) => {
    return(
        <View style={styles.container2}>
            <Image source={user} style={styles.img1}/>
            <View style={{alignSelf:'center',marginLeft:dimensions.paddingLevel2,width:'60%'}}>
                <Text style={styles.text}>{title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text2}>{price}</Text>
                    <Text style={styles.text1}>{days}</Text>
                </View>
            </View>
            <Image source={reset} style={styles.img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6,
        backgroundColor:colors.white,
        marginTop:dimensions.heightLevel2,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        shadowColor: "#00000029",
        elevation: 10,
            },
    img1:{
        width:dimensions.widthLevel10/3.8,
        height:dimensions.heightLevel10/3,
        marginLeft :dimensions.paddingLevel2,
        alignSelf:'center'
    },
    text:{
        alignSelf :'center',
        fontSize:fontSizes.fontXLarge,
        marginRight:dimensions.paddingLevel4,
        fontFamily:fontFamilies.GillSansMTBold,
    },
    text1:{
        fontSize:fontSizes.fontMidMedium,
        color:'#918E8E',
        fontFamily:fontFamilies.GillSansMTBold,
        width:'60%'
    },
    text2:{
        fontSize:fontSizes.fontMidMedium,
        color:'#918E8E',
        fontFamily:fontFamilies.GillSansMTBold,
        width:'40%',
        left:15
    },
    img:{
        width:dimensions.widthLevel10/8,
        height:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel3,
        alignSelf:'center'
    },
})

export default Posted;