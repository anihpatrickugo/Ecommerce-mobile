import React, {FC, useState} from 'react'
import { 
  SafeAreaView , 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'

import { useSelector} from 'react-redux';
import { CartItemProps } from 'redux/cartSlice';

import CartItem from '../components/cartItem'
import { addComma } from 'hooks';



interface  Props {
  navigation: any
}

const CartScreen:FC<Props> = ({navigation}):JSX.Element => {
     
     const [coupon, setCoupon] = useState('')

    const cart = useSelector((state:any) => state.cart)
    
    const totalPrice = cart.reduce(
      (prevValue:number, currentValue:CartItemProps) =>
        prevValue + currentValue.price * currentValue.quantity,
      0
    );

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

      <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../icons/heart.png")}
            height={500}
            width={500}
          />
          {cart.length > 0 && <Text style={styles.cartQuantity}>{cart.length}</Text>}
      </TouchableOpacity>

      </View>


      <View style={styles.scrollView} >
        <Text style={styles.cartTittle}>My Cart</Text>

        {/* cart list */}
        { cart.length > 0 ? (
          <FlatList 
                style={styles.cartList}
                data={cart} 
                pagingEnabled 
                bounces={false} 
                showsVerticalScrollIndicator={false} 
                renderItem={({item})=> <CartItem key={item.id} item={item}/>}
          />

        ): (
          <Text style={styles.emptyCartText}>Your Cart Is Empty</Text>
        )}


       {/* cart summmary */}
       <View style={styles.cartSummary}>

        <View style={styles.summaryRow}>
            <Text style={styles.summaryKey}>No of Items</Text>
            <Text style={styles.summaryValue}>{cart.length}</Text>
        </View>

        <View style={styles.summaryRow}>
            <Text style={styles.summaryKey}>Total Price</Text>
            <Text style={styles.summaryValue}>₦{addComma(totalPrice)}</Text>
        </View>

       </View>


       {/* coupon */}
       {cart.length > 0 && (

       <View style={styles.cartSummary}>

        <View style={styles.summaryRow}>
            <Text style={styles.summaryKey}>Enter Coupon</Text>
            <TextInput style={styles.CouponField} value={coupon} onChangeText={(e)=>setCoupon(e)} placeholder='Optional'/>
        </View>

       </View>
       )}
        

      {/* button */}
      {cart.length > 0 && (
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Checkout')}>
        <Text style={styles.buttonText}>Proceed To Checkout</Text>
      </TouchableOpacity>
          
      )}
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
  
  scrollView: {
    width: '100%'
  },

  cartTittle:{
    alignSelf: 'flex-start',
    fontWeight:  "700",
    fontSize: 20,
    color: '#037EEE',
    marginVertical: 10
  },
  
  cartList: {
    width: "100%",
    height: 250
  },

  emptyCartText:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 100,
    color: 'red'
  },


  cartSummary: {
    width: '100%',
    paddingHorizontal: 10,
    borderColor:"#E5E5E5",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 5
  },

  summaryKey:{
    fontSize: 14,
    fontWeight: 'bold'
  },

  summaryValue:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  CouponField: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
    marginLeft: 20,
    paddingHorizontal: 10
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

export default CartScreen
