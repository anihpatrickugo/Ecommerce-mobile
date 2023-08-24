import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from 'screens/Onboarding';
import Authentication from 'screens/Authentication';
import ProductsScreen from 'screens/ProductsScreen';
import ProductDetail from 'screens/ProductDetail';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home" component={Onboarding} />

        <Stack.Screen name="Authentication" component={Authentication} />

        <Stack.Screen name="Products" component={ProductsScreen} />

        <Stack.Screen name="detail" component={ProductDetail} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


