import React from 'react'
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const earn = require('../assets/img/MoneyBagPokem.webp');
const orders = require('../assets/img/TaskCompleted.webp');
const Ongoing = require('../assets/img/Online.webp');

const RiderOnline = (navigation) => {
    return(
        <View>
            <ListItem iconName="Ongoing" title="Ongoing orders" navigation={()=>navigation.navigate('OrderDetails')}/>
            <ListItem iconName="orders" title="Completed orders" navigation={()=>navigation.navigate('Orders')}/>
            <ListItem iconName="earn" title="Earnings" navigation={()=>navigation.navigate('RiderEarnings')}/>
        </View>
    )
}

const ListItem = ({iconName="",title="", navigation}) => {
    let icon;
  switch (iconName) {
    case "Ongoing":
      icon = Ongoing
      break;

    case "orders":
      icon = orders
      break;
      
    case "earn":
      icon = earn
      break;
  
    default:
      break;
  }

    return(
        <TouchableOpacity style={styles.container2} >
            <Image source={icon} style={styles.img1} onPress={navigation}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container2:{
        width:dimensions.widthLevel3,
        height:dimensions.heightLevel6,
        backgroundColor:colors.white,
        marginTop:dimensions.heightLevel3,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'flex-start',
        shadowColor: "#00000029",
        elevation: 10,
    },
    img1:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel10/3,
        marginLeft :dimensions.paddingLevel3,
        alignSelf:'center'
    },
    text:{
        alignSelf :'center',
        fontSize:fontSizes.fontXLarge,
        marginLeft :dimensions.paddingLevel3,
        fontFamily:fontFamilies.GillSansMTBold,
    },
})

export default RiderOnline;