'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    ViroARScene,
    ViroImage,
} from 'react-viro';

export default class ARGoBackButton extends Component {
    render() {
        return (
                <ViroImage
                    width={0.05}
                    height={0.05}
                    source={require('./res/back_button.png')}
                    onClick={this.props.nextPage}
                />
        );
    }

}

module.exports = ARGoBackButton;
