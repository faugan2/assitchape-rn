import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon,Avatar} from "react-native-elements";
import tw from 'tailwind-react-native-classnames';

export default function TopOptions() {
  const btn_style="flex-1 items-center justify-start h-20 ";
  const text_style="text-xs  text-center mt-1";
  return (
    <View style={tw`flex-row items-center justify-between pt-4`}>
      <TouchableOpacity style={[tw`${btn_style}`]}>
        <Avatar icon={{name:"apps-outline", type:"ionicon",   color:"indianred"}} rounded size="medium" 
        containerStyle={tw`bg-white`}
        />
        <Text style={[tw`${text_style}`]}>Catégorie</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]}>
        <Avatar icon={{name:"logo-apple-appstore", type:"ionicon",   color:"indianred"}} rounded size="medium" 
        containerStyle={tw`bg-white`}
        />
        <Text style={[tw`${text_style}`]}>Jetons</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]}>
        
        <Avatar icon={{name:"laptop-outline", type:"ionicon",   color:"indianred"}} rounded size="medium" 
        containerStyle={tw`bg-white`}
        />
        <Text style={[tw`${text_style}`]}>Quiz & Jackpt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]}>
        
        <Avatar icon={{name:"book-outline", type:"ionicon",   color:"indianred"}} rounded size="medium" 
        containerStyle={tw`bg-white`}
        />
        <Text style={[tw`${text_style}`]}>Expédition locale</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[tw`${btn_style}`]}>
       
        <Avatar icon={{name:"layers-outline", type:"ionicon",   color:"indianred"}} rounded size="medium" 
        containerStyle={tw`bg-white`}
        />
        <Text style={[tw`${text_style}`]}>Top des sélections</Text>
      </TouchableOpacity>
    </View>
  )
}