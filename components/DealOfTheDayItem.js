import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import montre from "../images/montre.png";
import tw from 'tailwind-react-native-classnames';

export default function DealOfTheDayItem() {
  return (
    <TouchableOpacity style={tw` p-1 m-1`} activeOpacity={0.6}>
    <Image source={montre} 
    style={[{
      width:100,height:100
    },tw`bg-gray-100`]}
    />
  
  <View style={tw`mt-2`}>
      <Text style={tw`text-sm font-bold text-red-400`}>13000 Fr</Text>
      <Text style={[tw`text-xs line-through`,{}]}>15000 Fr</Text>
      <Text style={tw`text-xs text-gray-500`}>13 vendu(s)</Text>
  </View>
</TouchableOpacity>
  )
}