import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack alignItems="center" space={2}>
      <Text>Dark Mode</Text>
      <Switch
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>Light Mode</Text>
    </HStack>
  );
}
