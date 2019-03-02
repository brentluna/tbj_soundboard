import React, { Component, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Sound from 'react-native-sound';

export default function SoundButton({ clip, title }) {
  const [count, setCount] = useState(0);
  const handlePress = () => setCount(count + 1);
  const sound: any = new Sound(clip, error => console.log(error, sound));

  return (
    <View>
      <Button
        onPress={() => sound.play((success: Object) => console.log(success))}
        title={title}
      >
        {title}
      </Button>
    </View>
  );
}
