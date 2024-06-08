import { Box, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react";

const MinhaPagina: React.FC = () => {
  return (
    <Box display="flex" minH="100vh" background='#252525'>
    <Box flex="1" p="8" ml={{ base: "0", md: "280px" }}>
      <Flex direction="column" align="center">
        <Heading mb="8" textAlign="center" color='white'>Teste</Heading>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing="8" maxW='70%'>
            <Text color='white'>Teste</Text>
          </SimpleGrid>
      </Flex>
    </Box>
  </Box>
  );
};

export default MinhaPagina;
