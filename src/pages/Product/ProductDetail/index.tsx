import { Box, Image, Text, HStack, Divider, Stack, SimpleGrid, Heading } from '@chakra-ui/react';
import ProductCarousel from '../../../components/carousel/product';
import { useEffect, useState } from 'react';
import { Border } from '../../../styles/styles';
import { changeTabTitle } from '../../../utils/changeTabTitle';

const ProductDetailPage = () => {

    const [mainImage, setMainImage] = useState<string>(
        'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png'
    );

    // Array of thumbnails
    const thumbnails = [
        'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png',
        'https://product.hstatic.net/200000567741/product/afrm000283d2cz1_1_84ecf91955ea48d5ab2f65c81fd7c1f2.jpg',
        'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png',
        'https://product.hstatic.net/200000567741/product/afrm000283d2cz1_1_84ecf91955ea48d5ab2f65c81fd7c1f2.jpg',
    ];

    // Function to handle thumbnail click
    const handleThumbnailClick = (imageSrc: string) => {
        setMainImage(imageSrc); // Set the clicked thumbnail as the main image
    };

    useEffect(() => {
        changeTabTitle('Chi tiết sản phẩm');
    }, []);

    return (
        <Stack w={'6xl'} mx="auto" mt={10} mb={20} gap={32}>
            <HStack gap={10} align={'flex-start'}>
                <HStack flex={1}>
                    <SimpleGrid
                        row={4}
                        spacingY={2}
                    >
                        {thumbnails.map((thumbnail, index) => (
                            <Image
                                key={index}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                boxSize="100px"
                                border={Border.thinLightBorder}
                                borderRadius="md"
                                objectFit="cover"
                                cursor="pointer"
                                onClick={() => handleThumbnailClick(thumbnail)}
                            />
                        ))}
                    </SimpleGrid>
                    <Image
                        src={mainImage}
                        alt="Main Display"
                        borderRadius="md"
                        h={424}
                        w={'70%'}
                        objectFit="cover"
                        border={Border.thinLightBorder}
                    />
                </HStack>
                <Box flex={1}>
                    <Text fontSize={24}>Silver Aurora Charm</Text>
                    <Divider my={5} />
                    <Text>Secondary stone type: Diamond</Text>
                    <Text>Material: 24K Silver</Text>
                    <Text>Number of stones: 1</Text>
                    <Text>Brand: PNU</Text>
                    <Text>Model number: 73625</Text>
                    <Text>Dimension: 5.5mm</Text>
                    <Text>Additional Info:
                        Diamond jewelry is now more irresistible. This new collection will attract a modern touch and the perfect gift for any occasion.
                    </Text>
                </Box>
            </HStack>

            <Stack gap={10}>
                <Heading textAlign={'center'}>Sản phẩm cùng loại</Heading>
                <ProductCarousel />
            </Stack>

        </Stack>
    );
};

export default ProductDetailPage;