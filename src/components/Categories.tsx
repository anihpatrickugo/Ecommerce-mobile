import React, {FC, Dispatch, SetStateAction, useState, useLayoutEffect} from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import CategoryItem from './categoryItem'

interface CategoryProps {
    id: number,
    name: string
}

export interface Props {
    setCategory: Dispatch<SetStateAction<string>> ; 
}

const Categories: FC<Props> = ({setCategory}):JSX.Element => {

    const [categories, setCategories]= useState<CategoryProps[]>([])

    const allCategories = [{id: 0, name: ""}, ...categories]
   
    useLayoutEffect(()=>{

        const getCategories = async () => {
          const res = await fetch(`https://shopgrids.onrender.com/categories/`);
          const data = await res.json();
          setCategories(data);
        };
    
        getCategories();
      },[])

  return (
    <View style={styles.categories}>
    <FlatList 
            data={allCategories} 
            pagingEnabled 
            bounces={false} 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            renderItem={({item})=> <CategoryItem key={item.id} id={item.id} name={item.name} setCategory={setCategory}/>}/>

    </View>
  )
}

const styles = StyleSheet.create({
    categories: {
        width: "100%",
        height: 70,
        marginVertical: 10,
        alignItems: "center",
        paddingVertical: 10,
      },
})

export default Categories
