import FullScreenSection from "./layout/FullScreenSection";
import { Heading, HStack } from "@chakra-ui/react";
const CodingSection = () => {
  return (
    <FullScreenSection
      backgroundColor="background: #d53369;
      background: linear-gradient(90deg, #d53369 0%, #dd5b87 100%);"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8} id="coding-section">
      <HStack>
        <Heading as="h1" style={{ writingMode: "vertical-rl" }}>
          INFORMATIQUE
        </Heading>
        <Heading as="h1" style={{ writingMode: "vertical-rl" }}>
          COMPÉTENCE
        </Heading>
      </HStack>
    </FullScreenSection>
  )
}

export default CodingSection