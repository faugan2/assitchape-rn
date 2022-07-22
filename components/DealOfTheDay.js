
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

import SpecialOfferItem from './SpecialOfferItem'
import DealOfTheDayItem from './DealOfTheDayItem'

export default function DealOfTheDay() {
  return (
    <View style={tw`bg-white m-2 rounded-md`}>
    <View style={tw`flex-row items-center justify-between`}>
      <View style={tw`m-1`}>
        <Text style={tw`text-lg font-bold`}>Deal du Jour</Text>
        <Text style={tw`text-xs text-gray-500`}>Prix les plus bas. Livraison gratuite</Text>
      </View>
      <Icon name="chevron-forward-outline" type="ionicon" color="silver" />
    </View>
    
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    
    >
     <DealOfTheDayItem />
     <DealOfTheDayItem />
     <DealOfTheDayItem />
     <DealOfTheDayItem />
    </ScrollView>
  </View>
  )
}