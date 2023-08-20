import {StyleSheet, View , Text, Image, Dimensions, TouchableOpacity}from 'react-native'
import { SlideProps } from 'types/onboardingSlide'


const OnboardingItem = ({item}: {item: SlideProps}):JSX.Element => {
  return (
    <View style={styles.container}>
        <Image style={styles.onboardingImage} source={item.image}/>
        <View style={styles.footer}>
        <Text style={styles.footerHeading}>{item.title}</Text>
        <Text style={styles.footerParagraph}>{item.description}</Text>

        {/* getstarted button */}
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Get Started</Text>
        </TouchableOpacity>

        <Image style={styles.footerIcon} source={item.icon}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width

    },
    onboardingImage: {
        marginTop: -120,
        width: "50%",
        alignSelf: "center",
        objectFit: 'contain',
    },

    footer: {
        width: "100%",
        marginTop: -70,
        paddingHorizontal: 10,
        alignItems:  'center'
    },

    footerHeading: {
        fontSize: 24,
        fontWeight: '700',
        color: "#060440"
    },
   
    footerParagraph: {
        fontSize: 14,
        textAlign:  'center',
        color: "#060440",
        marginVertical: 15
    },

    loginButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#037EE6",
        marginVertical: 10,
        borderRadius: 10,
        
    },

    loginButtonText:{
        fontWeight: "700"
    },

    footerIcon: {
        marginVertical: 10
    }
})
export default OnboardingItem;
