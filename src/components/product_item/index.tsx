import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/Product';
import { Utility } from '../../types/type.enum';

interface Prop {
    product: Product;
}

const ProductItem = ({ product }: Prop) => {
    const navigate = useNavigate();
    const navigateToDetail = (name: string) => {
        const hyphenatedName = name.replace(/ /g, '-');
        navigate(`/product/${product.utility}/${hyphenatedName}/${product.productId.toString()}`);
    };

    return (
        <Box
            w={250}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            textAlign="center"
            pos={'relative'}
            h={340}
            cursor={'pointer'}
            onClick={() => navigateToDetail(product.productName)}
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
        </Box>
    );
};

export default ProductItem;