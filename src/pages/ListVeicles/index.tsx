import { Box, SimpleGrid, Heading, Flex, Button, useDisclosure, Input, Stack } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar";
import UserCard from "../../Components/UserCard";
import CustomDrawer from "../../Components/CustomDrawer";
import TableVeicles from "../../Components/TableVeicles";
import data from "../../Components/TableVeicles/data"
import { InputText } from "@/Components/InputText";
import { useState } from "react";
import { InputSelect } from "@/Components/InputSelect";
import SelectCar from "@/Components/SelectCar";
import data2 from "../ListUsers/data";

const Linguagens: React.FC = () => {
  const { isOpen: isAddUserOpen, onOpen: onAddUserOpen, onClose: onAddUserClose } = useDisclosure();
  const [placa, setPlaca] = useState('');
  const [motorista, setMotorista] = useState<string>('');

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMotorista(event.target.value);
  };

  return (
    <>
    <Box display="flex" minH="100vh" background='#f3f3f3'>
      <Sidebar />
      <Box flex="1">
        <Flex p="8" ml={{ base: "0", md: "280px" }} textAlign='center'>
          <SimpleGrid columns={{ base: 1, md: 2}} spacing='8'>
            <Button bg='#13639D' color='white' onClick={onAddUserOpen}>Adicionar Veiculo</Button>
          </SimpleGrid>
        </Flex>
        <Flex direction="column" align="center" p="8" ml={{ base: "0", md: "280px" }} textAlign='center'>
          <Box
            w='100%'
          >
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing="8" marginTop='-32px'>
                  <TableVeicles data={data}/>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
    <CustomDrawer isOpen={isAddUserOpen} onClose={onAddUserClose} title="Adicionar novo Veiculo">
      <Stack spacing="4">
        <SelectCar />
        <InputText 
          label="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
        <InputSelect
          label="Selecione um motorista"
          value={motorista}
          onChange={handleUserChange}
          options={data2.map(user => ({
            label: user.name,
            value: user.id
          }))}
        />
      </Stack>
    </CustomDrawer>
    </>
  );
};

export default Linguagens;