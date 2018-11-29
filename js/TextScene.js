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
import ARPlaneSelector from './ARPlaneSelector';
import ParticalEmitter from './ParticalEmitter';


export default class TextScene extends Component {

    constructor() {
        super();
        // Set initial state here
        this.state = {
            cowrks_text: 'CoWrks',
            react_bangalore: 'ReactJS Bangalore',
            lamboSource: [0.5, 0.5, 0.5]
        };
    }

    nextPageScene = () => {
        this.props.sceneNavigator.push({ scene: ARPlaneSelector })
    }

    render() {
        return (
            <ViroARScene>
                <ViroNode scale={[0.5, 0.5, 0.5]} position={[0, 0, -0.3]} onDrag={() => { }}>
                    <ARGoBackButton {...this.props} nextPage={this.nextPageScene} />
                </ViroNode>

                <ViroNode dragType="FixedDistance" onDrag={()=>{}}>
                    <ViroText
                        scale={[5, 5, 5]}
                        style={styles.helloWorldTextStyle}
                        position={[-20, 0, -8]}
                        rotation={[0,50,0]}
                        extrusionDepth={20}
                        materials={["frontMaterial", "backMaterial", "sideMaterial"]}
                        text={this.state.react_bangalore}
                    />
                </ViroNode>

                <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={90}
                    direction={[0, -1, -.2]}
                    position={[0, 3, 1]}
                    color="#aaaaaa"
                    castsShadow={true}
                />
                <ViroBox
                    animation={{ name: 'doAnimation', run: true, loop: true }}
                    position={[20, -4, -5]}
                    scale={[3, 3, 3]}
                    materials={["grid"]}
                    rotation={[0, 50, 0]} />

                <ViroNode  position={[0, 0, -15]} dragType={'FixedDistance'}>
                    <Viro3DObject
                        source={require('./res/Lambo/Lamborghini_Aventador.vrx')}
                        resources={[require('./res/Lambo/Lamborginhi_Aventador_diffuse.jpeg'),
                        require('./res/Lambo/Lamborginhi_Aventador_gloss.jpeg'),
                        require('./res/Lambo/Lamborginhi_Aventador_spec.jpeg')
                        ]}
                        rotation={[0, 100, 0]}
                        position={[50, -150, -720]}
                        scale={[1,1,1]}
                        type="VRX"
                        dragType={'FixedDistance'}
                        onPinch={(pinchState, scaleFactor, source) => this._onPinch(pinchState, scaleFactor, source)}
                    />
                </ViroNode>


                <ViroNode rotation={[0, 0, 0]} position={[0, 0, -2]} dragType={'FixedDistance'} onDrag={() => { }}>
                    <ViroAmbientLight color="#FFFFFF" />
                    <ViroSpotLight
                        innerAngle={5}
                        outerAngle={90}
                        direction={[0, -1, -.2]}
                        position={[0, 5, 1]}
                        color="#ffffff"
                        castsShadow={true}
                    />
                    <Viro3DObject
                        source={require('./res/emoji_smile/emoji_smile.vrx')}
                        resources={[
                            require('./res/emoji_smile/emoji_smile_diffuse.png'),
                            require('./res/emoji_smile/emoji_smile_normal.png'),
                            require('./res/emoji_smile/emoji_smile_specular.png'),
                        ]}
                        position={[1, -1, -2]}
                        scale={[0.5, 0.5, 0.5]}
                        type="VRX"
                    />
                    <ViroQuad
                        rotation={[-90, 0, 0]}
                        width={.5} height={.5}
                        arShadowReceiver={true}
                        lightReceivingBitMask={2} />
                </ViroNode>

                <ParticalEmitter />
            </ViroARScene>
        );
    }
}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#26ff00',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: 100,
        height: 50
    },
});

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/grid_bg.jpg'),
    },
    frontMaterial: {
        diffuseColor: '#36D1DC',
    },
    backMaterial: {
        diffuseColor: '#f2fcfe',
    },
    sideMaterial: {
        diffuseColor: '#212121',
    }
});

ViroAnimations.registerAnimations({
    doAnimation: {
        duration: 500,
        properties: {
            rotateX: '+=90'
        },
        easing: 'EaseInEaseOut'
    }
});

module.exports = TextScene;
