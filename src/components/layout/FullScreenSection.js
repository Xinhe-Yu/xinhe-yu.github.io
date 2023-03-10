import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { backgroundColor, backgroundImage, borderTop, borderBottom, marginTop, marginBottom, ...newBoxProps } = boxProps;
  return (
    <VStack
      color={isDarkBackground ? "#FAFAFA" : "#212121"}
      backgroundColor={boxProps.backgroundColor}
      backgroundImage={boxProps.backgroundImage}
      backgroundSize="cover"
      borderBottom={boxProps.adddashedborder.bottom ? "12px dashed black" : null}
      borderTop={boxProps.adddashedborder.top ? "12px dashed black" : null}
      marginTop="-0.5px" // avoid tiny white space between sections
      marginBottom="-0.5px"
      overflow="hidden"
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...newBoxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
