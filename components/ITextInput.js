import React from "react";
import { Dimensions, Platform, PixelRatio } from "react-native";
import { TextInput } from "react-native";
import ILayoutProps from "./ILayoutProps";
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
const ITextInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[
        ILayoutProps(props.style),
        {
          padding: props.style.padding
            ? props.style.padding
            : Platform.OS === "android"
              ? 0
              : 3,
        },
      ]}
    >
      {props.children}
    </TextInput>
  );
};

export default ITextInput;
