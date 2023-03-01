import FullScreenSection from "./layout/FullScreenSection";
import { Heading, HStack, Box } from "@chakra-ui/react";
const ResearchSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="background: #d53369;
      background: linear-gradient(90deg, #d53369 0%, #dd5b87 100%);"
      isDarkBackground
      id="research-section">
      <Box
        justifyContent="start"
        alignItems="center"
        fontSize="md"
      >
        <HStack>
          <Heading as="h1" style={{ writingMode: "vertical-rl" }}>
            ACADÉMIQUE
          </Heading>
          <Heading as="h1" style={{ writingMode: "vertical-rl" }}>
            PARCOURS
          </Heading>
        </HStack>
      </Box>
    </FullScreenSection>
  )
}

export default ResearchSection