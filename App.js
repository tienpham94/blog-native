import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import { Container } from "./styles/grid";
import Login from "./screens/Login/Login";

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  }
});
