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
import PlayerButton from './PlayerButton';
import PlayerInfo from './PlayerInfo';

interface Props {
  clip: {title: string, clip: any};
}

export default function Player({ clip }: Props) {
  const clipName = clip && clip.title;
  return (
    <View style={styles.container}>
      <PlayerButton playing={true} handleClick={() => console.log('hi')}/>
      <PlayerInfo clipName={clipName || 'Choose a clip'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    height: 60,
    backgroundColor: 'teal',
  }
});
