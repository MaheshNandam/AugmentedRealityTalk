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

import ARGoBackButton from './ARGoBackButton';
import PortalScene from './PortalScene';

export default class ARPlaneSelector extends Component {

    constructor() {
        super();
        this.state= {
            runAnimation: true,
        }
    }

    _onTappedTurkey() {
        this.setState({
            runAnimation: !this.state.runAnimation,
        })
    }

    nextPageScene = () => {
        this.props.sceneNavigator.push({ scene: PortalScene })
    }

    render() {
        return (
            <ViroARScene>
                <ViroNode scale={[0.5,0.5,0.5]} position={[0,0,-0.3]} onDrag={()=>{}}>
                    <ARGoBackButton {...this.props} nextPage={this.nextPageScene} />
                </ViroNode>
                <ViroARPlaneSelector>
                    <ViroNode position={[0, -1, -1]} dragType="FixedToWorld" onDrag={() => { }}>
                        <ViroSpotLight
                            innerAngle={5}
                            outerAngle={25}
                            direction={[0, -1, 0]}
                            position={[0, 5, 0]}
                            color="#ffffff"
                            castsShadow={true}
                            shadowMapSize={2048}
                            shadowNearZ={2}
                            shadowFarZ={7}
                            shadowOpacity={.7}
                        />

                        <Viro3DObject
                            source={require('./res/turkeyman_anim/turkeyman_anim.vrx')}
                            resources={[require('./res/turkeyman_anim/turkeyman_diffuse.jpg'),
                            require('./res/turkeyman_anim/turkeyman_normal.jpg'),
                            require('./res/turkeyman_anim/turkeyman_specular.jpg')]}
                            position={[0, 0, 0]}
                            scale={[.5, .5, .5]}
                            type="VRX"
                            onClick={this._onTappedTurkey}
                            animation={{ name: "02", run: this.state.runAnimation, loop: true, }}
                        />

                        <ViroOmniLight
                            intensity={300}
                            position={[-10, 10, 1]}
                            color={"#FFFFFF"}
                            attenuationStartDistance={20}
                            attenuationEndDistance={30} />

                        <ViroOmniLight
                            intensity={300}
                            position={[10, 10, 1]}
                            color={"#FFFFFF"}
                            attenuationStartDistance={20}
                            attenuationEndDistance={30} />

                        <ViroOmniLight
                            intensity={300}
                            position={[-10, -10, 1]}
                            color={"#FFFFFF"}
                            attenuationStartDistance={20}
                            attenuationEndDistance={30} />

                        <ViroOmniLight
                            intensity={300}
                            position={[10, -10, 1]}
                            color={"#FFFFFF"}
                            attenuationStartDistance={20}
                            attenuationEndDistance={30} />

                        <ViroSpotLight
                            position={[0, 8, -2]}
                            color="#ffffff"
                            direction={[0, -1, 0]}
                            intensity={50}
                            attenuationStartDistance={5}
                            attenuationEndDistance={10}
                            innerAngle={5}
                            outerAngle={20}
                            castsShadow={true}
                        />

                    </ViroNode>
                </ViroARPlaneSelector>
            </ViroARScene>
        );
    }

}


module.exports = ARPlaneSelector;
