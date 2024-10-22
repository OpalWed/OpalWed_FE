import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";
import { useNavigate } from "react-router";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    budget: string;
}

const DesignInformation = ({ isOpen, onClose, budget }: Props) => {
    const navigate = useNavigate();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalHeader fontSize='xl'>Thiết kế tiệc cưới</ModalHeader>
                <ModalCloseButton />
                <ModalBody py={6} borderY={Border.tableBorder}>
                    <Text fontSize='lg'>Bạn có chắc chắn bạn muốn xác nhận đăng ký</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='green' w={'full'} onClick={() => navigate(`/wedding-planning/${budget}/clothes`)}>
                        Xác nhận
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default DesignInformation;