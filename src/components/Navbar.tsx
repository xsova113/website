import { Box, Flex, Heading, Link, Text, Button, useColorMode, Stack, Image, Center, SimpleGrid, VStack } from "@chakra-ui/react";

import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex bg={colorMode === "dark" ? "black.500" : "white.500"} px={12} py={6} justifyContent="space-between" alignItems="center">
      <Flex align="center">
        <Box flex="1">
          <Image src="https://i.imgur.com/Bd6NzVy.png" alt="Email" height="1.5em" objectFit="cover" />
        </Box>
        <Link as={NextLink} href="/" color={colorMode === "dark" ? "white" : "black"} mx={2} fontWeight="bold">
          ZK EMAIL
        </Link>
      </Flex>
      <Box>
        <Link as={NextLink} href="/blog" color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Blog
        </Link>
        <Link as={NextLink} href="/docs" color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Docs
        </Link>
        <Link as={NextLink} href="/demo " color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Demo
        </Link>
        <Link as={NextLink} href="/contact" color={colorMode === "dark" ? "white" : "black"} mx={4}>
          Contact
        </Link>
        <Button onClick={toggleColorMode} mx={4}>
          {colorMode === "dark" ? <FaMoon /> : <FaSun />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
