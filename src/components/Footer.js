import { Box, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      width="100%"
    >
      <Box
        color="#FAFAFA"
        maxWidth="1280px"
        margin="auto auto"
        fontSize='l'
      >
        <Center
          px={12}
          py={4}
        >
          © 2024 Xinhe YU. Tous droits réservés.</Center>
      </Box>
    </Box>
  )
}

export default Footer
