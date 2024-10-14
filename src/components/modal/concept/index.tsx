import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";
import { useNavigate } from "react-router";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ConceptModal = ({ isOpen, onClose }: Props) => {
    const navigate = useNavigate();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalHeader fontSize='xl'>Chọn ý tưởng tiệc cưới</ModalHeader>
                <ModalCloseButton />
                <ModalBody py={6} borderY={Border.tableBorder}>
                    <Stack gap={4}>
                        <Button borderRadius={'full'} onClick={() => navigate('wedding-planning/europe/wedding-information')}>Phong cách Châu Âu (Europe)</Button>
                        <Button borderRadius={'full'} onClick={() => navigate('wedding-planning/minimalism/wedding-information')}>Phong cách tối giản (Minimalism)</Button>
                        <Button borderRadius={'full'} onClick={() => navigate('wedding-planning/vintage/wedding-information')}>Phong cách cổ điển (Vintage)</Button>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default ConceptModal;