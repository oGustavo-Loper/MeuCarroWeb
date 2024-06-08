import { useState } from 'react';
import {
  Box, Text, VStack, Divider, useBreakpointValue, IconButton, Image,
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton,
  Button, Link, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
  Stack, Input, Select, useDisclosure, Flex, Switch
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { getFirstAndLastName } from '../../Utils/FirstAndName';
import { FiMenu, FiMoreHorizontal, FiX } from 'react-icons/fi';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { InputText } from '../InputText';
import CustomDrawer from '../CustomDrawer';


const Sidebar: React.FC = () => {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { isOpen: isSimuladorOpen, onOpen: onSimuladorOpen, onClose: onSimuladorClose } = useDisclosure();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const isActive = (path: string) => router.pathname === path;

  const users = [
    {
      fotoProfile: 'https://avatars.githubusercontent.com/u/62165053',
      name: 'Gustavo Tessmer Loper',
      email: 'theloper7@gmail.com',
      telefone: '53984222231',
      cargo: 'Administrador',
    }
  ]

  const links = [
    { name: 'Listagem de usuarios', href: '/ListUsers' },
    { name: 'Listagem de veiculos', href: '/ListVeicles' },
    { name: 'Simulador de abastecimento', href: '/SimuladorAbastecimento', onClick: onSimuladorOpen }
  ];

  return (
    <>
      {isMobile && (
        <IconButton
          icon={isSidebarOpen ? <FiX /> : <FiMenu />}
          aria-label="Toggle Sidebar"
          onClick={toggleSidebar}
          position="fixed"
          top="4"
          right="4"
          bg="#13639D"
          color="white"
          _hover={{ bg: "gray.700" }}
          zIndex="999"
        />
      )}
      <Box
        bg="#13639D"
        color="white"
        w={{ base: isSidebarOpen ? "280px" : "0", md: "280px" }}
        h="100vh"
        pt={isSidebarOpen ? "10px" : "0"}
        pb={isSidebarOpen ? "10px" : "0"}
        p={{ base: isSidebarOpen ? "20px" : "0", md: "20px" }}
        position='fixed'
        top="0"
        left="0"
        zIndex="998"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        transition="width 0.3s, padding 0.3s"
      >
        <VStack spacing="4" align="flex-start" flex="1">
          <Box w='245px'>
            <Text fontSize='xl' fontWeight='bold' textAlign='center' marginBottom='25px'>Meu Carro</Text>
            {links.map((link) => (
              <Box key={link.name} margin='0px 10px 0px 10px'>
                <Link href={link.href} onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }} target='_self'>
                  <Box
                    as="span"
                    p="2"
                    bg={isActive(link.href) ? "#0b4d7d" : "transparent"}
                    color={isActive(link.href) ? "white" : "gray.200"}
                    _hover={{ bg: "#0b4d7d", color: "white" }}
                    display="block"
                    fontWeight={isActive(link.href) ? "bold" : "normal"}
                  >
                    {link.name}
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </VStack>
        {users.map((user) => (
          <Box key={user.name} mt="auto">
            <Box display="flex" alignItems="center">
              <Image src={user.fotoProfile} alt={getFirstAndLastName(user.name)} borderRadius="full" boxSize="40px" mr="4" />
              <VStack alignItems="flex-start" gap={0}>
                <Text fontSize={18} fontWeight='bold'>{getFirstAndLastName(user.name)}</Text>
                <Text fontSize={14}>{user.cargo}</Text>
              </VStack>
              <Popover isLazy>
                <PopoverTrigger>
                  <IconButton icon={<FiMoreHorizontal />} aria-label="Mais Opções" variant="ghost" />
                </PopoverTrigger>
                <PopoverContent w="105px" h="35px">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <Button onClick={onDrawerOpen}>Editar Perfil</Button>
                </PopoverContent>
              </Popover>
            </Box>
          </Box>
        ))}
      </Box>

      <CustomDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} title="Editar Perfil">
        <Stack spacing="4">
          <Box textAlign="center">
            <Image src={users[0].fotoProfile} alt={getFirstAndLastName(users[0].name)} borderRadius="full" boxSize="150px" mx="auto" mb="4" />
            <Stack pb='15px'>
              <InputText 
                label="Nome"
                value={users[0].name}
                onChange={(e) => setNome(e.target.value)}
              />
            </Stack>
            <Stack pb='15px'>
              <InputText 
                label="Telefone"
                value={users[0].telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </Stack>
            <Stack pb='15px'>
              <InputText 
                label="E-mail"
                value={users[0].email}
                onChange={(e) => setNome(e.target.value)}
              />
            </Stack>
          </Box>
        </Stack>
    </CustomDrawer>

      <Drawer isOpen={isSimuladorOpen} placement="right" size='sm' onClose={onSimuladorClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Simulador de Abastecimento</DrawerHeader>
          <DrawerBody>
            <Stack spacing="4">
              <Text>Conteúdo do Simulador de Abastecimento aqui</Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
