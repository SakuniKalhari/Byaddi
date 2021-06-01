import React from 'react'
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const user=require('../assets/img/Ellipse10.webp')

const CustomerDetails = (navigation) => {
    return(
        <View>
            <ListItem iconName="user" title="Eric Widget" foodname="Egg pasta" day="1 April 2021 | 10.20" 
                navigation={()=>navigation.navigate('VisitorDetails')}/>
            <ListItem iconName="user" title="Niles Peppertrout" foodname="Egg pasta" day="1 April 2021 | 10.20"/>
            <ListItem iconName="user" title="Max Conversion" foodname="Egg pasta" day="1 April 2021 | 10.20"/>
            <ListItem iconName="user" title="Bailey Wonger" foodname="Egg pasta" day="1 April 2021 | 10.20"/>
            <ListItem iconName="user" title="Bailey Wonger" foodname="Egg pasta" day="1 April 2021 | 10.20"/>
            <ListItem iconName="user" title="Bailey Wonger" foodname="Egg pasta" day="1 April 2021 | 10.20"/>
            <ListItem iconName="user" title="Bailey Wonger" foodname="Egg pasta" day="1 April 2021 | 10.20"/>
        </View>
    )
}

const ListItem = ({iconName="",title="" ,foodname="", day="",navigation}) => {
    let icon;
    switch (iconName) {
      case "user":
        icon = user
        break;

        default:
            break;
    }

    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={navigation}>
                <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
                    <Image source={icon} style={styles.img}/>
                </TouchableOpacity>
                <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
                    <Text style={styles.text}>{title}</Text>
                    <View style={{marginTop:dimensions.heightLevel1/2}}>
                        <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>{foodname}</Text>
                        <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>{day}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width:dimensions.widthLevel9/4,
        height:dimensions.heightLevel4,
    },
    text:{
        fontWeight:'bold',
        fontSize:fontSizes.fontMidMedium,
        fontFamily:fontFamilies.Humanst521BT,
    },
    btn:{
        flexDirection:'row',
        marginTop:dimensions.heightLevel2,
        marginLeft:dimensions.paddingLevel1,
    },
    line:{
        borderWidth:1,
        borderColor:'#F0F0F0',
        width:dimensions.widthLevel3,
        marginLeft:dimensions.paddingLevel4,
        top:dimensions.heightLevel1/2
    },
})

export default CustomerDetails;