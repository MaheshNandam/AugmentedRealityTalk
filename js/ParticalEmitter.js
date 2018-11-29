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
    ViroSound
} from 'react-viro';

export default class ParticalEmitter extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <ViroParticleEmitter
                position={[0, 4.5, 0]}
                duration={2000}
                visible={true}
                delay={0}
                run={true}
                loop={true}
                fixedToEmitter={true}

                image={{
                    source: require("./res/snow1.png"),
                    height: 0.05,
                    width: 0.05,
                    bloomThreshold: 1.0
                }}

                spawnBehavior={{
                    particleLifetime: [4000, 4000],
                    emissionRatePerSecond: [150, 200],
                    spawnVolume: {
                        shape: "box",
                        params: [30, 50, 50],
                        spawnOnSurface: false
                    },
                    maxParticles: 1800
                }}

                particleAppearance={{
                    opacity: {
                        initialRange: [0, 0],
                        factor: "Time",
                        interpolation: [
                            { endValue: 0.5, interval: [0, 500] },
                            { endValue: 1.0, interval: [4000, 5000] }
                        ]
                    },

                    rotation: {
                        initialRange: [0, 360],
                        factor: "Time",
                        interpolation: [
                            { endValue: 1080, interval: [0, 5000] },
                        ]
                    },

                    scale: {
                        initialRange: [[5, 5, 5], [10, 10, 10]],
                        factor: "Time",
                        interpolation: [
                            { endValue: [3, 3, 3], interval: [0, 4000] },
                            { endValue: [0, 0, 0], interval: [4000, 5000] }
                        ]
                    },
                }}

                particlePhysics={{
                    velocity: {
                        initialRange: [[-2, -.5, 0], [2, -3.5, 0]]
                    }
                }}
            />
        );
    }

}

module.exports = ParticalEmitter;
