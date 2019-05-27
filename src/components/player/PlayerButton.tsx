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

interface Props {
  playing: boolean;
  handleClick: ()=>void;

}

export default function PlayerButton({playing, handleClick}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.text}>{playing ? 'Stop' : 'Play'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22
  }
});
