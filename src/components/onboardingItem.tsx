import { FC } from 'react'
import {StyleSheet, View , Text, Image, Dimensions}from 'react-native'
import { SlideProps } from 'types/onboardingSlide'

interface Props {
    item: SlideProps
}

const OnboardingItem: FC<Props> = ({item}):JSX.Element => {
  return (
    <View style={styles.container}>
        <Image style={styles.onboardingImage} source={item.image}/>
        <View style={styles.footer}>
        <Text style={styles.footerHeading}>{item.title}</Text>
        <Text style={styles.footerParagraph}>{item.description}</Text>
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
        marginTop: -80,
        width: "50%",
        alignSelf: "center",
        objectFit: 'contain',
    },

    footer: {
        width: "100%",
        marginTop: -60,
        paddingHorizontal: 10,
        alignItems:  'center',
       
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

    footerIcon: {
        marginVertical: 5
    }
})
export default OnboardingItem;
