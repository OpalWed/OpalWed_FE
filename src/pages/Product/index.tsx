import { AbsoluteCenter, Box, Divider, HStack, Select, SimpleGrid, Stack } from "@chakra-ui/react"
import ProductItem from "../../components/product_item"
import { useEffect } from "react";
import { changeTabTitle } from "../../utils/changeTabTitle";

const ProductPage = () => {

    useEffect(() => {
        changeTabTitle('Sản phẩm');
    }, []);

    return (
        <>
            <Box w={'full'} h={'60vh'} bg={'blue'}>
                haha
            </Box>
            <Stack mt={28} w={'6xl'} mx={'auto'}>
                <Box position='relative'>
                    <Divider borderColor={'black'} />
                    <AbsoluteCenter fontSize={36} bg={'white'} px={2}>
                        Sản phẩm đề xuất
                    </AbsoluteCenter>
                </Box>
                <SimpleGrid
                    columns={4}
                    spacingX={8}
                    spacingY={6}
                    maxW={'full'}
                    my={5}
                    mx={'auto'}
                    py={8}
                >
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </SimpleGrid>

                <Box position='relative' mt={10}>
                    <Divider borderColor={'black'} />
                    <AbsoluteCenter fontSize={36} bg={'white'} px={2}>
                        Tất cả sản phẩm
                    </AbsoluteCenter>
                </Box>
                <Stack gap={4} mt={5} align={'flex-end'}>
                    <HStack w={200}>
                        <Select
                            placeholder="Sắp xếp theo"
                        >
                            <option>Phân khúc thấp</option>
                            <option>Phân khúc trung bình</option>
                            <option>Phân khúc cao</option>
                            <option>Phân khúc cao cấp</option>
                        </Select>
                    </HStack>
                    <SimpleGrid
                        columns={4}
                        spacingX={8}
                        spacingY={6}
                        maxW={'full'}
                        mx={'auto'}
                        pb={8}
                    >
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </SimpleGrid>
                </Stack>
                {/* <Stack w={'4xl'}>
                <Heading>What styles inspire you</Heading>
            </Stack> */}
            </Stack>
        </>
    )
}

export default ProductPage