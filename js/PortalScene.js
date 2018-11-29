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
    ViroPortal,
} from 'react-viro';
import TextScene from './TextScene';

import ARGoBackButton from './ARGoBackButton';
import BusinessCardImage from './BusinessCardImage';

export default class PortalScene extends Component {

    nextPageScene = () => {
        this.props.sceneNavigator.push({ scene: BusinessCardImage })
    }

    render() {
        return (
            <ViroARScene>
                <ViroNode scale={[0.5, 0.5, 0.5]} position={[0, 0, -0.3]} onDrag={() => { }}>
                    <ARGoBackButton {...this.props} nextPage={this.nextPageScene} />
                </ViroNode>
                <ViroAmbientLight color="#ffffff" intensity={200} />
                <ViroPortalScene passable={true} dragType={'FixedDistance'} onDrag={() => { }}>
                    <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
                        <Viro3DObject source={require('./res/portal_ship/portal_ship.vrx')}
                            resources={[require('./res/portal_ship/portal_ship_diffuse.png'),
                            require('./res/portal_ship/portal_ship_normal.png'),
                            require('./res/portal_ship/portal_ship_specular.png')]}
                            type="VRX" />
                    </ViroPortal>
                    <Viro360Video source={require('./res/skydive.mp4')} />
                </ViroPortalScene>
            </ViroARScene>
        );
    }
}

module.exports = PortalScene;
