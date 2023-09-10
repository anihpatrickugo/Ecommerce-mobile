import React, {FC, useState} from 'react'
import { 
  SafeAreaView ,
  ScrollView, 
  StyleSheet, 
  StatusBar,
  Text, 
  View, 
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Picker } from "@react-native-picker/picker";
import { Country, State} from "country-state-city";


interface Props {
    navigation: any
}

const allCountries = Country.getAllCountries();
const allStates = State.getAllStates();

const CheckoutScreen: FC<Props> = ({navigation}): JSX.Element => {

    const [values, setValues] = useState<any>({ country:"", state:"", city: "", phone: "", line: "", zip: "", })

    // selected data related objects
    const [selectedStates, setSelectedStates] = useState<any>([])
   
    
      const changeCountry = (name:string) => {
        const currentCountry = allCountries.find(
          (country) => country.name === name
        );
      

        // setValues({...values, country: currentCountry.isoCode});
        setValues({...values, country: currentCountry?.name})
        
      
        // Filter states based on the selected country
        const chosenStates = allStates.filter(
          (state) => state.countryCode === currentCountry?.isoCode
        );
      
        // Sort the states in ascending order
        const sortedStates = chosenStates.sort(function (a, b) {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
      
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      
        setSelectedStates(sortedStates)
      };

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
          style={styles.icon}
          source={require("../icons/arrow-left.png")}
          height={500}
          width={500}
        />
    </TouchableOpacity>

    </View>

    
    <View style={styles.formContainner} >
      <Text style={styles.deliveryTittle}>Delivery Info</Text>

    
    <ScrollView style={styles.deliveryForm} showsVerticalScrollIndicator={false}>

    <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Country</Text>
        <Picker
            style={styles.inputField}
            selectedValue={values.country} 
            onValueChange={data => changeCountry(data)}
             
            >

              {allCountries.map((country)=> (
                <Picker.Item key={country.name} label={country.name} value={country.name}/>
              ))}

        </Picker>    
    </View>

    <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>State</Text>
        <Picker 
           style={styles.inputField}
           selectedValue={values.state}
           onValueChange={(data) => setValues({...values, state:data})}
            
        >  
        {selectedStates.map((state:any)=> (
           <Picker.Item key={state.name} label={state.name} value={state.name}/>
        ))}
        </Picker>  
    </View>

    <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>City</Text>
        <TextInput 
          style={styles.inputField} 
          onChangeText={(data) => setValues({...values, city:data})}
          value={values.city}
          placeholder='Enter City'
          />    
    </View>

    <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Phone</Text>
        <TextInput 
          style={styles.inputField}
          onChangeText={(data) => setValues({...values, phone:data})}
          value={values.phone} 
          placeholder='Enter Phone'
          />    
    </View>
    <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Line No</Text>
        <TextInput 
          style={styles.inputField}
          onChangeText={(data) => setValues({...values, line:data})}
          value={values.line}
          placeholder='Enter Line Address'
          />    
    </View>
    <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Zip Code</Text>
        <TextInput 
          style={styles.inputField} 
          onChangeText={(data) => setValues({...values, zip:data})}
          value={values.zip}
          placeholder='Enter Zip Code'
          />    
    </View>


     {/* button */}
     <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Place Order</Text>
     </TouchableOpacity>

 </ScrollView>
  
    </View>
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    containner: {
        flex: 1,
        paddingVertical: StatusBar.currentHeight, 
        paddingHorizontal: 16,
        alignItems: "center", 
        position:"relative",
        height: "100%",  
    },
    
    headerLogoContainer:{
      width: "30%",
      height: 20,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
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

  icon: {
    marginHorizontal: 8,
  },
  
  formContainner: {
    width: '100%',

  },

  deliveryTittle:{
    alignSelf: 'flex-start',
    fontWeight:  "700",
    fontSize: 20,
    color: '#037EEE',
    marginVertical: 10
  },

  deliveryForm: {
    width: '100%',  
    height: 450
  },

  inputRow: {
    height: 55,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    borderColor:"#E5E5E5",
    borderWidth: 2,
    borderRadius: 5,
    margin: 10
  },

  inputLabel: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    width: '20%'
  },

  inputField: {
    paddingHorizontal: 10,
    flexGrow: 1,
    height: "100%",
    backgroundColor: "#E5E5E5"
  },

  buttonText: {
    color: '#E5E5E5'
  },

  button: {
    marginVertical: 16,
    backgroundColor: '#037EEE',
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10
  }
})
export default CheckoutScreen
