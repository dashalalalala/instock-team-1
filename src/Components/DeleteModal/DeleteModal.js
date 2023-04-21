import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'


function DeleteModal({currentWarehouseName, isOpen, onClose}) {
    return (
      <>
							<Modal 
								isOpen={isOpen} 
								onClose={onClose}
								border="none"
								isCentered
								size="full"
								>
							<ModalOverlay />
							<ModalContent
								width="100vw"
								height="100vh"
								>
							<ModalHeader
								fontSize="32px"
								pt="56px"
								>
								Delete {currentWarehouseName} warehouse?</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<p>Please confirm you'd like to delete the {currentWarehouseName} from the list of warehouses. You won't be able to undo this action.</p>
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
									w="50%"
									onClick={onClose}>
								Cancel
								</Button>
								<Button
									bgColor="red"
									borderRadius="20"
									color="white"
									w="50%"
									>
									Delete</Button>
							</ModalFooter>
							</ModalContent>
						</Modal>
						</>
    )
  }

export default DeleteModal;
