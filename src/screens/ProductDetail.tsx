import React, {FC} from 'react'
import { SafeAreaView , StatusBar, StyleSheet} from 'react-native'

interface  Props {

}

const ProductDetail:FC<Props> = ():JSX.Element => {
  return (
    <SafeAreaView>
      
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
})

export default ProductDetail
