import React, { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


interface Props {
    id: number,
    name: string,
 
}

const DetailCategory: FC<Props> = ({id, name}): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.containner, styles.shadowProp]}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    containner: {
        marginHorizontal: 10,
        backgroundColor: "#F0F0F0",
        justifyContent: "center",
        paddingHorizontal: 10,
        height: 30,
        borderRadius: 30, 
    },

    shadowProp: {  
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
      }, 

    text: {
        color: "#037EEE"
    }
})
export default DetailCategory;
