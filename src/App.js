import React, { useEffect,Component } from 'react';
// import 'react-native-gesture-handler';

import DrawerNavigator from './navigations/DrawerNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from 'react-native-splash-screen';
import EditProfile from './views/EditProfile';
import CustomerDetails from './component/CustomerDetails';

const Drawer = createDrawerNavigator();

  const App= () => {

    


    return (

          <NavigationContainer> 

              <DrawerNavigator/>
              {/* <CustomerNotification/> */}
              {/* <SelectRider/> */}
              {/* <FoodSelect/> */}
              {/* <CustomerDetails/> */}
              {/* <Orders/> */}
              {/* <FoodDetails/> */}
              {/* <OrderFoodDetails/> */}
              {/* <OrdersHome/> */}
              {/* <PlaceOrder/> */}
              {/* <PlaceFood/> */}

         </NavigationContainer> 
  );
}

export default App;
