import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createUser } from './user-view.service';

export function CreateDialog({
  onSubmit
}: {
  onSubmit: () => void
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ userName, setUserName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ zipCode, setZipCode ] = useState('');

  return (
    <>
      <Button onClick={onOpen}>Add User</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="user-name">User name</FormLabel>
              <Input id="user-name" placeholder="James Brown" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="abc@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="zip">Zip code</FormLabel>
              <Input id="zip" placeholder="43007" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={async() => {
              await createUser({ userName, email, zipCode});
              onClose();
              onSubmit();
            }}>
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
