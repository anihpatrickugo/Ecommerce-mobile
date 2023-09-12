import React, {FC} from 'react'
import { 
  SafeAreaView , 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import OrderItem from 'components/orderItem'
import products from 'const/products'


interface  Props {
  navigation: any
}

const OrderScreen:FC<Props> = ({navigation}):JSX.Element => {

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


      <View style={styles.scrollView} >
        <Text style={styles.cartTittle}>My Orders</Text>

        {/* order list */}
        <FlatList 
              style={styles.cartList}
              data={products} 
              pagingEnabled 
              bounces={false} 
              showsVerticalScrollIndicator={false} 
              renderItem={({item})=> <OrderItem key={item.id} item={item}/>}
        />

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

})

export default OrderScreen
