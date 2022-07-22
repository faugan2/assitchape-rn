import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Footer from "../components/Footer";
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomePage from '../components/HomePage';
import ShortsPage from '../components/ShortsPage';
import MessagesPage from '../components/MessagesPage';
import PanierPage from '../components/PanierPage';
import ComptePage from '../components/ComptePage';

import Search from "../components/Search";

export default function Home() {
    const [page,set_page]=useState(0);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {page==0 && <Search />}
       {page==0 && <HomePage />}
       {page==1 && <ShortsPage />}
       {page==2 && <MessagesPage />}
       {page==3 && <PanierPage />}
       {page==4 && <ComptePage />}
      <Footer click={set_page} page={page}/>
    </SafeAreaView>
  )
}