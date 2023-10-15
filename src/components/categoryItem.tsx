import React, { FC, Dispatch, SetStateAction } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


interface Props {
    id: number,
    name: string,
    setCategory: Dispatch<SetStateAction<string>> ;
    
 
}

const CategoryItem: FC<Props> = ({id, name, setCategory}): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.containner, styles.shadowProp]} onPress={()=>setCategory(name)}>
      <Text style={styles.text}>{name===""? 'All': name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    containner: {
        marginHorizontal: 10,
        backgroundColor: "white",
        justifyContent: "center",
        paddingHorizontal: 20,
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
export default CategoryItem;
