import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";

import axios from "axios";
import { apiUrl, inventoriesUrl } from "../../utils";

function DeleteModal({
	selectedElement,
	selectedElementId,
	isOpen,
	onClose,
	isWarehouse,
}) {
	function deleteElementHandler(selectedElementId, onClose, isWarehouse) {
		console.log(selectedElementId);
		if (isWarehouse) {
			axios
				.delete(`${apiUrl}/${selectedElementId}`)
				.then((result) => {
					return onClose();
				})
				.catch((error) => {
					console.log(error);
				});
		} else if (!isWarehouse) {
			axios
				.delete(`${inventoriesUrl}/${selectedElementId}`)
				.then((result) => {
					return onClose();
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	function modalBodyHandler(selectedElement, isWarehouse) {
		if (isWarehouse) {
			return `Please confirm you'd like to delete ${selectedElement} from the list of warehouses. You won't be able to undo this action.`;
		} else {
			return `Please confirm you'd like to delete ${selectedElement} from the inventory list. You won't be able to undo this action.`;
		}
	}

	function modalHeaderHandler(selectedElement, isWarehouse) {
		if (isWarehouse) {
			return `Delete ${selectedElement} warehouse?`;
		} else {
			return `Delete ${selectedElement} inventory item?`;
		}
	}

	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				closeOnOverlayClick={false}
				border="none"
				size={{ base: "full", md: "40vw", lg: "80vw" }}
				height={{ base: "100%", md: "60vh", lg: "60vh" }}
			>
				<ModalOverlay opacity="100%" />
				<ModalContent
					width={{ base: "100%", md: "90%", lg: "60vw" }}
					mt={{ md: "230px", lg: "188px" }}
					p={{ md: "40px" }}
				>
					<ModalHeader
						fontSize={{ base: "28px", md: "32px", lg: "32px" }}
						pt={{ base: "64px", md: "0" }}
					>
						{modalHeaderHandler(selectedElement, isWarehouse)}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						pr={{ md: "80px", lg: "180px" }}
						fontSize={{ base: "15px", md: "16px", lg: "16px" }}
					>
						<p>{modalBodyHandler(selectedElement, isWarehouse)}</p>
					</ModalBody>
					<ModalFooter>
						<Button
							colors="white"
							bgColor="white"
							borderRadius="20"
							mr={3}
							border="1px"
							borderColor="cloud"
							textColor="slate"
							w={{ base: "50%", md: "80px" }}
							fontSize={{ base: "13px", md: "14px", lg: "14px" }}
							onClick={onClose}
						>
							Cancel
						</Button>
						<Button
							bgColor="red"
							borderRadius="20"
							color="white"
							w={{ base: "50%", md: "80px" }}
							fontSize={{ base: "13px", md: "14px", lg: "14px" }}
							onClick={() => {
								deleteElementHandler(selectedElementId, onClose, isWarehouse);
							}}
						>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default DeleteModal;
