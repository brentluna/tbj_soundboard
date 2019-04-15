import React from 'react';
import ClipsData from './../../ClipsData';
import ClipButton from './ClipButton'
import { View, FlatList, StyleSheet } from 'react-native';

interface Item {
  title: string;
  clip: any;
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 40
  }
})
export default function Clips() {
  const keyExtractor = (item: Item, idx: number) => item.title
  return (
    <FlatList
      numColumns={2}
      data={ClipsData}
      keyExtractor={keyExtractor}
      // contentContainerStyle={style.container}
      columnWrapperStyle={style.container}
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
