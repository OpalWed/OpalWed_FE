import { useEffect } from 'react';
import { Box, Text, Heading, Button, Stack, HStack } from '@chakra-ui/react';
import StyleSlider from '../../components/style_slider';
import { changeTabTitle } from '../../../../utils/changeTabTitle';

const WeddingStylePage = () => {

    useEffect(() => {
        changeTabTitle('Trang trí tiệc cưới');
    }, []);

    return (
        <HStack w={'8xl'} m={'auto'} gap={20}>
            <Box flex={1} w={'2xl'}>
                <StyleSlider imageList={[]} />
            </Box>
            <Stack flex={1} gap={8}>
                <Stack gap={4}>
                    <Heading as="h1" size="2xl" color="navy">
                        SANG TRỌNG
                    </Heading>
                    <Text fontSize="lg">
                        Trang trí tiệc cưới
                    </Text>
                </Stack>
                <Box>
                    <Heading size="md" mb={4}>Mức độ trang trí</Heading>
                    <HStack gap={4}>
                        {["Đơn giản", "Bình thường", "Chỉn chu", "Cầu kỳ"].map((level) => (
                            <Button
                                // key={level}
                                // onClick={() => setWeddingStyle({ decorationLevel: level })}
                                // bg={decorationLevel === level ? "blue.500" : "gray.300"}
                                // color={decorationLevel === level ? "white" : "black"}
                                // _hover={{ bg: decorationLevel === level ? "blue.600" : "gray.400" }}
                                width="full"
                            >
                                {level}
                            </Button>
                        ))}
                    </HStack>

                    <Heading size="md" mt={6} mb={4}>Màu sắc chủ đạo</Heading>
                    <HStack gap={4}>
                        {["Trắng + Hồng Phấn", "Hồng + Xanh Pastel", "Màu tím", "Màu xanh lá cây"].map((color) => (
                            <Button
                                key={color}
                                // onClick={() => setWeddingStyle({ mainColor: color })}
                                // bg={mainColor === color ? "blue.500" : "gray.300"}
                                // color={mainColor === color ? "white" : "black"}
                                // _hover={{ bg: mainColor === color ? "blue.600" : "gray.400" }}
                                width="full"
                            >
                                {color}
                            </Button>
                        ))}
                    </HStack>

                    <Button
                        colorScheme="blue"
                        size="lg"
                        width="full"
                        mt={6}
                    >
                        Thêm vào kế hoạch
                    </Button>
                </Box>
            </Stack>
        </HStack>
    );
};

export default WeddingStylePage;
