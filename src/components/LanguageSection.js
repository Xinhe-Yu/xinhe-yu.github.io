import FullScreenSection from "./layout/FullScreenSection";
import { Heading, HStack } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookOpen, faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farStarRegular } from "@fortawesome/free-regular-svg-icons";
import bgImg from "../assets/img/layered-peaks-haikei.svg"
const LanguageSection = () => {
  return (
    <FullScreenSection
      adddashedborder={{ bottom: "true", top: "true" }}
      backgroundImage={bgImg}
      justifyContent="center"
      alignItems="center"
      id="language-section">
      <HStack>
        <Heading as="h1">INTÉRÊTS</Heading>
        <Heading as="h1"> LINGUISTIQUES</Heading>
      </HStack>
    </FullScreenSection>
  )
}

export default LanguageSection