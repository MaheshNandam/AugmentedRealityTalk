'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroARImageMarker,
    ViroNode,
    ViroARTrackingTargets,
    ViroAnimations,
    Viro3DObject,
    ViroFlexView,
    ViroText,
    ViroImage
} from 'react-viro';

import ARGoBackButton from './ARGoBackButton';
import TextScene from './TextScene';

let localArray = [
    {
        cardPosition: [-3, 0, 0],
        imageRecognistionView: 'businessCardFront',
        cardImagePath: require('./res/businessCard/CoWrks_logo.png'),
        title1: 'CoWrks',
        title2: "India's only larger format coworking space provider",
        imageArray: [
            {
                id: 1,
                image: require('./res/businessCard/flexibleDesks.png'),
                supportText: 'FlexibleDesks'

            },
            {
                id: 2,
                image: require('./res/businessCard/dedicatedDesks.png'),
                supportText: 'DedicatedDesks'
            },
            {
                id: 3,
                image: require('./res/businessCard/privateStudios.png'),
                supportText: 'PrivateStudios'
            },
            {
                id: 4,
                image: require('./res/businessCard/virtualOffice.png'),
                supportText: 'VirtualOffice'
            }
        ]
    },
    {
        cardPosition: [2, 0, 0],
        imageRecognistionView: 'businessCardBack',
        cardImagePath: require('./res/businessCard/Mahesh.jpeg'),
        title1: 'Mahesh Nandam',
        title2: 'Developer',
        imageArray: [
            {
                id: 1,
                image: require('./res/businessCard/github.png'),
                supportText: "4 repo's"
            },
            {
                id: 2,
                image: require('./res/businessCard/medium.jpg'),
                supportText: '2 blogs'
            },
            {
                id: 3,
                image: require('./res/businessCard/npm.png'),
                supportText: '1 npm'
            },
            {
                id: 4,
                image: require('./res/businessCard/stackoverflow.jpg'),
                supportText: 'reputation- 307'
            },
        ]

    }
    
];

export default class BusinessCardImage extends Component {

    constructor() {
        super();
        this.state = {
            runAnimation: false
        }
    }

    _onAnchorFound() {
        this.setState({
            runAnimation: true
        })
    }

    footerCard(imagePath, itemText, index){
        return(
            <ViroFlexView style={styles.footerOuter} key={index}>
                <ViroImage
                    style={styles.footerImageStyle}
                    source={imagePath}
                />
                <ViroText
                    textClipMode="None"
                    text={itemText}
                    style={styles.footerTextStyle}
                />
            </ViroFlexView>
        )
    }

    imageRecognitionView(cardPosition,cardTargetView, mainImage, title1, title2, imageArray, index ){
        return(
            <ViroARImageMarker
                key={index}
                target={cardTargetView}
                onAnchorFound={() => {
                    this._onAnchorFound()
                }}>
                <ViroNode key="card">
                    <ViroNode
                        animation={{
                            name: 'animateImage',
                            run: this.state.runAnimation,
                        }}>
                        <ViroFlexView rotation={[-90, 0, 0]}
                            position={cardPosition}
                            style={styles.outerCard}>
                            <ViroFlexView style={[styles.rowView, { bottom: 0.3 }]}>
                                <ViroImage
                                    style={styles.mainImage}
                                    source={mainImage}
                                />
                                <ViroFlexView style={{ flexDirection: 'column', left: 0.2 }}>
                                    <ViroText
                                        text={title1}
                                        textClipMode="None"
                                        style={styles.name}
                                    />
                                    <ViroText
                                        text={title2}
                                        textClipMode="None"
                                        style={styles.name}
                                    />
                                </ViroFlexView>
                            </ViroFlexView>

                            <ViroFlexView style={styles.row}>
                                {
                                    imageArray.map((item, index) => {
                                        return this.footerCard(item.image, item.supportText, index)
                                    })
                                }
                            </ViroFlexView>
                        </ViroFlexView>
                    </ViroNode>
                </ViroNode>
            </ViroARImageMarker>
        )
    }

    nextPageScene = () => {
        this.props.sceneNavigator.push({ scene: TextScene })
    }

    render() {
        return (
            <ViroARScene>
                <ViroNode scale={[0.5, 0.5, 0.5]} position={[0, 0, -0.3]} onDrag={() => { }}>
                    <ARGoBackButton {...this.props} nextPage={this.nextPageScene} />
                </ViroNode>
                {
                    localArray.map((cardItem,index)=>{
                    return this.imageRecognitionView(
                                cardItem.cardPosition,
                                cardItem.imageRecognistionView,
                                cardItem.cardImagePath,
                                cardItem.title1,
                                cardItem.title2,
                                cardItem.imageArray,
                                index
                            )
                    })
                }
            </ViroARScene>
        );
    }
}

ViroARTrackingTargets.createTargets({
    "businessCardFront": {
        source: require('./res/businessCard/CardFrontView.jpg'),
        orientation: "Up",
        physicalWidth: 2 // real world width in meters
    },
    "businessCardBack": {
        source: require('./res/businessCard/CardBackView.JPG'),
        orientation: "Up",
        physicalWidth: 2 // real world width in meters
    },
});

ViroAnimations.registerAnimations({
    animateImage:{
        properties:{
            positionX: 0.05,
            opacity: 1.0
        },
        easing: 'Bounce',
        duration: 500
    }
});


const styles = StyleSheet.create({
    outerCard:{
        backgroundColor: 'transparent',
        flexDirection: 'column',
        width: 2,
        height: 1,
    },
    rowView:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 2,
        height: 0.5,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 2,
    },
    name: { 
        fontFamily: "lucida grande', tahoma, verdana, arial, sans-serif", 
        fontSize: 15, 
        fontWeight: "400", 
        fontStyle: "italic",
        textAlign: 'left',
        textAlignVertical: 'top', 
        color: "#ffffff",
        width: 2,
        height: 0.5
    },
    mainImage:{
        width: 0.4,
        height: 0.4,
        overflow: 'hidden',
    },
    footerOuter: {
        flexDirection: 'column',
        marginRight: 0.4,
    },
    footerImageStyle: {
        width: 0.4,
        height: 0.4,
        bottom: 0.1
    },
    footerTextStyle: {
        fontFamily: "lucida grande', tahoma, verdana, arial, sans-serif",
        fontSize: 10,
        fontWeight: "400",
        fontStyle: "italic",
        textAlign: 'left',
        textAlignVertical: 'top',
        color: "#26ff00",
    },
})

module.exports = BusinessCardImage;
