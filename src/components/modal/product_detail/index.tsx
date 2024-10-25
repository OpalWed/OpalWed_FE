import { Button, FormControl, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text, useToast } from "@chakra-ui/react";
import useProductDetail from "../../../hooks/useProductDetail";
import { useEffect, useState } from "react";
import { initialProduct, Product } from "../../../types/Product";
import Loading from "../../loading";
import { Color } from "../../../styles/styles";
import { useWedding } from "../../../hooks/useWedding";
import { Concept } from "../../../types/type.enum";

interface Props {
    type: 'accessories' | 'clothes' | 'restaurants' | 'makeup' | 'flowers' | 'weddingPhotography' | 'decoration' | 'weddingInvitations';
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

const ProductDetailModal = ({ type, isOpen, onClose, id }: Props) => {
    const [product, setProduct] = useState<Product>(initialProduct);
    const [concept, setConcept] = useState<Concept | null>(null);
    const [color, setColor] = useState<string | null>(null);

    const { data, isLoading } = useProductDetail({ id });
    const {
        accessories,
        clothes,
        restaurants,
        makeup,
        flowers,
        weddingPhotography,
        decoration,
        weddingInvitations,
        addAccessory,
        addClothes,
        addRestaurant,
        addDecoration,
        addFlowers,
        addMakeup,
        addWeddingInvitations,
        addWeddingPhotography
    } = useWedding();

    const toast = useToast();

    const isProductInArray = () => {
        if (type === 'clothes') {
            return clothes.some(item => item.clothesName === product.productName && item.concept === concept && item.color === color);
        }
        if (type === 'accessories') {
            return accessories.some(item => item.accessoriesName === product.productName);
        }
        if (type === 'makeup') {
            return makeup.some(item => item.makeupName === product.productName && item.concept === concept);
        }
        if (type === 'flowers') {
            return flowers.some(item => item.flowersName === product.productName);
        }
        if (type === 'weddingPhotography') {
            return weddingPhotography.some(item => item.photographyName === product.productName && item.concept === concept);
        }
        if (type === 'decoration') {
            return decoration.some(item => item.decorationName === product.productName && item.concept === concept && item.color === color);
        }
        if (type === 'restaurants') {
            return restaurants.some(item => item.restaurantsName === product.productName && item.concept === concept);
        }
        if (type === 'weddingInvitations') {
            return weddingInvitations.some(item => item.invitationsName === product.productName && item.concept === concept);
        }
        return false;
    };

    const handleAddProduct = () => {
        if (isProductInArray()) {
            toast({
                title: "Thông báo",
                description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                status: "warning",
                duration: 2000,
                position: "top",
                isClosable: true,
            });
        } else {
            switch (type) {
                case 'accessories':
                    addAccessory({
                        accessoriesName: product.productName,
                    });
                    break;
                case 'clothes':
                    addClothes({
                        clothesName: product.productName,
                        color: color || '',
                        concept: concept || Concept.TRADITIONAL,
                    });
                    break;
                case 'restaurants':
                    addRestaurant({
                        restaurantsName: product.productName,
                        concept: concept || Concept.TRADITIONAL,
                    });
                    break;
                case 'makeup':
                    addMakeup({
                        makeupName: product.productName,
                        concept: concept || Concept.TRADITIONAL,
                    });
                    break;
                case 'flowers':
                    addFlowers({
                        flowersName: product.productName,
                    });
                    break;
                case 'weddingPhotography':
                    addWeddingPhotography({
                        photographyName: product.productName,
                        concept: concept || Concept.TRADITIONAL,
                    });
                    break;
                case 'decoration':
                    addDecoration({
                        decorationName: product.productName,
                        color: color || '',
                        concept: concept || Concept.TRADITIONAL,
                    });
                    break;
                case 'weddingInvitations':
                    addWeddingInvitations({
                        invitationsName: product.productName,
                        concept: concept || Concept.TRADITIONAL,
                    });
                    break;
                default:
                    toast({
                        title: "Lỗi",
                        description: "Không xác định loại sản phẩm.",
                        status: "error",
                        duration: 2000,
                        position: "top",
                        isClosable: true,
                    });
                    return;
            }

            toast({
                title: "Thành công",
                description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                status: "success",
                duration: 2000,
                position: "top",
                isClosable: true,
            });
        }
        onClose();
    };

    useEffect(() => {
        if (data) {
            setProduct(data);
        }
    }, [data])

    console.log(concept);


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={isLoading ? 'md' : '4xl'}
            isCentered
            closeOnEsc={isLoading ? false : true}
            closeOnOverlayClick={isLoading ? false : true}
        >
            <ModalOverlay backdropFilter={'blur(5px)'} />
            {!isLoading ? (
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody mt={8}>
                        <HStack gap={8} align={'flex-start'}>
                            <Image
                                objectFit={'fill'}
                                src={
                                    product.image || "https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png"
                                }
                                alt={product.productName}
                                width={type === 'clothes' || type === 'decoration' ? 350 : 150}
                                height={type === 'clothes' || type === 'decoration' ? 400 : 250}
                                borderTopRadius={4}
                                flex={1}
                            />
                            <Stack flex={1.5} gap={8}>
                                <Heading mt={1} fontSize={24} fontFamily={'Hatton'}>{product.productName}</Heading>
                                <Stack>
                                    <Text fontSize={18} fontFamily={'Noto Sans JP'}>Mô tả sản phẩm:</Text>
                                    <Text fontSize={16} fontFamily={'Noto Sans JP'}>{product.description}</Text>
                                </Stack>
                                {type !== 'accessories' && type !== 'flowers' && (
                                    <Stack>
                                        <Text fontSize={18} fontFamily={'Noto Sans JP'}>Ý tưởng:</Text>
                                        <HStack gap={5} w={'full'}>
                                            {Object.values(Concept).map((conceptValue) => (
                                                <Stack
                                                    key={conceptValue}
                                                    onClick={() => setConcept(conceptValue)}
                                                    cursor="pointer"
                                                    borderWidth={2}
                                                    borderColor={concept === conceptValue ? Color.hoverBlue : 'transparent'}
                                                    borderRadius={4}
                                                    padding={2}
                                                    transition="border-color 0.3s"
                                                    _hover={{ borderColor: concept === conceptValue ? Color.hoverBlue : Color.lightBlue }}
                                                >
                                                    <Image
                                                        objectFit={'fill'}
                                                        src={
                                                            conceptValue === Concept.TRADITIONAL
                                                                ? "https://thumbs.dreamstime.com/b/vector-illustration-traditional-vietnamese-wedding-couple-captures-cultural-essence-perfect-projects-needing-charming-336513429.jpg"
                                                                : conceptValue === Concept.EUROPE
                                                                    ? "https://img.freepik.com/premium-psd/bride-white-wedding-dress-with-groom-black-suit-transparent-background-png-illustration-ai-generated-happy-wedding-png-illustration_174191-3652.jpg"
                                                                    : conceptValue === Concept.MINIMALISM
                                                                        ? "https://i.pinimg.com/736x/e8/9e/ec/e89eeca835d6069209d3c7e93cb74d70.jpg"
                                                                        : "https://cdn.vectorstock.com/i/1000v/47/95/vintage-bride-and-groom-sketch-vector-51894795.jpg"
                                                        }
                                                        alt={conceptValue}
                                                        width="85px"
                                                        height="85px"
                                                        borderRadius={4}
                                                        flex={1}
                                                    />
                                                    <Text textAlign={'center'} fontSize={14} fontFamily={'Canela'}>
                                                        {conceptValue === Concept.TRADITIONAL
                                                            ? "Truyền thống"
                                                            : conceptValue === Concept.EUROPE
                                                                ? "Châu Âu"
                                                                : conceptValue === Concept.MINIMALISM
                                                                    ? "Tối giản"
                                                                    : "Cổ điển"
                                                        }
                                                    </Text>
                                                </Stack>
                                            ))}
                                        </HStack>
                                    </Stack>
                                )}
                                {(type === 'clothes' || type === 'decoration') && (
                                    <Stack>
                                        <Text fontSize={18} fontFamily={'Noto Sans JP'}>Màu sắc:</Text>
                                        <FormControl id="color">
                                            <Input
                                                type="text"
                                                value={color || ''}
                                                onChange={(e) => setColor(e.target.value)}
                                                placeholder="Color"
                                            />
                                        </FormControl>
                                    </Stack>
                                )}
                            </Stack>
                        </HStack>
                    </ModalBody>
                    <ModalFooter gap={4} w={'md'} justifyContent={'flex-end'} ml={'auto'}>
                        <Button
                            bg={Color.darkBlue}
                            _hover={{ bg: Color.darkBlueHover }}
                            color={'white'}
                            borderRadius={'full'}
                            pl={5}
                            // isDisabled={
                            //     fullName.trim() === '' ||
                            //     phone === '' ||
                            //     address === '' ||
                            //     avatar === ''
                            // }
                            onClick={handleAddProduct}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                        <Button
                            borderRadius={'full'}
                            pl={5}
                            variant={'outline'}
                            onClick={onClose}
                        >
                            Đóng
                        </Button>
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