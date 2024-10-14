import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    type: string;
    handleDeactivate: () => void;
}

const DeactivateModal = ({ isOpen, onClose, type, handleDeactivate }: Props) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                {type === 'account' && (
                    <ModalHeader fontSize='xl'>Deactivate Account</ModalHeader>
                )}
                {(type === 'clinics' || type === 'clinic') && (
                    <ModalHeader fontSize='xl'>Deactivate Dental Clinic</ModalHeader>
                )}
                {type === 'blog' && (
                    <ModalHeader fontSize='xl'>Remove Blog</ModalHeader>
                )}
                <ModalCloseButton />
                <ModalBody pt={6} pb='4rem' borderY={Border.tableBorder}>
                    {(type === 'account') && (
                        <Text fontSize='lg'>Are you sure you want to deactivate this account?</Text>
                    )}
                    {type === 'clinics' && (
                        <Text fontSize='lg'>Are you sure you want to deactivate this dental clinic?</Text>
                    )}
                    {type === 'clinic' && (
                        <Text fontSize='lg'>Are you sure you want to deactivate your dental clinic?</Text>
                    )}
                    {type === 'blog' && (
                        <Text fontSize='lg'>Are you sure you want to remove this blog?</Text>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={handleDeactivate}>
                        {type === 'blog' ? 'Remove' : 'Deactivate'}
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default DeactivateModal;