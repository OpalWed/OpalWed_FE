import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";
import { useNavigate } from "react-router";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const SegmentModal = ({ isOpen, onClose }: Props) => {
    const navigate = useNavigate();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalHeader fontSize='xl'>Chọn phân khúc giá</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={6} pb='4rem' borderY={Border.tableBorder}>
                    <Stack gap={4}>
                        <Button borderRadius={'full'} onClick={() => navigate('low')}>Phân khúc thấp</Button>
                        <Button borderRadius={'full'} onClick={() => navigate('medium')}>Phân khúc trung bình</Button>
                        <Button borderRadius={'full'} onClick={() => navigate('high')}>Phân khúc cao</Button>
                        <Button borderRadius={'full'} onClick={() => navigate('premium')}>Phân khúc cao cấp</Button>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default SegmentModal;