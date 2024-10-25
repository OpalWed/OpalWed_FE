import { useState } from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Checkbox, Stack } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";
import { useNavigate } from "react-router";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    budget: string;
}

const DesignInformation = ({ isOpen, onClose, budget }: Props) => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState<boolean>(false); // State to manage checkbox

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalHeader fontSize='xl'>Thiết kế tiệc cưới</ModalHeader>
                <ModalCloseButton />
                <ModalBody py={6} borderY={Border.tableBorder} pos={'relative'}>
                    <Stack mb={8}>
                        <Text>
                            Thiết kế tiệc cưới sẽ trải qua 8 bước. Nếu bạn không muốn chọn dịch vụ của chúng tôi ở bước nào bạn cũng có thể nhấn nút Bỏ qua để được đi tiếp đến bước tiếp theo
                        </Text>
                    </Stack>
                    <Checkbox
                        size="lg"
                        isChecked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        pos={'absolute'}
                        bottom={2}
                    >
                        <Text fontSize={14} fontFamily={'Noto Sans JP'}>Bạn đã đọc và muốn xác nhận đăng ký thiết kế</Text>
                    </Checkbox>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme='green'
                        w={'full'}
                        onClick={() => navigate(`/wedding-planning/${budget}/clothes`)}
                        isDisabled={!isChecked}
                    >
                        Xác nhận
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default DesignInformation;
