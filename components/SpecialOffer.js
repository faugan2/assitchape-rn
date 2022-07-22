import { View, Text, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

import SpecialOfferItem from './SpecialOfferItem'

export default function SpecialOffer() {
  return (
    <View style={tw`bg-red-100 m-2 rounded-md`}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`m-1`}>
          <Text style={tw`text-lg font-bold`}>Offre spéciale 1ere commande</Text>
          <Text style={tw`text-xs text-gray-500`}>Livraison Gratuite</Text>
        </View>
        <Icon name="chevron-forward-outline" type="ionicon" color="indianred"/>
      </View>
      <View style={tw`flex-row  justify-between p-1`}>
        <View style={tw`bg-red-300 flex-1 mr-0.5 rounded-sm `}>
          <Text style={tw`text-lg text-white font-bold m-1`}>4000 Fr</Text>
          <Text style={tw`text-white text-xs ml-1 mb-1 -mt-2 pb-1`}>Dès 5000 Fr d'achats</Text>
        </View>
        <TouchableOpacity style={tw`bg-red-400 items-center justify-center w-24 rounded-sm`}>
          <Text style={tw`bg-white rounded-lg p-1 pl-2 pr-2 text-xs`}>J'en profite</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      
      >
        <SpecialOfferItem />
        <SpecialOfferItem />
        <SpecialOfferItem />
        <SpecialOfferItem />
      </ScrollView>
    </View>
  )
}