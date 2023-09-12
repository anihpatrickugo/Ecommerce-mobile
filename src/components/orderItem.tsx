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

const OrderItem: FC<Props> = ({item}):JSX.Element => {
  return (
       <View style={styles.cartItem}>

       <View  style={styles.cartImageContainner}>
          <Image
           style={styles.cartImage}
           source={{uri: "data:image/png;base64,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"}}
           height={500}
           width={500}
           />
      </View>


      <View style={styles.cartItemDetails}>

        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>{`₦${item.price}`}</Text>
        <Text>hello</Text>
        <Text>date</Text>
      </View>

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
})
export default OrderItem
