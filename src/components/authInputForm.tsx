import {FC} from 'react'
import {useState} from 'react'
import { Formik } from 'formik'
import {View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    page: string
}

const AuthInputForm: FC<Props> = ({page}): JSX.Element => {
  
    const [hidePassword, setHidePassword] = useState(false);

  return (
    <Formik
    initialValues={{ username: "", email:"", password: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
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
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            placeholder="Username"
            keyboardType="default"
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
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Email Address"
            keyboardType="default"
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
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            // value={values.password}
            placeholder="Password"
            secureTextEntry={hidePassword}
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
    )}
  </Formik>
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
