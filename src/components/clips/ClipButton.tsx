import React, { Component, useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity
} from 'react-native';
import Sound from 'react-native-sound';

interface Style {
  text: TextStyle;
  button: ViewStyle;
}
interface BProps {
  clip: any;
  title: string;
}
// const styles = StyleSheet.create<Style>({
//   text: {
//     color: 'lightgreen',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   button: {
//     width: 150
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    width: 260,
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});

export default function SoundButton({ clip, title }: BProps) {
  const sound: any = new Sound(clip, error => console.log(error, sound));
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => sound.play((success: Object) => console.log(success))}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
