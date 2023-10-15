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
} from 'react-native'

import { useDispatch, useSelector} from 'react-redux';
import { CartItemProps, addToCart, removeFromCart } from 'redux/cartSlice'; 

import Categories from 'components/Categories'
import { addComma } from 'hooks';


interface  Props {
  route: any,
  navigation: any
}

const ProductDetail:FC<Props> = ({route, navigation}):JSX.Element => {
     const item = route.params.item
     
    const dispatch = useDispatch()
    const cart = useSelector((state:any) => state.cart)
    const isInCart = cart.find((cartItem: CartItemProps) => cartItem.id == item.id);
     

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

      <TouchableOpacity onPress={()=>navigation.navigate('Cart', {item})}>
          <Image
            style={styles.icon}
            source={require("../icons/heart.png")}
            height={500}
            width={500}
          />
        {cart.length > 0 && <Text style={styles.cartQuantity}>{cart.length}</Text>}
      </TouchableOpacity>

      </View>

      {/* image */}

        <View style={styles.imageContainner}>
         <Image
            style={styles.image}
            source={{uri:`http://res.cloudinary.com/dmhxcjyna/${item.image}`}}
            height={25}
            width={25}
           />
       </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        

      {/* name and price */}
      <View style={styles.nameAndPrice}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`₦${addComma(item.price)}`}</Text>
      </View>

        {/* categories */}  
        <Categories setCategory={()=>{}}/>
      
     
      {/* description */}
      <View style={styles.descriptionContainner}>
         <Text style={styles.descriptionHead}>Description</Text>
         <Text style={styles.description}>
          {item.description}
          </Text>
      </View>

      {/* button */}
      {!isInCart ? (
         <TouchableOpacity style={styles.button} onPress={()=>dispatch(addToCart(item))}>
            <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      ): (
        <TouchableOpacity style={styles.button} onPress={()=>dispatch(removeFromCart(item))}>
        <Text style={styles.buttonText}>Remove From Cart</Text>
      </TouchableOpacity>
      )}
     
           
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
