import { Box, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import ProductDetailModal from '../../../../components/modal/product_detail';
import { Product } from '../../../../types/Product';
import { useState } from 'react';
import { Utility } from '../../../../types/type.enum';

interface Prop {
    type: 'clothes' | 'restaurantConcept' | 'makeup' | 'flowers' | 'weddingPhotography' | 'restaurantConcept' | 'weddingInvitations';
    product: Product;
}

const ProductItem = ({ type, product }: Prop) => {
    const [id, setId] = useState<number>(0);
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Box
            w={260}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            textAlign="center"
            pos={'relative'}
            h={332}
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
                objectFit="fill"
            />
            <Text fontSize="15" fontWeight="bold" color="gold" mt={3} fontFamily={'Canela'}>
                {product.utility === Utility.CLOTHES ? 'Trang phục' :
                    product.utility === Utility.MAKEUP ? 'Trang điểm' :
                        product.utility === Utility.PHOTOGRAPHY ? 'Chụp ảnh cưới' :
                            product.utility === Utility.FLOWERS ? 'Hoa cưới' :
                                product.utility === Utility.RESTAURANTCONCEPT ? 'Concept Nhà hàng' : 'Thiệp cưới'}
            </Text>
            <Stack gap={1} pos={'absolute'} pb={4} bottom={0} left={0} right={0} px={4}
                bgGradient="linear(to-b, white, gray.100)"
            >
                <Text fontSize="16" fontFamily={'Noto Sans JP'} noOfLines={1}>
                    {product.productName}
                </Text>
            </Stack>
            {isOpen && (
                <ProductDetailModal
                    type={type}
                    isOpen={isOpen}
                    onClose={onClose}
                    id={id}
                />
            )}
        </Box>
    );
};

export default ProductItem;