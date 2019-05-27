/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View} from 'react-native';
import Clips from './components/clips/Clips';
import Player from './components/player/Player';
import Sound from 'react-native-sound';

const handleErr = (err: boolean) => {
  if (err) {
    console.log('error on init');

  } else {
    console.log('success init');
  }
}
const onEnd = (res: Object, sound: Sound) => {
  debugger
}
const createSound = (clip: any) => new Sound(clip, handleErr);

interface CurrentClip {
  clip: any;
  title: string;
  sound: any;

}
interface CurrentSound {
  sound: Sound;
}
// const sound: any = new Sound(clip, error => console.log(error, sound));


export default function App() {
  const [currentClip, setClip] = useState<CurrentClip>({clip: null, title: '', sound: null});

  useEffect(() => {
    if (!currentClip || !currentClip.clip) return;
    const sound = createSound(currentClip.clip)
    sound.setNumberOfLoops(3);
    sound.play(res => onEnd(res, sound))
  }, [currentClip])

  // const [sound, setSound] = useState<CurrentSound>();

  // const updateCurrentClip = (clip: CurrentClip) => {
  //   setClip(clip);
  //   const sound = createSound(clip.clip)
  //   setSound(sound);
  //   // sound.play((success: Object) => console.log('Finished playing', success, sound))
  // }

  // useEffect(() => {
  //   if (!currentClip || !currentClip.clip) return;
  //   const sound = createSound(currentClip.clip)
  //   sound.play((success: Object) => console.log('Finished playing', success, sound))
  // })
  return (
    <View style={styles.container}>
      <Clips setClip={setClip}/>
      <Player clip={currentClip}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
