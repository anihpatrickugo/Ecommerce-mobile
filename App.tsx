import { useLayoutEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

import { store } from 'redux/store';
import { Provider } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from 'screens/Onboarding';
import Authentication from 'screens/Authentication';
import ProductsScreen from 'screens/ProductsScreen';
import ProductDetail from 'screens/ProductDetail';
import CartScreen from 'screens/CartScreen';
import CheckoutScreen from 'screens/CheckoutScreen';
import ProfileScreen from 'screens/ProfileScreen';
import OrderScreen from 'screens/OrdersScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [token, setToken] = useState<string|null>(null)
  
  useLayoutEffect (()=>{
     
    const checkToken =  async() => {

      const data: any = await SecureStore.getItemAsync("userToken");
      setToken(data)

    }

    checkToken()

  },[])

  
  return (
    <Provider store={store}>
      <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        { token === null && 

        <Stack.Screen name="Onboarding" component={Onboarding} />

        }

          <Stack.Screen name="Products" component={ProductsScreen} />

    
          <Stack.Screen name="Authentication" component={Authentication} />

          <Stack.Screen name="Detail" component={ProductDetail} />

          <Stack.Screen name="Cart" component={CartScreen} />
 
          <Stack.Screen name="Checkout" component={CheckoutScreen} />

          <Stack.Screen name="Profile" component={ProfileScreen} />

          <Stack.Screen name="Orders" component={OrderScreen} />

      </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  );
}