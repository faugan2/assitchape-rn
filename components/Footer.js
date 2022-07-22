import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {Icon} from "react-native-elements";

export default function Footer({click,page}) {
    const btn_style="flex-1 items-center pt-2 pb-2";
    const text_style="text-xs text-center";
  return (
    <View style={[tw`absolute bottom-0 bg-white w-full flex-row items-center justify-between`,{height:60}]}>
      <TouchableOpacity style={[tw`${btn_style}`]} onPress={click.bind(this,0)}>
        {page==0 ? 
        <Icon name="home-outline" type="ionicon" color="indianred"/> : 
        <Icon name="home-outline" type="ionicon" /> } 
        <Text style={[tw`${text_style} ${page==0 ? "text-red-500":""}`,{fontSize:10}]}>Accueil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]} onPress={click.bind(this,1)}>
        {page==1 ? <Icon name="videocam-outline" type="ionicon" color="indianred" /> : 
        <Icon name="videocam-outline" type="ionicon"  />}
        <Text style={[tw`${text_style}  ${page==1 ? "text-red-500":""}`,{fontSize:10}]}>Shorts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]} onPress={click.bind(this,2)}>
        {page==2 ? <Icon name="chatbubble-ellipses-outline" type="ionicon" color="indianred"/> : 
        <Icon name="chatbubble-ellipses-outline" type="ionicon" />
        }
        <Text style={[tw`${text_style}  ${page==2 ? "text-red-500":""}`,{fontSize:10}]}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]} onPress={click.bind(this,3)}>
        {page==3 ? <Icon name="cart-outline" type="ionicon" color="indianred"/> :
        <Icon name="cart-outline" type="ionicon" />}
        <Text style={[tw`${text_style}  ${page==3 ? "text-red-500":""}`,{fontSize:10}]}>Panier</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]} onPress={click.bind(this,4)}>
        {page==4 ? <Icon name="person-outline" type="ionicon" color="indianred"/> :
        <Icon name="person-outline" type="ionicon" />}
        <Text style={[tw`${text_style}  ${page==4 ? "text-red-500":""}`,{fontSize:10}]}>Compte</Text>
      </TouchableOpacity>
    </View>
  )
}