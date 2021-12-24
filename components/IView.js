import React, { Component } from "react";
import { View } from "react-native";
import ILayoutProps, { createShaddowFromElevation } from "./ILayoutProps";

class IView extends Component {
  render() {
    var newStyle = {
      ...this.props.style
    };

    if (typeof this.props.style === "object") {
      const elevation = this.props.style.elevation;

      if (typeof elevation === "number") {
        newStyle = createShaddowFromElevation(this.props.style);
      }
    }

    return <View {...this.props} style={[ILayoutProps(newStyle)]} />;
  }
}

export default IView;
