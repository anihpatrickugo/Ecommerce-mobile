import { StyleSheet, SafeAreaView, FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import slides from 'const/onboardingSlide.js'
import OnboardingItem from 'components/onboardingItem';
import { FC } from 'react';


interface Props {
    navigation: any
}

const Onboarding: FC<Props> = ({navigation}):JSX.Element => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.top}>
                 <Image source={require('images/backgrounds/Shape1.png')}/>
                 <Image style={styles.subShape} source={require('images/backgrounds/Subshape1.png')}/>

                 
            </View>

            <View style={styles.logoContainer}>
                      <Image style={styles.logoIcon} source={require('icons/Vector.png')}/>
                      <Text style={styles.title}>ShopGrids</Text>
                      <Text style={styles.subTitle}>Get any kind of electronics in one go</Text>
            </View>

            <FlatList 
              data={slides} 
              pagingEnabled 
              bounces={false} 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              renderItem={({item})=> <OnboardingItem key={item.id} item={item}/>}/>

              {/* getstarted button */}
             <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Authentication')}>
                   <Text style={styles.loginButtonText}>Get Started</Text>
             </TouchableOpacity>
          
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    top:{
        marginTop: -140,
        position: "relative"
       
    },
    subShape:{
        position: 'absolute',
        top: 80,
        right: 0
    },

    logoContainer:{
        position: 'absolute',
        left: 0,
        top: 50,
        width: "50%",
        height: 150,
        paddingLeft: 20,
    },

    logoIcon:{
        width: 50,
    },
    
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textDecorationLine: 'underline',
        marginVertical: 5
    },

    subTitle: {
        color: "white",
        fontSize: 12,
    
    },

    loginButton: {
        width: "50%",
        // paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#037EE6",
        marginVertical: 10,
        borderRadius: 10,
    
        
    },

    loginButtonText:{
        fontWeight: "700",
        textAlign: 'center',
        
    },
   
  });

export default Onboarding;
