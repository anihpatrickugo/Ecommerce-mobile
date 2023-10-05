import React, {FC} from 'react'
import {TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

import ProductProps from 'types/products'

interface Props {
   item: ProductProps,
   navigation: any
}

const TrendingItem: FC<Props> = ({item, navigation}):JSX.Element => {

   
    
  return (
    <TouchableOpacity style={styles.containner}  onPress={()=>navigation.navigate('Detail', {item})}>

      {/* discount label  */}
      {item.description 
      && typeof(item.discount) !== 'undefined' 
      && item.discount > 0 
      && (<Text style={styles.discount}>{`-${item.discount}%`}</Text>)}
   
    

        <Image
            style={styles.trendingImage}
            source={{uri: `http://res.cloudinary.com/dmhxcjyna/${item.image}`}}
            height={100}
            width={100}
          />
      <Text style={styles.price}>{`₦${item.price}`}</Text>
      <Text style={styles.name}>{item.name}</Text>

      <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    containner: {
        height: "100%",
        width: 200,
        backgroundColor: "white",
        marginHorizontal: 15,
        borderRadius: 20,
        alignItems: "center",
        borderColor: "rgb(8, 24, 40)",
        borderStyle: "solid",
        borderWidth: 1,
        position: 'relative'
    },

    discount: {
        position: 'absolute',
        zIndex: 5,
        top: 6,
        right: 6,
        backgroundColor: "red",
        color: "white",
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    trendingImage: {

    },
    price: {
        backgroundColor: "#F0F0F0",
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10
    },
    name: {
        fontSize: 16,
        color: "#037EEE",
        fontWeight: "700"
    },

    addToCart : {
        width: "80%",
        backgroundColor: "#037EEE",
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 10
        
    },

    addToCartText: {
        textAlign: "center",
        color: "white"
    }

})
export default TrendingItem
