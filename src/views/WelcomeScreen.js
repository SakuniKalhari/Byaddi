import React from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

const logo= require('../assets/img/Logo.webp');

const WelcomeScreen = (props) => (


            <View style={styles.backgroundContainer}>
                <Image source={logo} style={styles.img}/>
                <View style={styles.container}>
                  <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('SignUp')}>
                    <Text style={styles.text}>as Visitor</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('BenMalcolm')}>
                    <Text style={styles.text}>as Seller</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Offline')}>
                    <Text style={styles.text}>as Rider</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )

const styles = StyleSheet.create({
    backgroundContainer: {
      width: dimensions.fullWidth,
      height: dimensions.fullHeight,
    },
    img:{
        width:dimensions.widthLevel10,
        height:dimensions.heightLevel5*4,
        marginTop:dimensions.heightLevel10,
        alignSelf:'center',
    },
    container: {
        flexDirection:'column',
        marginTop:dimensions.heightLevel2,
        alignSelf:'center',
    },
    button:{
        width:dimensions.widthLevel1/2,
        height:dimensions.heightLevel6,
        borderWidth:1,
        borderColor:'#707070',
        marginTop:dimensions.heightLevel2,
    },
    text:{
        textAlign:'center',
        top:dimensions.heightLevel2,
        fontWeight:'bold',
        color:'#636363',
        fontFamily:fontFamilies.SFProTextRegular,
        fontSize:fontSizes.fontLarge,
    }
});

export default WelcomeScreen ;