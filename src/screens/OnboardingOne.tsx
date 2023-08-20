import { StyleSheet, FlatList, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import slides from 'const/onboardingSlide.js'
import OnboardingItem from 'components/onboardingItem';

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

            <FlatList 
              data={slides} 
              pagingEnabled 
              bounces={false} 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              renderItem={({item})=> <OnboardingItem item={item}/>}/>
          
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
   
  });

export default OnboardingOne
