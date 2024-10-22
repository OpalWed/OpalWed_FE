import { Box, Image, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react';
import ProductDetailModal from '../../../../components/modal/product_detail';
import { useWedding } from '../../../../hooks/useWedding';
import { Product } from '../../../../types/Product';
import { useState } from 'react';

interface Prop {
    type: string;
    product: Product;
}

const ProductItem = ({ type, product }: Prop) => {
    const [id, setId] = useState<number>(0);
    const { isOpen, onClose, onOpen } = useDisclosure();
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

    const isProductInArray = (array: any[], productName: string) => {
        return array.some(item =>
            item.accessoriesName === productName ||
            item.clothesName === productName ||
            item.restaurantsName === productName ||
            item.makeupName === productName ||
            item.flowersName === productName ||
            item.photographyName === productName ||
            item.decorationName === productName ||
            item.invitationsName === productName
        );
    };

    const handleAddProduct = () => {
        if (type === 'accessories') {
            if (isProductInArray(accessories, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addAccessory({ accessoriesName: product.productName });
                onClose();
            }
        } else if (type === 'clothes') {
            if (isProductInArray(clothes, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addClothes({ clothesName: product.productName });
                onClose();
            }
        } else if (type === 'restaurants') {
            if (isProductInArray(restaurants, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addRestaurant({ restaurantsName: product.productName });
                onClose();
            }
        } else if (type === 'makeup') {
            if (isProductInArray(makeup, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addMakeup({ makeupName: product.productName });
                onClose();
            }
        } else if (type === 'flowers') {
            if (isProductInArray(flowers, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addFlowers({ flowersName: product.productName });
                onClose();
            }
        } else if (type === 'weddingPhotography') {
            if (isProductInArray(weddingPhotography, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addWeddingPhotography({ photographyName: product.productName });
                onClose();
            }
        } else if (type === 'decoration') {
            if (isProductInArray(decoration, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addDecoration({ decorationName: product.productName });
                onClose();
            }
        } else if (type === 'weddingInvitations') {
            if (isProductInArray(weddingInvitations, product.productName)) {
                toast({
                    title: "Thông báo",
                    description: "Bạn đã thêm sản phẩm này vào giỏ hàng rồi.",
                    status: "warning",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Thành công",
                    description: `Bạn đã thêm ${product.productName} vào giỏ hàng.`,
                    status: "success",
                    duration: 2000,
                    position: "top",
                    isClosable: true,
                });
                addWeddingInvitations({ invitationsName: product.productName });
                onClose();
            }
        }
    };

    return (
        <Box
            minW={200}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            textAlign="center"
            pos={'relative'}
            minH={340}
            cursor={'pointer'}
            onClick={() => {
                setId(product.productId);
                onOpen();
            }}
        >
            <Image
                src={product.image || "https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png"}
                alt={product.productName}
                borderTopRadius="md"
                w={'full'}
                h={250}
                objectFit="cover"
            />
            <Text fontSize="16" fontWeight="bold" color="gold" mt={3}>
                {product.productName}
            </Text>
            <Stack gap={1} pos={'absolute'} pb={4} bottom={0} left={0} right={0}
                bgGradient="linear(to-b, white, gray.100)"
            >
                <Text fontSize="18">
                    {product.productName}
                </Text>
            </Stack>
            {isOpen && (
                <ProductDetailModal
                    isOpen={isOpen}
                    onClose={onClose}
                    id={id}
                    handleAddProduct={handleAddProduct}
                />
            )}
        </Box>
    );
};

export default ProductItem;