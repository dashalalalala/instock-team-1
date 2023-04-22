import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'

import axios from 'axios';
import { apiUrl } from '../../utils';

function DeleteModal({selectedWarehouseName, selectedWarehouseId, isOpen, onClose}) {

    function deleteWarehouseHandler(selectedWarehouseId, onClose){
      console.log(selectedWarehouseId)
      axios
        .delete(`${apiUrl}/${selectedWarehouseId}`)
        .then((result)=> {
          return onClose();
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return (
      <>
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            closeOnOverlayClick={false}
            border="none"
            size={{base:"full", md:"40vw", lg: '80vw'}}
            height={{base:"100%", md: "60vh", lg: "60vh"}}
            >
          <ModalOverlay />
          <ModalContent
            width={{base:"100%", md: "90%", lg: "60vw"}}
            mt={{md: "230px", lg:"188px"}}
            p={{md:"40px"}}
            >
          <ModalHeader
            fontSize="32px"
            pt={{base:"64px", md:"0"}}
            >
            Delete {selectedWarehouseName} warehouse?</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pr={{md:"80px", lg:"180px"}}
            fontSize={{base:"18px"}}
          >
            <p>Please confirm you'd like to delete {selectedWarehouseName} from the list of warehouses. You won't be able to undo this action.</p>
          </ModalBody>
          <ModalFooter>
            <Button 
              colors='white' 
              bgColor="white"
              borderRadius="20"
              mr={3}
              border="1px"
              borderColor="cloud"
              textColor="slate"
              w={{base: "50%", md: "80px"}}
              onClick={onClose}>
            Cancel
            </Button>
            <Button
              bgColor="red"
              borderRadius="20"
              color="white"
              w={{base: "50%", md: "80px"}}
              onClick={() => { deleteWarehouseHandler(selectedWarehouseId, onClose);}}
              >
              Delete</Button>
          </ModalFooter>
          </ModalContent>
        </Modal>
		</>
    )
  }

export default DeleteModal;
