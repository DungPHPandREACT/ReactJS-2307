import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  Button,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';

const ModalAuth = ({ initialRef, finalRef, isOpen, onClose, statusAuth }) => {
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input ref={initialRef} placeholder="Enter your email..." />
          </FormControl>

          {statusAuth === 'register' && (
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Enter your username..." />
            </FormControl>
          )}

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password..." />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            {statusAuth === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAuth;
