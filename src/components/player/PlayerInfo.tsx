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
  clipName: string;
}

export default function PlayerButton({clipName}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{clipName}</Text>
    </View>
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
