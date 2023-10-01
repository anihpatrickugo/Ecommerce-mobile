import {FC} from 'react'
import {useState} from 'react'
import {View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

interface FormData {
  username: string, 
  email: string, 
  password: string
}

interface Props {
    page: string,
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    error: boolean,
   
}

const AuthInputForm: FC<Props> = ({page, formData, setFormData, error}): JSX.Element => {
  
    const [hidePassword, setHidePassword] = useState(false);


  return (
   
      <View>
       

        {/* username */}
        <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require("../icons/profile.png")}
            height={25}
            width={25}
          />
          <TextInput
            style={styles.inputField}
            onChangeText={(username)=>setFormData({...formData, username:username})}
            value={formData.username}
            placeholder="Username"
            keyboardType="default"
            editable={!error}
            selectTextOnFocus={!error}
          />
        </View>

        
        {/* email */}
        { page === 'register' &&  (

            <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require("../icons/mail.png")}
            height={25}
            width={25}
          />
          <TextInput
            style={styles.inputField}
            onChangeText={(email)=>setFormData({...formData, email:email})}
            value={formData.email}
            placeholder="Email Address"
            keyboardType="default"
            editable={!error}
            selectTextOnFocus={!error}
          />
        </View>

        ) }
        

        {/* password */}
        <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require("../icons/lock.png")}
            height={25}
            width={25}
          />
          <TextInput
            style={styles.inputField}
            onChangeText={(password)=>setFormData({...formData, password:password})}
            value={formData.password}
            placeholder="Password"
            secureTextEntry={hidePassword}
            editable={!error}
            selectTextOnFocus={!error}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Image
              style={styles.inputIcon}
              source={require("../icons/eye.png")}
              height={25}
              width={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      
   
  
  )
  
}

const styles = StyleSheet.create({
    
    input: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        paddingVertical: 8,
        backgroundColor: "#F2F2F2",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#E5E5E5"
      },
      inputIcon: {
        marginHorizontal: 8,
      },
      inputField: {
        flex: 1,
        height: 40,
        padding: 0,
        marginHorizontal: 12,
      },

})
export default AuthInputForm;
