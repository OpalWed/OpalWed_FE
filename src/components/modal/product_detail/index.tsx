import { Button, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text } from "@chakra-ui/react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    handleAddProduct: () => void
}

const ProductDetailModal = ({ isOpen, onClose, handleAddProduct }: Props) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody mt={8}>
                    <Image
                        style={{
                            objectFit: "fill",
                        }}
                        src={
                            "https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png"
                        }
                        alt="menu image"
                        width="100%"
                        height="250px"
                        borderTopRadius={4}
                    />
                    <Heading m={2} size={'lg'}>{'Silver Aurora Charms'}</Heading>
                    <Text m={2} mt={4} fontSize={'18px'}>Mô tả sản phẩm</Text>
                </ModalBody>
                <ModalFooter gap={4}>
                    <Button colorScheme="green" onClick={handleAddProduct}>Thêm vào giỏ hàng</Button>
                    <Button onClick={onClose}>Đóng</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default ProductDetailModal;