import { Box, SimpleGrid, Heading, Text, Flex, Button, useDisclosure, Input, Stack, InputGroup, InputRightAddon, Avatar, Icon } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar";
import UserCard from "../../Components/UserCard";
import { getFirstAndLastName } from "../../Utils/FirstAndName";
import CustomDrawer from "../../Components/CustomDrawer";
import { CiSearch } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import data from "./data";
import { InputText } from "@/Components/InputText";
import { useState } from "react";

const Linguagens: React.FC = () => {
  const { isOpen: isAddUserOpen, onOpen: onAddUserOpen, onClose: onAddUserClose } = useDisclosure();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  return (
    <>
    <Box display="flex" minH="100vh" background='#f3f3f3'>
      <Sidebar />
      <Box flex="1">
        <Flex p="8" ml={{ base: "0", md: "280px" }} textAlign='center'>
          <SimpleGrid columns={{ base: 1, md: 2}} spacing='8'>
            <Button bg='#13639D' color='white' onClick={onAddUserOpen}>Adicionar usuario</Button>
            <InputGroup size='sm'>
              <Input placeholder='Filtrar' />
              <InputRightAddon><CiSearch/></InputRightAddon>
            </InputGroup>
          </SimpleGrid>
        </Flex>
        <Flex direction="column" align="center" p="8" ml={{ base: "0", md: "280px" }} textAlign='center'>
          <Box
            w='100%'
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" marginTop='-32px'>
              <UserCard  data={data}/>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
    <CustomDrawer isOpen={isAddUserOpen} onClose={onAddUserClose} title="Adicionar novo Usuario">
      <Stack spacing="4">
        
        <Box as="label" cursor="pointer">
          <Avatar size='xl' src='https://bit.ly/broken-link'/>
          <Icon as={FiEdit} w={8} h={8} position='absolute' transform='translate(-90%, 190%)'></Icon>
          <Input type="file" display="none" />
        </Box>
        <InputText 
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText 
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText 
          label="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </Stack>
    </CustomDrawer>
    </>
  );
};

export default Linguagens;