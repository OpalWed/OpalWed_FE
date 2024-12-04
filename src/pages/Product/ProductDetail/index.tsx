import { Box, Image, Text, HStack, Divider, Stack, Heading } from '@chakra-ui/react';
import ProductCarousel from '../../../components/carousel/product';
import { useEffect, useState } from 'react';
import { Border } from '../../../styles/styles';
import { changeTabTitle } from '../../../utils/changeTabTitle';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../hooks/useProductDetail';
import { initialProduct, Product } from '../../../types/Product';
import Loading from '../../../components/loading';

const ProductDetailPage = () => {
    const param = useParams<{ id: string }>();
    const { data, isLoading, refetch } = useProductDetail({ id: parseInt(param.id || '') });
    const [product, setProduct] = useState<Product>(initialProduct);
    const [id, setId] = useState<number>(0);

    // Function to handle thumbnail click
    // const handleThumbnailClick = (imageSrc: string) => {
    //     setMainImage(imageSrc); // Set the clicked thumbnail as the main image
    // };

    useEffect(() => {
        if (param.id) {
            refetch && refetch();
            setId(parseInt(param.id));
        }
    }, [param.id]);

    useEffect(() => {
        if (product) {
            changeTabTitle(product.productName);
        }
    }, [product]);

    useEffect(() => {
        if (data) {
            setProduct(data);
        }
    }, [data])

    return (
        <>
            {!isLoading ? (
                <Stack w={'6xl'} mx="auto" mt={10} mb={20} gap={32}>
                    <HStack gap={10} align={'flex-start'}>
                        <HStack flex={1}>
                            {/* <SimpleGrid
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
                    </SimpleGrid> */}
                            <Image
                                src={product.image}
                                alt="Main Display"
                                borderRadius="md"
                                h={424}
                                w={'70%'}
                                objectFit="cover"
                                border={Border.thinLightBorder}
                            />
                        </HStack>
                        <Box flex={1}>
                            <Text fontSize={24} fontFamily={'Hatton'}>{product.productName}</Text>
                            <Divider my={5} />
                            <Heading textAlign={'center'} fontFamily={'Hatton'} fontSize={20} mb={4}>Mô tả sản phẩm</Heading>
                            <Text fontFamily={'Noto Sans JP'} ml={3}>
                                <div className="product-des" dangerouslySetInnerHTML={{ __html: product.description }} />
                            </Text>
                        </Box>
                    </HStack>

                    <Stack gap={10}>
                        <Heading textAlign={'center'} fontFamily={'Hatton'}>Sản phẩm cùng loại</Heading>
                        <ProductCarousel utility={product.utility} id={id} />
                    </Stack>
                </Stack>
            ) : (
                <Stack m={'auto'}>
                    <Loading />
                </Stack>
            )}
        </>
    );
};

export default ProductDetailPage;