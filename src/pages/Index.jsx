import { Box, Button, Container, Flex, Heading, IconButton, Image, Input, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaTwitter, FaUserCircle, FaUserLock } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("brand.800", "brand.900");
  const color = useColorModeValue("brand.700", "brand.800");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex minHeight="100vh" direction={{ base: "column", md: "row" }} bg={bg}>
        {/* Sidebar for Navigation */}
        <Box width={{ base: "full", md: "20%" }} color="white" bg="lime">
          <VStack p={5} spacing={4} align="stretch">
            <IconButton aria-label="Admin Portal" icon={<FaUserLock />} size="lg" isRound={true} />
            <IconButton aria-label="Customer Portal" icon={<FaUserCircle />} size="lg" isRound={true} />
            <Button leftIcon={<FaEnvelope />}>Subscribe</Button>
            <Button leftIcon={<FaUserCircle />}>About Us</Button>
            <Button leftIcon={<FaUserCircle />}>Products</Button>
            <Button leftIcon={<FaUserCircle />}>Updates</Button>
          </VStack>
          <VStack p={5} spacing={4} align="stretch">
            <IconButton aria-label="Admin Portal" icon={<FaUserLock />} size="lg" isRound={true} />
            <IconButton aria-label="Customer Portal" icon={<FaUserCircle />} size="lg" isRound={true} />
            <Button leftIcon={<FaEnvelope />}>Subscribe</Button>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box flex="1" p={5} bg="black" color="white" fontFamily="monospace">
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="xl">
              Exotic Hibrid
            </Heading>
            <Text fontSize="md">Houston's premier destination for exotic smoking accessories, trendy clothing, and unique snacks and beverages.</Text>
            <Image src="https://images.unsplash.com/photo-1583946097887-6b1d9d0b8dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBzbW9rZSUyMHNob3B8ZW58MHx8fHwxNzE1MzYxNTU4&ixlib=rb-4.0.3&q=80&w=1080" alt="Exotic Smoke Shop Interior" boxSize="100%" objectFit="cover" />
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Input placeholder="Enter your email for updates" size="md" />
              <Button colorScheme="teal" size="md">
                Subscribe
              </Button>
            </Stack>
            <Flex justify="space-between" mt={4}>
              <IconButton aria-label="Follow on Instagram" icon={<FaInstagram />} size="lg" isRound={true} />
              <IconButton aria-label="Follow on Twitter" icon={<FaTwitter />} size="lg" isRound={true} />
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
