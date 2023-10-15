
import {FC, useState} from 'react'
import { View, Text , StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity , ActivityIndicator} from 'react-native'
import * as SecureStore from 'expo-secure-store';
import AuthInputForm from 'components/authInputForm'
import { useDispatch } from 'react-redux';
import { addAuthToken } from 'redux/authSlice';


interface Props {
    navigation: any
}


const Authentication: FC<Props> = ({navigation}):JSX.Element => {
   const [page, setPage ]= useState<"login"|"register">('login')

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [errorMessage, setErrorMessage] = useState<string|null>(null);

   const [formData, setFormData] = useState({username: "", email:"", password: ""})

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

  const dispatch = useDispatch()


  // login
  const loginBtn = async () => {
    setError(false)
    setLoading(true);

  
     const { username, password } = formData;

     const req = await fetch(`https://shopgrids.onrender.com/auth/`, {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await req.json();

    if (req.ok){
      await SecureStore.setItemAsync("userToken", res.access)
      dispatch(addAuthToken(res.access))
      navigation.reset({
        routes: [{ name: 'Products' }],
      });

    } else {
      setErrorMessage(res.error || res.message || res.errors || res.password || res.message ||"Invalid credentials");
    }
    setLoading(false);
  };
  

  // signup
  
  const signupBtn = async () => {
    setError(false)
    setLoading(true);
      
  
      const req = await fetch(`https://shopgrids.onrender.com/user/`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const res = await req.json();
  
      if (req.ok) {
        setError(false);
  
        // log user in
        const loginReq = await fetch(`https://shopgrids.onrender.com/auth/`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const loginRes = await loginReq.json();
        setLoading(false);
        await SecureStore.setItemAsync("userToken", loginRes.access)
         navigation.reset({
           routes: [{ name: 'Products' }],
         });

      } else {
        
        setErrorMessage(res.error || res.message || res.errors || res.password || res.message ||"Invalid credentials");
      }
      setLoading(false);
    };
  

  return (
    <SafeAreaView style={styles.containner}>

      <Text style={styles.headingText}>{ page === "login" ? "Login": "Register"}</Text>
      <Text style={styles.subHeading}>By signing { page ==='login' ? 'in'  : 'up'} you are agreeing our <Text style={styles.termsPrivacy}> Term and privacy policy</Text> </Text>
      

      {/* auth options */}
      <View style={styles.authOptions}>
        <Text style={[styles.authOptionsText, loginExtraStyle]} 
            onPress={(()=> !loading && setPage('login'))}>Login</Text>


        <Text style={[styles.authOptionsText, registerExtraStyle]} 
            onPress={()=> !loading && setPage('register')}>Register</Text>
      </View>


      {/* input form */}
      <View style={styles.inputContainner}>
        <AuthInputForm page={page} formData={formData} setFormData={setFormData} error={error}/>
      </View>

       {/* button */}
       {!loading ? <TouchableOpacity
        style={styles.action}
        onPress={page === 'login'? loginBtn : signupBtn}
      >
          <Text style={styles.actionText}>{page === 'login'? "Login": "Register"}</Text> 
      </TouchableOpacity> 
      :
      <View
        style={styles.action}
      >
           <ActivityIndicator color={"white"} size={"small"}/>
      </View>
      
      }


      {/* error */}
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}

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
