import React from 'react';
import ClipsData from './../../ClipsData';
import ClipButton from './ClipButton'
import { View, FlatList, StyleSheet } from 'react-native';

interface Item {
  title: string;
  clip: any;
}
export default function Clips() {
  const keyExtractor = (item: Item, idx: number) => item.title
  return (
    <FlatList
      // numColumns={2}
      data={ClipsData}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
          <ClipButton
            key={item.title}
            clip={item.clip}
            title={item.title}
          />
        )
      }
    />
  )
}
