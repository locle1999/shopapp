import React from "react";
import { Text } from "react-native";
import ILayoutProps from "./ILayoutProps";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
const IText = (props) => {
  return (
    <Text {...props} style={[ILayoutProps(props.style)]}>
      {props.children}
    </Text>
  );
};

export default IText;
