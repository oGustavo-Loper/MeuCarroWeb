import { ListUser } from "@/pages/ListUsers/data";
import { Box, Image, Text, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Icon, Avatar } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";

interface UserCardProps {
  data: ListUser[];
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        p="4"
        boxShadow="md"
        h='100px'
        key={index}
        borderColor={item.isActive ? "gray.500" : "red.500"}
      >
          <Avatar src={item.imageUrl} name={item.name} borderRadius="full" boxSize="60px" mr="4" />
          <Box textAlign='start'>
            <Text fontSize="lg" fontWeight="bold" color={item.isActive ? "gray.500" : "red.500"}>{item.name}</Text>
            <Text fontSize='sm' color={item.isActive ? "gray.500" : "red.500"}>{item.email}</Text>
            <Text fontSize='sm' color={item.isActive ? "gray.500" : "red.500"}>{item.phone}</Text>
          </Box>
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
              <MenuItem>
                <Icon w={18} h={18} as={FiEdit} mr={2}/>
                Editar Usuario
              </MenuItem>

              <MenuItem mt={2}
              >
                <Icon w={18} h={18} as={HiOutlineTrash} mr={2} />
                {item.isActive ? "Inativar" : "Ativar"} Usuario
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ))}
    </>
  );
};

export default UserCard;
