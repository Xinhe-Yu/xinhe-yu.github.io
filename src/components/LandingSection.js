import FullScreenSection from "./layout/FullScreenSection";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import profile from '../assets/img/profile.jpg'
import { faGraduationCap, faLanguage, faCode, faMagnifyingGlass, faCheckToSlot, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImg from '../assets/img/polygon-scatter-haikei.svg'
const greeting = "Salut, c'est Xinhe !"
const bio = "Je suis ..."
const intro = [
  {
    id: "coding",
    icon: faCode,
    description: "Développeuse web",
  },
  {
    id: "research",
    icon: faGraduationCap,
    description: "Docteure en histoire de l'art",
  },
  {
    id: "language",
    icon: faLanguage,
    description: "Traductrice chinois-français",
  },
]

const current = [
  {
    id: "job",
    icon: faMagnifyingGlass,
    description: "À la recherche d'emploi",
  },
  {
    id: "autorise",
    icon: faCheckToSlot,
    description: "Avec autorisation de travail en France",
  },
]

const LandingSection = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const introListItems = intro.map(item => {
    return (
      <Box
        as="a"
        href={`/#${item.id}`}
        key={item.id}
        onClick={(event) => {
          event.preventDefault();
          handleClick(item.id);
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        px={6}
        py={4}
        border="3px solid #0f0f0f"
        borderRadius="0"
        textDecoration="none"
        backgroundColor="#F7F5FF"
        color="#0f0f0f"
        fontWeight="800"
        letterSpacing="0.05em"
        textTransform="uppercase"
        boxShadow="6px 6px 0 #0f0f0f"
        transition="transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease"
        aria-label={`Aller à la section ${item.description}`}
        _hover={{
          transform: "translate(-4px, -4px)",
          boxShadow: "10px 10px 0 #0f0f0f",
          backgroundColor: "#FFF4B8"
        }}
      >
        <Flex alignItems="center" gap={4}>
          <FontAwesomeIcon icon={item.icon} size="lg" />
          <Text>{item.description}</Text>
        </Flex>
        <FontAwesomeIcon icon={faAnglesDown} />
      </Box>
    )
  })
  const currentListItems = current.map(item => {
    return (
      <div
        key={item.id}
        style={{ padding: "", }}>
        <FontAwesomeIcon icon={item.icon} />{" "}{item.description}
      </div>
    )
  })
  return (
    <FullScreenSection
      adddashedborder={{ bottom: "true" }}
      justifyContent="center"
      alignItems="center"
      backgroundImage={bgImg}
    >
      <Box className="yellowGrid"
        justifyContent="start"
        alignItems="center"
        fontSize="lg"
      >
        <div className="profileContainer">
          <svg
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
            className="overlayStroke">
            <path d="M70.2,-22.1C79.4,5.5,67.3,40.8,44.4,56.3C21.4,71.8,-12.3,67.6,-35.3,50.4C-58.4,33.3,-70.7,3.1,-63.1,-22.3C-55.4,-47.8,-27.7,-68.6,1.4,-69.1C30.5,-69.5,61,-49.6,70.2,-22.1Z"
              fill="transparent"
              stroke="black"
              strokeWidth="6"
              transform='translate(100 100)' />
          </svg>
          <Image src={profile} />
        </div>
        <VStack align="stretch" spacing={5}>
          <Heading as="h1">{greeting}</Heading>
          <Heading as="h2" size="md" px={8}>{bio}</Heading>
          <VStack align="stretch" spacing={4}>
            {introListItems}
          </VStack>
          <hr style={{ borderTop: "2px solid #151515" }}></hr>
          <VStack align="stretch" spacing={2}>
            {currentListItems}
          </VStack>
        </VStack>
      </Box>
    </FullScreenSection>
  )
}
export default LandingSection
