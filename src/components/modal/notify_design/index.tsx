import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    type: string;
    handleCheckout: () => void;
}

const NotifyDesignModal = ({ isOpen, onClose, type, handleCheckout }: Props) => {
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
                <ModalBody pt={2} pb={2}>
                    {type === 'finish' ? (
                        <Text fontSize='lg'>Nếu bạn muốn thay đổi thì thay đổi ngay vì nếu xác nhận rồi thì bạn sẽ không thay đổi được nữa</Text>
                    ) : (
                        <Text fontSize='lg'>Bạn có chắc chắn bạn muốn xác nhận đăng ký</Text>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button
                        bg={'#0C2948'}
                        _hover={{ bg: '#143252' }}
                        color={'white'}
                        mr={3}
                        onClick={() => {
                            if (type === 'finish') {
                                navigate(`/wedding-planning/confirm-design`);
                            } else {
                                handleCheckout();
                            }
                        }}
                    >
                        Xác nhận
                    </Button>
                    <Button onClick={onClose}>Đóng</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default NotifyDesignModal;