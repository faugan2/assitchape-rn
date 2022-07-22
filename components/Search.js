import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { TextInput } from 'react-native'
import {Icon} from "react-native-elements";

export default function Search() {
  return (
    <View style={tw`flex-row items-center justify-between`}>
      <View style={tw` flex-1 flex-row items-center mr-2 ml-4 border border-red-300 bg-white rounded-xl pl-1 pr-1`}>
        <TextInput style={tw`border-0 flex-1 h-10 text-sm`}
        placeholder="Rechercher"
        />
        <Icon name="search-outline" type="ionicon" size={20} color="gray" />
      </View>
      <TouchableOpacity style={tw`pl-3 pr-3 pt-1.5 pb-1.5`}>
        <Icon name="camera-outline" type="ionicon" color="black" size={30} />
      </TouchableOpacity>
    </View>
  )
}