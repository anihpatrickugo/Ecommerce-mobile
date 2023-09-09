import {FC} from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    Image, 
    StatusBar,
    TouchableOpacity, 
    View, 
    Text,
    TextInput,
    FlatList
} from 'react-native'
import { Formik } from 'formik'
import CategoryItem from 'components/categoryItem'
import categories from 'const/categories'
import products from 'const/products'
import TrendingItem from 'components/trendingItem'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface Props {
  navigation: any
}

const ProductsScreen:FC<Props> = ({navigation}):JSX.Element => {
  return (
    <SafeAreaView style={styles.containner}>
        {/* header */}
      <View style={styles.headerLogoContainer}>
         <Image style={styles.headerLogo} source={require('icons/logo.png')}/>
      </View>

      {/* search bar */}
      <Formik
    initialValues={{ search: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        {/* username */}
        <View style={styles.input}>
          <TouchableOpacity>
          <Image
            style={styles.inputIcon}
            source={require("../icons/search.png")}
            height={25}
            width={25}
          />
          </TouchableOpacity>
          
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange("search")}
            onBlur={handleBlur("Searh")}
            value={values.search}
            placeholder="Search"
            keyboardType="default"
          />
        </View> 
      </View>
    )}
      </Formik>

      {/* categories */}
      <View style={styles.categories}>
      <FlatList 
              data={categories} 
              pagingEnabled 
              bounces={false} 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              renderItem={({item})=> <CategoryItem key={item.id} id={item.id} name={item.name}/>}/>

      </View>


      {/* Trending prodiucts */}
      <View style={styles.trending}>
      <Text style={styles.trendingTitle}>Trending Products</Text>
      <FlatList 
              data={products} 
              pagingEnabled 
              bounces={false} 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              renderItem={({item})=> <TrendingItem key={item.id} item={item} navigation={navigation}/>}/>

      </View>

    {/* footer */}
    <View style={styles.footer}>


       <TouchableOpacity>
          <Image
            style={styles.inputIcon}
            source={require("../icons/home.png")}
            height={25}
            width={25}
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Image
            style={styles.inputIcon}
            source={require("../icons/cart.png")}
            height={25}
            width={25}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
            style={styles.inputIcon}
            source={require("../icons/profile2.png")}
            height={25}
            width={25}
          />
          </TouchableOpacity>
    </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        paddingVertical: StatusBar.currentHeight, 
        alignItems: "center", 
        position:"relative",

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

    input: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        backgroundColor: "#E5E5E5",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#E5E5E5",
        borderRadius: 10
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

      categories: {
        width: "100%",
        height: 70,
        marginVertical: 10,
        alignItems: "center",
        paddingVertical: 10,
      },

      trending: {
        width: "100%",
        height: 250,
        marginVertical: 10,
        alignItems: "center", 
      },

      trendingTitle: {
        alignSelf: "flex-start",
        fontWeight: "700",
        marginHorizontal: 20,
        marginVertical: 10
      },

      footer: {
        width: "90%",
        height: 60,
        backgroundColor: "#037EEE",
        borderRadius: 30,
        position: "absolute",
        bottom: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center'
      }


})
export default ProductsScreen
