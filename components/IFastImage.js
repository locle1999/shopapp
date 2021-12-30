import React from "react";
import { View } from "react-native";
import ILayoutProps from "./ILayoutProps";
import FastImage from "react-native-fast-image";
import { images } from "../public";

const IFastImage = props => {
  var newProps = { ...props };
  if (!props.base64) {
    if (props.source && props.source.uri) {
      if (!props.source.uri.startsWith("http") || props.source.uri == null) {
        newProps = {
          ...props,
          source: images.imgError
        };
      }
    }
  }

  return (
    <FastImage {...newProps} style={[ILayoutProps(props.style)]}></FastImage>
  );
};

export default IFastImage;
