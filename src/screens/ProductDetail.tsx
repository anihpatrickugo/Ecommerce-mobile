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
  TextInput,
  FlatList
} from 'react-native'
import DetailCategory from 'components/detailCategory'
import ProductProps from 'types/products'
import categories from 'const/categories'
import products from 'const/products'

interface  Props {
  route: any,
  navigation: any
}

const ProductDetail:FC<Props> = ({route, navigation}):JSX.Element => {
     const {id, name, image, price} = route.params.item
     

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

      <TouchableOpacity onPress={()=>navigation.navigate('Cart', {item:products})}>
          <Image
            style={styles.icon}
            source={require("../icons/heart.png")}
            height={500}
            width={500}
          />
          <Text style={styles.cartQuantity}>0</Text>
      </TouchableOpacity>

      </View>

      {/* image */}

        <View style={styles.imageContainner}>
         <Image
            style={styles.image}
            source={{uri:image}}
            height={25}
            width={25}
           />
       </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        

      {/* name and price */}
      <View style={styles.nameAndPrice}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{`₦${price}`}</Text>
      </View>

          {/* categories */}  
      <View style={styles.categories}>
      <FlatList 
              data={categories} 
              pagingEnabled 
              bounces={false} 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              renderItem={({item})=> <DetailCategory key={item.id} id={item.id} name={item.name}/>}/>

      </View>
     
      {/* description */}
      <View style={styles.descriptionContainner}>
         <Text style={styles.descriptionHead}>Description</Text>
         <Text style={styles.description}>
          hhhdhshjhshh nhchhdhhd hdydhhd hs hdggdjdjd hshshhs hshsjhsj
          shshhsh hshjjhha hjahjhas hsahhsh hahhsh shsah shhshs shsh 
          hssjg sggsg shsjgs shhsah shhshs sahhsh
          </Text>
      </View>

      {/* button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Cart</Text>
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

  cartQuantity: {
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 5
  },

  icon: {
    marginHorizontal: 8,
  },
  
  imageContainner: {
    width: "80%",
    height: '35%'
  },

  image: {
    width: "100%",
    height: "100%"
  },

  nameAndPrice: {
    alignSelf: 'flex-start',
    marginTop: 10
   
  },

  itemName: {
    fontSize: 24,
    fontWeight: "900"
  },
    
  itemPrice: {
    fontSize: 16,
    fontWeight: "700"
  },

  quantity: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 18
  },

  quantityValue: {
    height: 40,
    padding: 0,
    textAlign: 'center',
    marginHorizontal: 12,
    backgroundColor: "#E5E5E5",
    borderStyle: "solid",
    borderRadius: 10
  },

  editQuantity: {
    backgroundColor: '#037EEE',
    width: 40,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 5,
    borderRadius: 20
  },

  editQuantityText: {
    color: '#E5E5E5',
    fontWeight: "bold",
    fontSize: 20
  },

  categories: {
    width: "100%",
    height: 70,
    marginVertical: 10,
    alignItems: "center",
    paddingVertical: 10,
  },

  descriptionContainner: {
    width: '100%',
   
  },

  descriptionHead: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10
  },

  description: {
    color: "black",
    fontSize: 16,
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

export default ProductDetail
