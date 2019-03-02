import React, {Component, useState} from 'react';
import { Button, Text, View } from 'react-native';
import Sound from 'react-native-sound';
const clip = require('./../../assets/tbj_soundclips/DemarcusCousins12-Inch.mp3');

export default function SoundButton({}) {
  const [count, setCount] = useState(0)
  const handlePress = () => setCount(count + 1)
  const sound: any = new Sound(clip, error => console.log(error, sound));

  return(
    <View>
      <Button onPress={() => sound.play((success: Object) => console.log(success)
      )} title='test'>Test</Button>
      <Text>{count}</Text>
    </View>
  )
}
