import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { backgroundColor, backgroundImage, ...newBoxProps } = boxProps;
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "#FAFAFA" : "#212121"}
      backgroundImage={boxProps.backgroundImage}
      backgroundSize="cover"
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...newBoxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
