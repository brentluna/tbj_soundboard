import React from 'react';
import ClipsData from './../../ClipsData';
import ClipButton from './ClipButton'
import { View } from 'react-native';

export default function Clips({}) {
  return (
    <View>
      {ClipsData.map((clip: Object) => {
        return (
          <ClipButton
            clip={clip.clip}
            title={clip.title}
          />
        )
      })}
    </View>
  )
}
