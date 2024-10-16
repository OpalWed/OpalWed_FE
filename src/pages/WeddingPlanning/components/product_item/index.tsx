import { Box, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import ProductDetailModal from '../../../../components/modal/product_detail';
import { useWedding } from '../../../../hooks/useWedding';

interface Prop {
    type: string
}

const ProductItem = ({ type }: Prop) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { addAccessory, addClothes, addRestaurant } = useWedding();

    const handleAddProduct = () => {
        if (type === 'accessories') {
            addAccessory({ accessoriesName: 'Silver Aurora Charms' });
        } else if (type === 'clothes') {
            addClothes({ clothesName: 'Silver Aurora Charms' });
        } else if (type === 'restaurants') {
            addRestaurant({ restaurantsName: 'Silver Aurora Charms' });
        }
        onClose();
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
            minH={350}
            cursor={'pointer'}
            onClick={onOpen}
        >
            <Image
                src="https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png"
                alt="Silver Aurora Charms"
                borderTopRadius="md"
                w={'full'}
                h={250}
                objectFit="cover"
            />
            <Text fontSize="16" fontWeight="bold" color="gold" mt={3}>
                LuxyDream
            </Text>
            <Stack gap={1} pos={'absolute'} pb={4} bottom={0} left={0} right={0}
                bgGradient="linear(to-b, white, gray.100)"
            >
                <Text fontSize="18">
                    Silver Aurora Charms
                </Text>
            </Stack>
            <ProductDetailModal
                isOpen={isOpen}
                onClose={onClose}
                handleAddProduct={handleAddProduct}
            />
        </Box>
    );
};

export default ProductItem;