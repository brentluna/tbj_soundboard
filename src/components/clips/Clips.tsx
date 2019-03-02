import React from 'react';
import ClipsData from './../../ClipsData';
import ClipButton from './ClipButton'
import { View, FlatList } from 'react-native';

export default function Clips() {
  return (
    <FlatList
      data={ClipsData}
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
