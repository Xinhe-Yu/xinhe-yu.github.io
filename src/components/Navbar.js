/* import { useState, useEffect, useRef } from 'react'; */
import { Box, HStack, Heading } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import cvPdf from "../assets/img/cv_Xinhe_Yu.pdf";

const CvIcon = () => (
  <Box
    as="span"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="1.5rem"
    height="1.5rem"
    borderRadius="md"
    fontWeight="bold"
    fontSize="0.7rem"
    backgroundColor="#E2E8F0"
    color="#1A202C"
    textTransform="uppercase"
    lineHeight="1"
  >
    CV
  </Box>
);

const contacts = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} size="lg" />,
    linkTo: "email",
    url: "mailto: xinhe.yu.dsa@gmail.com",
  },
  {
    icon: <CvIcon />,
    linkTo: "CV",
    url: cvPdf,
    target: "_blank",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
    linkTo: "Github",
    url: "https://github.com/Xinhe-Yu",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
    linkTo: "Linkedin",
    url: "https://www.linkedin.com/in/xinhe-yu-21750418a",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
    linkTo: "Instagram",
    url: "https://www.instagram.com/xiiiiiinhe",
  }
]

const Navbar = () => {
  const contactListItems = contacts.map(item => {
    return (
      <Box
        as="a"
        href={item.url}
        key={item.linkTo}
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
        aria-label={item.linkTo}
        target={item.target}
        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {item.icon}
      </Box>
    )
  })
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={255}
      width="100vw"
    >
      <Box color="#FAFAFA" maxWidth="1280px" margin="0 auto" fontSize='xl'>
        <HStack
          px={12}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          id="navbar"
        >
          <nav>
            <Heading as="h3" size='lg'>Xinhe YU</Heading>
          </nav>
          <HStack as="nav" spacing={2} align="center">
            {contactListItems}
          </HStack>
        </HStack>
      </Box>
    </Box >
  )
}



export default Navbar
