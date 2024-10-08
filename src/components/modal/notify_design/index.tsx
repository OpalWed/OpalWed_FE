import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";
import { useNavigate } from "react-router-dom";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    type: string;
}

const NotifyDesignModal = ({ isOpen, onClose, type }: Props) => {
    const navigate = useNavigate();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                {type === 'finish' ? (
                    <ModalHeader fontSize='xl'>Xác nhận hoàn tất</ModalHeader>
                ) : (
                    <ModalHeader fontSize='xl'>Xác nhận đăng ký tư vấn</ModalHeader>
                )}
                <ModalCloseButton />
                <ModalBody pt={6} pb='4rem' borderY={Border.tableBorder}>
                    {type === 'finish' ? (
                        <Text fontSize='lg'>Nếu bạn muốn thay đổi thì thay đổi ngay vì nếu xác nhận rồi thì bạn sẽ không thay đổi được nữa</Text>
                    ) : (
                        <Text fontSize='lg'>Bạn có chắc chắn bạn muốn xác nhận đăng ký</Text>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='green' mr={3} onClick={() => {
                        if (type === 'finish') {
                            navigate('/wedding-concept/:concept/:segment/confirm-design');
                        } else {
                            navigate('/');
                        }
                    }}>
                        Xác nhận
                    </Button>
                    <Button onClick={onClose}>Đóng</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default NotifyDesignModal;