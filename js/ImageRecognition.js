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

export default class ImageRecognition extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            loopState: false,
            animationName: "01",
            pauseUpdates: false,
            playAnim: false,
            modelAnim: false
        };

        // bind 'this' to functions
        this._onAnchorFound = this._onAnchorFound.bind(this);
        this._onModelLoad = this._onModelLoad.bind(this);
    }

    _onAnchorFound() {
        this.setState({ pauseUpdates: true, playAnim: true, modelAnim: true })
    }

    _onModelLoad() {
        setTimeout(() => {
            this.setState({

            })
        }, 3000);
    }

    _onLoadStart(){
        alert('Image recognisition process started')
    }

    render() {
        return (
            <ViroARImageMarker
                target={"poster"}
                onAnchorFound={this._onAnchorFound}
                pauseUpdates={this.state.pauseUpdates}>
                <ViroNode
                    // position={[0, 0, 0]}
                    // scale={[0, 0, 0]}
                    // rotation={[-90, 0, 0]}
                    // dragType="FixedToWorld"
                    // onDrag={() => { }}
                    animation={{ name: 'scaleModel', run: this.state.playAnim }}>
                    <Viro3DObject
                        type='VRX'
                        source={require('./res/black_panther/object_bpanther_anim.vrx')}
                        resources={[require('./res/black_panther/object_bpanther_Base_Color.png'),
                        require('./res/black_panther/object_bpanther_Metallic.png'),
                        require('./res/black_panther/object_bpanther_Mixed_AO.png'),
                        require('./res/black_panther/object_bpanther_Normal_OpenGL.png'),
                        require('./res/black_panther/object_bpanther_Roughness.png')]}
                        position={[0, 0, -5]}
                        scale={[2, 2, 1]}
                        animation={{
                            name: this.state.animationName,
                            run: this.state.modelAnim,
                            loop: this.state.loopState,
                            onFinish: this._onFinish
                        }}
                        onLoadStart={this._onLoadStart}
                        onLoadEnd={this._onModelLoad}
                        onError={this._onError} 
                    />
                </ViroNode>

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
                <ViroQuad
                    rotation={[-90, 0, 0]}
                    position={[0, -1.6, 0]}
                    width={5} height={5}
                    arShadowReceiver={true}
                />
            </ViroARImageMarker>
        );
    }
}

ViroARTrackingTargets.createTargets({
    "poster": {
        source: require('./res/black_panther/blackpanther.jpg'),
        orientation: "Up",
        physicalWidth: 0.7 // real world width in meters
    },
});

ViroAnimations.registerAnimations({
    scaleModel: {
        properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
        duration: 1000
    },
});

module.exports = ImageRecognition;
