import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const OnboardingOne = ():JSX.Element => {
    return (
        <View style={styles.container}>
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

            <Image style={styles.onboardingImage}source={require('images/contents/onboarding1.png')}/>

            <View style={styles.footer}>
            <Text style={styles.footerHeading}>Purchase Online !!</Text>
            <Text style={styles.footerParagraph}>
            Welcome to the no.1 store where you can shop for anykind 
            of accesories, gadgets or electronics.
             </Text>
             <Image style={styles.footerIcon} source={require('icons/First-Select.png')}/>
            </View>
          
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
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

    onboardingImage: {
        width: "80%",
        alignSelf: "center"
    },

    footer: {
        width: "100%",
        paddingHorizontal: 10,
        alignItems:  'center'
    },

    footerHeading: {
        fontSize: 24,
        fontWeight: '700'
    },
   
    footerParagraph: {
        fontSize: 14,
        textAlign:  'center'
    },
    footerIcon: {
        marginVertical: 5
    }
   
  });

export default OnboardingOne
