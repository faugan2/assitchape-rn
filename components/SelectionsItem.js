import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import montre from "../images/montre.png";
import tele from "../images/tele.png";
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

export default function SelectionsItem({item}) {
    let img=montre;
    if(item%2==0){
        img=tele;
    }
  return (
    <TouchableOpacity style={tw`flex-1 bg-white m-1`} activeOpacity={0.6}>
      <Image source={img} style={[{width:150,height:150,resizeMode:"stretch"},tw`bg-gray-100 w-full`]}/>
      <Text style={tw`text-sm text-gray-600 pl-1`} numberOfLines={1} ellipsizeMode="tail" >Titre du produit</Text>
      <Text style={tw`text-lg font-semibold pl-1`}>13000 Fr</Text>
      <Text style={tw`text-xs text-gray-500 pl-1` }>23 vendu(s)</Text>
      <View style={tw`flex-row items-center pl-1`}>
        <Icon name="rocket-outline" type="ionicon" color="orange" size={15} />
      <Text style={tw`text-xs text-gray-500 `}>Livraison Gratuite</Text>
     </View>
      <Text style={tw`text-xs text-gray-500 pl-1`}>Livraison Gratuite</Text>
    </TouchableOpacity>
  )
}