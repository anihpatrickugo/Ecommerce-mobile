import React, { FC } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TouchableOpacity,
   
  } from 'react-native'
  import ProductProps from 'types/products'


interface Props {
    item: ProductProps
}

const cartItem: FC<Props> = ({item}):JSX.Element => {
  return (
       <View style={styles.cartItem}>

       <View  style={styles.cartImageContainner}>
          <Image
           style={styles.cartImage}
           source={{uri: item.image}}
           height={500}
           width={500}
           />
      </View>


      <View style={styles.cartItemDetails}>

        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>{`₦${item.price}`}</Text>
      </View>

      
      <View style={styles.cartItemQuantity}>

       <TouchableOpacity>
         <Text style={styles.quantityBtn}>-</Text>
       </TouchableOpacity>
       
       <Text style={styles.quantityBtn}>1</Text>

       <TouchableOpacity>
          <Text style={styles.quantityBtn}>+</Text>
       </TouchableOpacity>
       
      </View>

      <Text style={styles.removeBtn}>X</Text>

      </View>
  )
}


const styles = StyleSheet.create({
    cartItem: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 5,
        borderColor:"#E5E5E5",
        borderWidth: 2,
        borderRadius: 5
      },
    
      cartImageContainner: {
        width: 80,
        height: 80,
        borderRadius: 100,
        position: "relative"
       
      },
      cartImage: {
        width: "100%",
        height: '100%'
      },
    
      cartItemDetails: {
        flexGrow: 1,
        height: 80,
        paddingHorizontal: 3,
        justifyContent: 'space-evenly'
      },
    
      cartItemName: {
        fontSize: 14,
        fontWeight: 'bold'
      },
    
      cartItemPrice: {
        fontSize: 12,
        fontWeight: 'bold'
      },
    
    
      cartItemQuantity:{
        height: 40,
        width: 90,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignSelf: "flex-end",
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        borderRadius: 20
      },
    
      quantityBtn: {
        fontSize: 16,
        fontWeight: 'bold'
      },


      removeBtn: {
        backgroundColor: '#037EEE',
        color: 'white',
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5,
        borderRadius: 20
      }
     
})
export default cartItem
