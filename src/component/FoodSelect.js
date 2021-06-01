import React from 'react'
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity,TextInput} from 'react-native';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const Spicy = require('../assets/img/2.webp');
const sweat =require('../assets/img/1.webp');
const italiyan =require('../assets/img/5.webp');
const indian =require('../assets/img/3.webp');
const thai =require('../assets/img/6.webp');

 const FoodSelect = ({navigation}) => {

    return(
        <View>
            <ListItem title="Hot & Spicy Foods" iconName="Spicy" navigation={navigation} />
            <ListItem title="Sweats" iconName="sweat" navigation={navigation} />
            <ListItem title="Italian Pizzas" iconName="italiyan" navigation={navigation} />
            <ListItem title="Indian Food" iconName="indian" navigation={navigation} />
            <ListItem title="Thai Food" iconName="thai" navigation={navigation} />
        </View>
    )
}

const ListItem = ({title="" ,iconName="", navigation }) => {

  // console.log(navigation)

    let icon;
    switch (iconName) {
      case "Spicy":
        icon = Spicy
        break;
  
      case "sweat":
        icon = sweat
        break;
        
      case "italiyan":
        icon = italiyan
        break;

      case "indian":
        icon = indian
        break;

      case "thai":
        icon = thai
        break;
    
      default:
        break;
    }

    return (
      <View>
        <TouchableOpacity style={styles.container2} 
        onPress={
          () => navigation.navigate('HomeScreen')
          }>
            <Text style={styles.text1}>{title}</Text>
            <Image source={icon} style={styles.img1}/>
        </TouchableOpacity> 
      </View>
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
        justifyContent:'flex-end',
        shadowColor: "#000",
        elevation: 10,
    },
    img1:{
        width:dimensions.widthLevel10/4,
        height:dimensions.heightLevel10/3,
        marginRight:dimensions.paddingLevel3,
        alignSelf:'center'
    },
    text1:{
        alignSelf :'center',
        fontSize:fontSizes.fontXLarge,
        marginRight:dimensions.paddingLevel3,
        fontFamily:fontFamilies.GillSansMTBold,
    }

})

export default FoodSelect