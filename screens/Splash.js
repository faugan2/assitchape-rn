import { View, Text, Image ,} from 'react-native'
import React, { useEffect, useState } from 'react'

import {
    SafeAreaView,
  } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import logo from "../images/logo.png";
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Splash() {
    const navigation=useNavigation();


    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("home")
        },3000)
    },[])
  return (
    <SafeAreaView style={tw`bg-white h-full items-center justify-center`}>
      <Image source={logo}
      style={[{width:180,height:180,resizeMode:"contain"},tw``]}
      />
     
    </SafeAreaView>
  )
}