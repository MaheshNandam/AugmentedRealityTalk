'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  Viro360Video,
  ViroNode,
  ViroVideo,
  ViroSoundField
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/guadalupe_360.jpg')} />
        <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
        <ViroNode position={[0, 6, -1]} scale={[2, 2, 2]}>
          <ViroText text="Text A" position={[0, 0, -1]} />

          <ViroNode position={[0, 6, -5]} scale={[4, 4, 4]}>
            <ViroText text="Text B" />
          </ViroNode>

          <ViroSoundField
            source={{ uri: 'https://soundcloud.com/lil_peep/life-is-beautiful' }}
            rotation={[0, 0, 0]}
            paused={false}
            onFinish={this.onFinishSound} />

        </ViroNode>

        {/* <ViroVideo
          source={{ uri: 'https://www.youtube.com/watch?v=6QxQAsRPgJc'}}
          loop={true}
          position={[0, 2, -5]}
          scale={[2, 2, 0]}
        /> */}

        <Viro360Video
          source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }}
          onFinish={this._onFinish}
          onUpdateTime={this._onUpdateTime}
          onError={this._videoError}
          loop={true}
          paused={false}
          volume={1.0} />
      </ViroScene>
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldScene;
