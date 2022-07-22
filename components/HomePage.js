import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Search from './Search'
import TopOptions from './TopOptions'
import SpecialOffer from './SpecialOffer'
import DealOfTheDay from './DealOfTheDay'
import Selections from './Selections'
import VirtualizedView from './VirtualizedView'

export default function HomePage() {
  return (
    <VirtualizedView>
        <TopOptions />
        <SpecialOffer />
        <DealOfTheDay />
        <Selections />
    </VirtualizedView> 
  )
}