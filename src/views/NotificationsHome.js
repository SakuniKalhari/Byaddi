// import React, { Component } from 'react';
// import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
// import {Actions} from 'react-native-router-flux';
// import { dimensions, fontSizes , colors, fontFamilies} from '../configurations/constants';

// const user=require('../assets/img/Ellipse10.webp');
// const back=require('../assets/img/Group18.webp');

// const NotificationsHome = (props) => (
//             <View style={styles.backgroundContainer}>
//                 <View style={{flexDirection:'row',marginTop:dimensions.heightLevel2}}>
//                     <TouchableOpacity style={{marginTop:dimensions.heightLevel1*1.2,marginLeft:dimensions.paddingLevel3}} onPress={()=>props.navigation.navigate('Foods')}>
//                         <Image source={back} style={{width:dimensions.widthLevel10/15,height:dimensions.heightLevel1}}/>
//                     </TouchableOpacity>
//                     <Text style={styles.head}> Notifications </Text>
//                 </View>
//                 <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('NotificationDetail')}>
//                     <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
//                         <Image source={user} style={styles.img}/>
//                     </TouchableOpacity>
//                     <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
//                         <Text style={styles.text}>Eric Widget</Text>
//                         <View style={{marginTop:dimensions.heightLevel1/2}}>
//                             <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>
//                                 Aenean euismod pellentesque tincidunt era.nam eu enim erat.In dictum, nibh a eu.</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                     <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
//                         <Image source={user} style={styles.img}/>
//                     </TouchableOpacity>
//                     <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
//                         <Text style={styles.text}>Niles Peppertrout</Text>
//                         <View style={{marginTop:dimensions.heightLevel1/2}}>
//                             <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>
//                                 Fusce quis ante nisi.Pellentesque odio Pellentesque odio augue, id vestibulum.</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                     <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
//                         <Image source={user} style={styles.img}/>
//                     </TouchableOpacity>
//                     <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
//                         <Text style={styles.text}>Max Conversion</Text>
//                         <View style={{marginTop:dimensions.heightLevel1/2}}>
//                             <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>
//                                 Curabitur ullamcorper pulvinar egestas vel condimentum.Quisque dictum urna vel.</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                     <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
//                         <Image source={user} style={styles.img}/>
//                     </TouchableOpacity>
//                     <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
//                         <Text style={styles.text}>Bailey Wonger</Text>
//                         <View style={{marginTop:dimensions.heightLevel1/2}}>
//                             <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>
//                                 Nam ac metus tincidunt,faucibus ipsum nec,malesuada lorem. Ut tempus justo.</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                     <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
//                         <Image source={user} style={styles.img}/>
//                     </TouchableOpacity>
//                     <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
//                         <Text style={styles.text}>Max Conversion</Text>
//                         <View style={{marginTop:dimensions.heightLevel1/2}}>
//                             <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>
//                                 Curabitur ullamcorper pulvinar egestas vel condimentum.Quisque dictum urna vel.</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                     <TouchableOpacity style={{marginLeft:dimensions.paddingLevel1}}>
//                         <Image source={user} style={styles.img}/>
//                     </TouchableOpacity>
//                     <View style={{width:dimensions.widthLevel6,marginLeft:dimensions.paddingLevel3,flexDirection:'column'}}>
//                         <Text style={styles.text}>Bailey Wonger</Text>
//                         <View style={{marginTop:dimensions.heightLevel1/2}}>
//                         <Text style={{fontSize:fontSizes.fontMedium,fontFamily:fontFamilies.SFProTextRegular}}>
//                             Nam ac metus tincidunt,faucibus ipsum nec,malesuada lorem. Ut tempus justo.</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         )
// export default NotificationsHome ;

// const styles = StyleSheet.create({
//     backgroundContainer: {
//       width: dimensions.fullWidth,
//       height: dimensions.fullHeight,
//     },
//     head:{
//         fontSize:fontSizes.fontLarge,
//         fontWeight:'bold',
//         marginTop:dimensions.heightLevel1,
//         marginLeft:dimensions.paddingLevel7*2.2,
//         color:'#636363',
//         fontFamily:fontFamilies.SFProTextRegular
//     },
//     img:{
//         width:dimensions.widthLevel9/4,
//         height:dimensions.heightLevel4,
//     },
//     text:{
//         fontWeight:'bold',
//         fontSize:fontSizes.fontMidMedium,
//         fontFamily:fontFamilies.Humanst521BT,
//     },
//     btn:{
//         flexDirection:'row',
//         marginTop:dimensions.heightLevel3,
//         marginLeft:dimensions.paddingLevel2
//     },
// });