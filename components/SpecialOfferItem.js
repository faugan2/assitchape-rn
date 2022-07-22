import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import montre from "../images/montre.png";
import tw from 'tailwind-react-native-classnames';


export default function SpecialOfferItem() {
  return (
    <TouchableOpacity style={tw` p-1 m-1`} activeOpacity={0.6}>
          <Image source={montre} 
          style={[{
            width:100,height:100
          },tw`border p-1`]}
          />
        <Text style={tw`bg-red-200 absolute w-11 text-center text-sm`}>-57%</Text>
        <View style={tw`mt-2`}>
            <Text style={tw`bg-red-400 w-14 text-sm font-semibold text-white`}>13000 Fr</Text>
            <Text style={tw`text-xs text-red-500`}>Prix de bienvenue</Text>
        </View>
    </TouchableOpacity>
  )
}