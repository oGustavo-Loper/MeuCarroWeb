import { Box, Image, Text, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Icon, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, useDisclosure, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Stack, Button, DrawerFooter } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { TableData } from "./data";
import { useState } from "react";

interface TableVeiclesProps {
    data: TableData[];
}


const TableVeicles: React.FC<TableVeiclesProps> = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedVehicle, setSelectedVehicle] = useState<TableData | null>(null);

    const handleViewMore = (vehicle: TableData) => {
        setSelectedVehicle(vehicle);
        onOpen();
    };
    return (
    <>
      <TableContainer>
        <Table variant='striped'>
            <Thead>
            <Tr>
                <Th>Id</Th>
                <Th>Tipo</Th>
                <Th>Placa</Th>
                <Th>Marca</Th>
                <Th>Modelo</Th>
                <Th>Ano</Th>
                <Th>Proprietario</Th>
                <Th>Ultima atualização</Th>
                <Th>Opção</Th>
            </Tr>
            </Thead>
            <Tbody>
            {data.map((item, index) => (
                <Tr key={index} borderTop='2px solid black'>
                    <Td>{item.id}</Td>
                    <Td>{item.tipo}</Td>
                    <Td>{item.placa}</Td>
                    <Td>{item.marca}</Td>
                    <Td>{item.modelo}</Td>
                    <Td>{item.ano}</Td>
                    <Td>{item.proprietario}</Td>
                    <Td>{item.updateAt}</Td>
                    <Td>
                    <Menu >
                        <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<AiOutlineEllipsis />}
                        />
                        <MenuList
                            border="none"
                            boxShadow="none"
                            bg='gray[100]'
                            h="100%"
                        >
                        <MenuItem onClick={() => handleViewMore(item)}>
                            <Icon w={18} h={18} as={FiEdit} mr={2} />
                            Ver mais informações
                        </MenuItem>
                        <MenuItem mt={2}
                        >
                            <Icon w={18} h={18} as={HiOutlineTrash} mr={2} />
                            Inativar Veiculo
                        </MenuItem>
                        </MenuList>
                    </Menu>
                    </Td>
                </Tr>
            ))}
            </Tbody>
        </Table>
        </TableContainer>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerHeader>Detalhes do Veículo</DrawerHeader>
            <DrawerBody>
                {selectedVehicle && (
                <Stack spacing="4">
                    <Text><strong>ID:</strong> {selectedVehicle.id}</Text>
                    <Text><strong>Tipo:</strong> {selectedVehicle.tipo}</Text>
                    <Text><strong>Placa:</strong> {selectedVehicle.placa}</Text>
                    <Text><strong>Marca:</strong> {selectedVehicle.marca}</Text>
                    <Text><strong>Modelo:</strong> {selectedVehicle.modelo}</Text>
                    <Text><strong>Ano:</strong> {selectedVehicle.ano}</Text>
                    <Text><strong>Proprietário:</strong> {selectedVehicle.proprietario}</Text>
                    <Text><strong>Última atualização:</strong> {selectedVehicle.updateAt}</Text>
                    <Text><strong>Quilometragem: </strong>{selectedVehicle.medias.quilometragemAtual}</Text>
                </Stack>
                )}
            </DrawerBody>
            <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                Fechar
                </Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  );
};

export default TableVeicles;
