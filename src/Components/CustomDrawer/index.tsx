import React, { ReactNode } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure
} from "@chakra-ui/react";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ isOpen, onClose, title, children, footer }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>
          {children}
        </DrawerBody>
        <DrawerFooter>
          {footer ? (
            footer
          ) : (
            <>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="blue">Salvar</Button>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
