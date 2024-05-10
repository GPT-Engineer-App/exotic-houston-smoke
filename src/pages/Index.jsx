import { Box, Button, Container, Flex, Heading, IconButton, Image, Input, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaTwitter, FaUserCircle, FaUserLock } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex minHeight="100vh" direction={{ base: "column", md: "row" }} bg={bg}>
        {/* Sidebar for Navigation */}
        <Box width={{ base: "full", md: "20%" }} color={color} bg="teal.500">
          <VStack p={5} spacing={4} align="stretch">
            <IconButton aria-label="Admin Portal" icon={<FaUserLock />} size="lg" isRound={true} />
            <IconButton aria-label="Customer Portal" icon={<FaUserCircle />} size="lg" isRound={true} />
            <Button leftIcon={<FaEnvelope />}>Subscribe</Button>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box flex="1" p={5}>
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="xl">
              Exotic Hibrid
            </Heading>
            <Text fontSize="md">Houston's premier destination for exotic smoking accessories, trendy clothing, and unique snacks and beverages.</Text>
            <Image src="https://images.unsplash.com/photo-1675117581926-9f632a7ca1e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHNob3AlMjBpbnRlcmlvcnxlbnwwfHx8fDE3MTUzNjE1NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Exotic Hibrid Interior" boxSize="100%" objectFit="cover" />
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
