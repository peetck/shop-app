import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { ShopNavigator, AuthNavigator } from "./ShopNavigator";
import StartupScreen from "../screens/StartupScreen";

const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  // let screen;
  // if (isAuth) {
  //   screen = <ShopNavigator />;
  // } else {
  //   if (didTryAutoLogin) {
  //     screen = <AuthNavigator />;
  //   } else {
  //     screen = <StartupScreen />;
  //   }
  // }

  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
      {/* {screen} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
