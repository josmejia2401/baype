import React from "react";
import { Dimensions } from "react-native";

export function getDimentions () {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return {
        width: windowWidth,
        height: windowHeight,
        width2: windowWidth/2,
        height2: windowHeight/2,
    }
}