import React, {Component, useState} from 'react';
import { Button, Text, View } from 'react-native';

export default function SoundButton({}) {
  const [count, setCount] = useState(0)
  const handlePress = () => setCount(count + 1)
  return(
    <View>
      <Button onPress={handlePress} title='test'>Test</Button>
      <Text>{count}</Text>
    </View>
  )
}
