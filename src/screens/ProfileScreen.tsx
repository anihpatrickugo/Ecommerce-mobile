import React, {FC} from 'react'
import { 
  SafeAreaView , 
  ScrollView,
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  Alert
 
} from 'react-native'
import * as SecureStore from 'expo-secure-store';

import type { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from 'redux/authSlice'


interface  Props {
  navigation: any
}

const ProfileScreen:FC<Props> = ({navigation}):JSX.Element => {

  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()


  const logout = () => {

    Alert.alert('Logging out', 'Are you sure you want to logout?', [
     
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },

      {
        text: 'Yes',
        onPress: () => {
          SecureStore.deleteItemAsync("userToken")
          navigation.reset({
              routes: [{ name: 'Authentication' }],
            });
            
          
        },
      }
    ]);
  }
     
     

  return (
    <SafeAreaView style={styles.containner}>
         
      {/* header */}
      <View style={styles.headerLogoContainer}>
         <Image style={styles.headerLogo} source={require('icons/logo.png')}/>
      </View>

      {/* backbutton and arrow */}
      <View style={styles.backAndArrow}>

      <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={require("../icons/arrow-left.png")}
            height={500}
            width={500}
          />
      </TouchableOpacity>
      </View>
      
        {/* profile link */}
        <TouchableOpacity style={styles.profileContainnner}>
        {/* image */}
        <View style={styles.profileImageContainner}>
        <Image
            style={styles.profileImage}
            source={{uri:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJ5uzamZittLOqysSJNyhD_emWIH_ZDvUBg&usqp=CAU"}}
            height={500}
            width={500}
          />
        </View>

        {/* text */}
        <View style={styles.profileDetailContainnner}>
            <Text style={styles.profileName}>helkdkdk</Text>
            <Text style={styles.profileEmail}>nxnnxnnx</Text>
        </View>

      </TouchableOpacity>


      {/* links */}
      <ScrollView style={styles.links}>

        <TouchableOpacity style={styles.link}>
            <View style={styles.linkIconContainner}>
              <Image
                style={styles.linkIcon}
                source={require('../icons/edit.png')}
                height={200}
                width={200}
              />
            </View>

            <Text style={styles.linkName}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={()=> navigation.navigate('Orders')}>
            <View style={styles.linkIconContainner}>
              <Image
                style={styles.linkIcon}
                source={require('../icons/orders.png')}
                height={200}
                width={200}
              />
            </View>

            <Text style={styles.linkName}>My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}>
            <View style={styles.linkIconContainner}>
              <Image
                style={styles.linkIcon}
                source={require('../icons/address.png')}
                height={200}
                width={200}
              />
            </View>

            <Text style={styles.linkName}>My Address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}>
            <View style={styles.linkIconContainner}>
              <Image
                style={styles.linkIcon}
                source={require('../icons/call.png')}
                height={200}
                width={200}
              />
            </View>

            <Text style={styles.linkName}>Talk To Our Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={logout}>
            <View style={styles.linkIconContainner}>
              <Image
                style={styles.linkIcon}
                source={require('../icons/logout.png')}
                height={200}
                width={200}
              />
            </View>

            <Text style={styles.linkName}>Logout</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        paddingVertical: StatusBar.currentHeight, 
        paddingHorizontal: 16, 
        position:"relative",
        height: "100%",
       
        
    },
    
    headerLogoContainer:{
      width: "30%",
      height: 20,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: "center",
      marginVertical: 20,
      position: "relative",
      top: 0,
      
 
  },

  headerLogo: {
      width: "100%",
      objectFit: "contain"
  },

  backAndArrow: {
    width: '100%',
    height: 30,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 10,
    position: 'relative'
  },

  profileContainnner: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems:  'center'
  },

  profileImageContainner: {
     width: '16%',
     borderRadius: 200
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    objectFit: 'contain'
  },

  profileDetailContainnner:{
    marginHorizontal: 10
  },

  profileName: {
     fontWeight: 'bold',
     color: "#037EEE"
  },

  profileEmail: {
    color: "#555555"
  },

  links: {
    marginVertical: 20,
    width: "100%",
  },

  link: {
    width: "100%",
    height: 65,
    flexDirection: 'row',
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: '#D8D8D8',
  },

  linkIconContainner:{
    height: '100%',
    width: '15%',
  },

  linkIcon: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  },

  linkName: {
    color: '#037EEE',
    marginHorizontal: 10
  }
  
 
})

export default ProfileScreen
