import React from 'react';
import { Scene } from 'react-native-router-flux';
// import { Scene,Router, Stack} from 'react-native-router-flux';
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';
import WelcomeScreen from '../views/WelcomeScreen';
import HomeScreen from '../views/HomeScreen';
import BankDetails from '../views/BankDetails';
import BenMalcolm from '../views/BenMalcolm';
import Foods from '../views/Foods';
import FoodSearch from '../views/FoodSearch';
import CreateAdd from '../views/CreateAdd';
import Earnings from '../views/Earnings';
import RiderEarnings from '../views/RiderEarnings';
import EnterCode from '../views/EnterCode';
import Offline from '../views/Offline';
import OnGoingTrip from '../views/OnGoingTrip';
import Online from '../views/Online';
import OrderDetails from '../views/OrderDetails';
import Orders from '../views/Orders';
import OrdersHome from '../views/OrdersHome';
import Order from '../views/Order';
import PlaceOrder from '../views/PlaceOrder';
import PostedAds from '../views/PostedAds';
import Riders from '../views/Riders';
import SellerDetails from '../views/SellerDetails';
import SellerReview from '../views/SellerReview';
import RiderReview from '../views/RiderReview';
import OrderFoodDetails from '../views/OrderFoodDetails';
import VisitorDetails from '../views/VisitorDetails';
import OrderFoodDetail from '../views/OrderFoodDetail';
import NotificationDetail from '../views/NotificationDetail';
import SelectRider from '../views/SelectRider';
import Sellers from '../views/Sellers';
import EditProfile from '../views/EditProfile';
import Notification from '../views/Notification';
import RiderOnline from '../component/RiderOnline';
import CustomerDetails from '../component/CustomerDetails';
import FoodSelect from '../component/FoodSelect';
import Chart from '../component/Chart';
import CustomerNotification from '../component/CustomerNotification';
import FoodDetails from '../component/FoodDetails';
import PlaceFood from '../component/PlaceFood';
import Posted from '../component/Posted';
import Rider from '../component/Rider';
import RiderDetails from '../component/RiderDetails';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="BankDetails" component={BankDetails} />
                <Stack.Screen name="BenMalcolm" component={BenMalcolm} />
                <Stack.Screen name="Foods" component={Foods} />
                <Stack.Screen name="FoodSearch" component={FoodSearch} />
                <Stack.Screen name="CreateAdd" component={CreateAdd} />
                <Stack.Screen name="Earnings" component={Earnings} />
                <Stack.Screen name="RiderEarnings" component={RiderEarnings} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="EnterCode" component={EnterCode} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Offline" component={Offline} />
                <Stack.Screen name="OnGoingTrip" component={OnGoingTrip} />
                <Stack.Screen name="Online" component={Online} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="OrdersHome" component={OrdersHome} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
                <Stack.Screen name="PostedAds" component={PostedAds} />
                <Stack.Screen name="Riders" component={Riders} />
                <Stack.Screen name="SellerDetails" component={SellerDetails} />
                <Stack.Screen name="SellerReview" component={SellerReview} />
                <Stack.Screen name="RiderReview" component={RiderReview} />
                <Stack.Screen name="OrderFoodDetails" component={OrderFoodDetails} />
                <Stack.Screen name="VisitorDetails" component={VisitorDetails} />
                <Stack.Screen name="OrderFoodDetail" component={OrderFoodDetail} />
                <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
                <Stack.Screen name="SelectRider" component={SelectRider} />
                <Stack.Screen name="Sellers" component={Sellers} />
                <Stack.Screen name="RiderOnline" component={RiderOnline} />
                <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
                <Stack.Screen name="FoodSelect" component={FoodSelect} />
                <Stack.Screen name="Chart" component={Chart} />
                <Stack.Screen name="CustomerNotification" component={CustomerNotification} />
                <Stack.Screen name="FoodDetails" component={FoodDetails} />
                <Stack.Screen name="PlaceFood" component={PlaceFood} />
                <Stack.Screen name="Posted" component={Posted} />
                <Stack.Screen name="Rider" component={Rider} />
                <Stack.Screen name="RiderDetails" component={RiderDetails} />

            </Stack.Navigator>
    )
}

export default StackNavigation ;