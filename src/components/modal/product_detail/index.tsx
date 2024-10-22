import { Button, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import useProductDetail from "../../../hooks/useProductDetail";
import { useEffect, useState } from "react";
import { initialProduct, Product } from "../../../types/Product";
import Loading from "../../loading";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    id: number;
    handleAddProduct: () => void
}

const ProductDetailModal = ({ isOpen, onClose, id, handleAddProduct }: Props) => {
    const [product, setProduct] = useState<Product>(initialProduct);
    const { data, isLoading } = useProductDetail({ id });

    useEffect(() => {
        if (data) {
            setProduct(data);
        }
    }, [data])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={isLoading ? 'md' : 'lg'}
            isCentered
            closeOnEsc={isLoading ? false : true}
            closeOnOverlayClick={isLoading ? false : true}
        >
            <ModalOverlay backdropFilter={'blur(5px)'} />
            {!isLoading ? (
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody mt={8}>
                        <Image
                            style={{
                                objectFit: "fill",
                            }}
                            src={
                                product.image || "https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png"
                            }
                            alt="menu image"
                            width="100%"
                            height="250px"
                            borderTopRadius={4}
                        />
                        <Heading mt={4} size={'lg'} fontWeight={500} textAlign={'center'}>{product.productName}</Heading>
                        <Text m={2} mt={4} fontSize={'18px'}>Mô tả sản phẩm:</Text>
                        <Text ml={4}>{product.description}</Text>
                    </ModalBody>
                    <ModalFooter gap={4}>
                        <Button colorScheme="green" onClick={handleAddProduct}>Thêm vào giỏ hàng</Button>
                        <Button onClick={onClose}>Đóng</Button>
                    </ModalFooter>
                </ModalContent>
            ) : (
                <ModalContent>
                    <ModalBody p={6}>
                        <Stack h={170}>
                            <Loading />
                        </Stack>
                    </ModalBody>
                </ModalContent>
            )}
        </Modal >
    )
}

export default ProductDetailModal;