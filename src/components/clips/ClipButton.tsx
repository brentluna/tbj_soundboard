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

// interface Style {
//   text: TextStyle;
//   button: ViewStyle;
// }

interface Props {
  clip: any;
  title: string;
  setClip: ({})=>void;
}

export default function SoundButton({ clip, title, setClip }: Props) {
  const sound: any = new Sound(clip, error => console.log(error, sound));
  return (
    // <View>
    // <View style={styles.container}>
      <TouchableOpacity
        // style={styles.button}
        // onPress={() => {debugger; sound.play((success: Object) => console.log(success))}}
        onPress={() => setClip({clip, title})}
      >
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
      </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#DDDDDD',
    backgroundColor: 'salmon',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: 150,
    height: 80,
    margin:10

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  button: {
    // alignItems: 'center',
    // width: 135,
    // height: 80,
    // backgroundColor: '#DDDDDD',
    // padding: 10,
    // marginBottom: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});
