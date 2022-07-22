import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import SelectionsItem from './SelectionsItem'

export default function Selections() {
  return (
    <View style={tw`pb-20 m-2`}>
      <Text style={[tw`text-xl font-semibold`,{}]}>Selections</Text>
      <FlatList 
        numColumns={2}
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={(item)=>item}
        renderItem={({item})=>{
          return <SelectionsItem item={item}/>
        }}

       
      />
    </View>
  )
}