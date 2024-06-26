import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";

const Index = () => {
  // Dummy Spotify status, replace with actual data fetching logic if needed
  const spotifyStatus = "Listening to: Señorita by Shawn Mendes & Camila Cabello";

  return (
    <Box p={5} bg="gray.900" color="whiteAlpha.900">
      <Flex justifyContent="center" mb={5}>
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} w={8} h={8} color="whiteAlpha.800" m={2} />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} w={8} h={8} color="whiteAlpha.800" m={2} />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} w={8} h={8} color="whiteAlpha.800" m={2} />
        </Link>
      </Flex>
      <Flex justifyContent="center">
        <Icon as={FaSpotify} w={6} h={6} color="whiteAlpha.800" mr={2} />
        <Text fontSize="lg">{spotifyStatus}</Text>
      </Flex>
    </Box>
  );
};

export default Index;
