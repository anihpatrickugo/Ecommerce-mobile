
import {FC, useState} from 'react'
import { View, Text , StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity} from 'react-native'
import AuthInputForm from 'components/authInputForm'

interface Props {
    navigation: any
}


const Authentication: FC<Props> = ({navigation}):JSX.Element => {
   const [page, setPage ]= useState<"login"|"register">('login')

   const loginExtraStyle: any = {
    color: page === "login" ? "#036BB9" : "#A6A6A6",
    borderBottomWidth: page === "login" ? 3.1 : null,
    borderBottomColor: page === "login" ? "#036BB9" : null,
  };

   const registerExtraStyle: any = {
    color: page === "register" ? "#036BB9" : "#A6A6A6",
    borderBottomWidth: page === "register" ? 3.1 : null,
    borderBottomColor: page === "register" ? "#036BB9" : null,
  };
  

  return (
    <SafeAreaView style={styles.containner}>
      <Text style={styles.headingText}>{ page === "login" ? "Login": "Register"}</Text>
      <Text style={styles.subHeading}>By signing { page ==='login' ? 'in'  : 'up'} you are agreeing our <Text style={styles.termsPrivacy}> Term and privacy policy</Text> </Text>
      
      {/* auth options */}
      <View style={styles.authOptions}>
        <Text style={[styles.authOptionsText, loginExtraStyle]} 
            onPress={()=> setPage('login')}>Login</Text>


        <Text style={[styles.authOptionsText, registerExtraStyle]} 
            onPress={()=> setPage('register')}>Register</Text>
      </View>


      {/* input form */}
      <View style={styles.inputContainner}>
        <AuthInputForm page={page}/>
      </View>

       {/* button */}
       <TouchableOpacity
        style={styles.action}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.actionText}>{page === 'login'? "Login": "Register"}</Text>
      </TouchableOpacity>

      {/* footer background  */}
      <View style={styles.footerLogoContainer}>
         <Image style={styles.footerLogo} source={require('icons/logo.png')}/>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        paddingVertical: StatusBar.currentHeight, 
        alignItems: "center", 

    },
    headingText: {
        fontSize: 24,
        fontWeight: "700",
        marginVertical: 15,
        color: "#060440"
    },
    subHeading: {
        width: "65%",
        textAlign: 'center',
        fontSize: 16,
        color: "#060440"
    },
    termsPrivacy: {
        color: "#036BB9"
    },


    authOptions: {
        marginVertical: 20,
        width: "35%",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    authOptionsText: {
        fontSize: 16,
        paddingBottom: 5,  
              
    },


    //   button
    action: {
      marginVertical: 16,
      paddingVertical: 16,
      width: "70%",
      backgroundColor: "#037EE6",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 16,
  },

  actionText: {
    fontSize: 18,
    color: "white",
  },



    inputContainner: {
        width: "90%",
    },

    footerLogoContainer:{
        width: "50%",
        height: 50,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        position: "relative",
        bottom: 20,
   
    },

    footerLogo: {
        width: "100%",
        objectFit: "contain"
    }
})

export default Authentication;
