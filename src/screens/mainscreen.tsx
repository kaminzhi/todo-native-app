import * as React from "react";
import { Text, Box, Center, VStack, useColorModeValue } from "native-base";
import ThemeSwitch from "../components/theme-switch";
import NvBar from "../components/navigation";

export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <NvBar />
      <VStack space={5} alignItems="center">
        <Box bg={useColorModeValue("red.500", "yellow.500")}>
          <Text fontSize="xl">Hello</Text>
        </Box>
        <ThemeSwitch />
      </VStack>
    </Center>
  );
}
