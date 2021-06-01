import React from 'react'
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const whatsup = require('../assets/img/WhatsApp.webp')

const Rider = () => {
    return(

        <View>
            <ListItem title="Rider number 1" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
            <ListItem title="Rider number 2" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
            <ListItem title="Rider number 3" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
            <ListItem title="Rider number 4" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
            <ListItem title="Rider number 5" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
            <ListItem title="Rider number 6" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
            <ListItem title="Rider number 7" kilometers="Virginia | $2 per km | 4.5" iconName="whatsup"/>
        </View>
    )
}
const ListItem = ({title="" ,kilometers="",iconName=""}) => {

    return (
        <View style={{marginTop:dimensions.heightLevel1}}>
            <View style={styles.container2}>
                <View style={{width:dimensions.widthLevel8,left:25,alignSelf:'center'}}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.text1}>{kilometers}</Text>
                </View>
                <Image source={whatsup} style={styles.img}/>
            </View>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel5,
        backgroundColor:colors.white,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        shadowColor: "#00000029",
        elevation: 10,
        marginTop :dimensions.heightLevel1/2
    },
    text1:{
        fontSize:fontSizes.fontSmallPlus,
        color:'#918E8E',
        fontFamily:fontFamilies.GillSansMTBold,
        // backgroundColor:'red',
        // width:'50%'
    },
    line:{
        borderWidth:0.2,
        borderColor:'#E6E6E6',
        width:dimensions.widthLevel3,
        marginLeft:dimensions.paddingLevel4
    },
    img:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel4,
        // marginRight :dimensions.paddingLevel1,
        alignSelf:'center',
        left:dimensions.paddingLevel6
    },
    text:{
        fontWeight:'bold',
        fontSize:fontSizes.fontXLarge,
        fontFamily:fontFamilies.GillSansMTBold,
        // marginRight:dimensions.paddingLevel8*2
        // backgroundColor:'yellow'
    },

})

export default Rider;
