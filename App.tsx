import { useLayoutEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { useSelector, useDispatch} from "react-redux";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from 'screens/Onboarding';
import Authentication from 'screens/Authentication';
import ProductsScreen from 'screens/ProductsScreen';
import ProductDetail from 'screens/ProductDetail';
import CartScreen from 'screens/CartScreen';
import CheckoutScreen from 'screens/CheckoutScreen';
import ProfileScreen from 'screens/ProfileScreen';
import OrderScreen from 'screens/OrdersScreen';
import { addAuthToken } from 'redux/authSlice';

const Stack = createNativeStackNavigator();


export default function AppWrapper ()  {
  
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

 function App() {
  
  let token = useSelector((state:any) => state.user.token)
  const dispatch = useDispatch()

 
  
  useLayoutEffect (()=>{
     
    const checkToken =  async() => {

      const data: any = await SecureStore.getItemAsync("userToken");
      dispatch(addAuthToken(data))
      

    }

    checkToken()

  },[])

  
  return (
    // <Provider store={store}>
      <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        { token === null && 

        <Stack.Screen name="Onboarding" component={Onboarding} />

        }

          <Stack.Screen name="Products" component={ProductsScreen} />

    
          <Stack.Screen name="Authentication" component={Authentication} />

          <Stack.Screen name="Detail" component={ProductDetail} />

          <Stack.Screen name="Cart" component={CartScreen} initialParams={{token}} />
 
          <Stack.Screen name="Checkout" component={CheckoutScreen} />

          <Stack.Screen name="Profile" component={ProfileScreen} />

          <Stack.Screen name="Orders" component={OrderScreen} />

      </Stack.Navigator>
        
      </NavigationContainer>
    // </Provider>
  );
}