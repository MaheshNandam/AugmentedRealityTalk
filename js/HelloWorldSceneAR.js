'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroSurface,
  ViroMaterials,
  ViroImage,
  Viro360Image,
  Viro360Video,
  ViroSkybox,
  ViroARPlaneSelector,
  ViroBox,
  Viro3DObject,
  ViroFlexView,
  ViroSpotLight,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroNode,
  ViroAnimations,
  ViroOmniLight,
  ViroQuad,
  ViroParticleEmitter,
  ViroSpatialSound,
  ViroSoundField,
  ViroSound,
  ViroPortalScene,
  ViroPortal
} from 'react-viro';


export default class HelloWorldSceneAR extends Component {
  render() {
    return (
      <ViroARScene>

        <ViroNode position={[0, 0, 0]}
          scale={[1, 1, 1]}
          opacity={1}>
            <ViroText
              onClick={() => this.props.sceneNavigator.push({ scene: TextScene })}
              textClipMode="None"
              text={'Mahesh'}
              style={{
                fontFamily: "lucida grande', tahoma, verdana, arial, sans-serif",
                fontSize: 10,
                fontWeight: "400",
                fontStyle: "italic",
                color: "#26ff00",
              }}
            />
          </ViroNode>

        <BusinessCardImage />
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
