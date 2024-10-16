import { Box, Text, HStack, Stack, Divider, Button, useDisclosure, Icon } from "@chakra-ui/react";
import ConfirmDesignProductItem from "../../components/confirm_design_product_item";
import NotifyDesignModal from "../../../../components/modal/notify_design";
import { useWedding } from "../../../../hooks/useWedding";
import { FaGem, FaMoneyBillWave } from "react-icons/fa6";
import { ColorLens } from "@mui/icons-material";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { formatDate } from "../../../../utils/formatDate";
import { useEffect } from "react";
import { changeTabTitle } from "../../../../utils/changeTabTitle";

const ConfirmDesignPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { fullName, budget, place, weddingDate, decorationLevel, mainColor, accessories, clothes, restaurants } = useWedding();

    useEffect(() => {
        changeTabTitle('Đăng ký tư vấn');
    }, []);

    return (
        <HStack gap={10} my={10} w={'6xl'} mx={'auto'} align={'flex-start'}>
            <Box
                flex="1"
                m="10px"
                p="20px"
                pb="0"
                bg="white"
                borderRadius="8px"
                border="1px solid #ccc"
            >
                <Text color="#4CAF50" fontSize="21px" mt="0" mb="20px">
                    Sản phẩm
                </Text>
                <Divider mb={3} />
                <Box maxHeight="645px" overflowY="auto" css={{
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },
                    '&::-webkit-scrollbar-thumb': { backgroundColor: 'gainsboro', borderRadius: '4px' },
                    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#d1cece' }
                }}>
                    {accessories.map(a => (
                        <ConfirmDesignProductItem productName={a.accessoriesName} />
                    ))}
                    {clothes.map(c => (
                        <ConfirmDesignProductItem productName={c.clothesName} />
                    ))}
                    {restaurants.map(r => (
                        <ConfirmDesignProductItem productName={r.restaurantsName} />
                    ))}
                </Box>
            </Box>

            <Box
                flex="1"
                m="10px"
                p="20px"
                bg="white"
                borderRadius="8px"
                border="1px solid #ccc"
            >
                <Box
                    bg="#fff"
                    borderRadius="xl"
                    boxShadow="lg"
                    py={4}
                    px={8}
                    border="1px solid"
                    borderColor="pink.200"
                >
                    <Stack gap={4}>
                        <Text fontSize="xl" fontWeight="bold" color="#d53f8c">
                            Thông tin tiệc cưới
                        </Text>
                        <Stack align="start" gap={2}>
                            <HStack w={'full'}>
                                <HStack flex={1}>
                                    <Icon as={FaUserAlt} color="pink.500" />
                                    <Text fontSize={17}>Tên: {fullName}</Text>
                                </HStack>
                                <HStack flex={1}>
                                    <Icon as={FaMoneyBillWave} color="pink.500" />
                                    <Text fontSize={17}>Phân khúc: {budget}</Text>
                                </HStack>
                            </HStack>
                            <HStack w={'full'}>
                                <HStack flex={1}>
                                    <Icon as={FaMapMarkerAlt} color="pink.500" />
                                    <Text fontSize={17}>Khu vực: {place}</Text>
                                </HStack>
                                <HStack flex={1}>
                                    <Icon as={FaCalendarAlt} color="pink.500" />
                                    <Text fontSize={17}>Ngày cưới: {formatDate(weddingDate)}</Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Stack>
                </Box>
                <Divider my={4} />
                <Text color="#4CAF50" fontSize="21px" mt="0">
                    Thống kê
                </Text>
                <Stack
                    mt={6}
                    mb={3}
                    py={3}
                    borderTop={'1px solid pink'}
                    borderBottom={'1px solid pink'}
                >
                    <Stack
                        maxH={'lg'}
                        overflowY={'auto'}
                        gap={6}
                    >
                        <Box
                            bg="#fff"
                            borderRadius="xl"
                            boxShadow="lg"
                            py={4}
                            px={8}
                            border="1px solid"
                            borderColor="pink.200"
                        >
                            <Stack gap={4}>
                                <Text fontSize="xl" fontWeight="bold" color="#d53f8c">
                                    Trang trí tiệc cưới
                                </Text>
                                <Stack align="start" gap={2}>
                                    <HStack>
                                        <Icon as={FaGem} color="pink.500" />
                                        <Text fontSize={17}>Mức độ trang trí: {decorationLevel}</Text>
                                    </HStack>
                                    <HStack gap={1}>
                                        <Icon boxSize={5} as={ColorLens} color="pink.500" />
                                        <Text fontSize={17}>Màu sắc chủ đạo: {mainColor}</Text>
                                    </HStack>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box
                            bg="#fff"
                            borderRadius="xl"
                            boxShadow="lg"
                            py={4}
                            px={8}
                            border="1px solid"
                            borderColor="pink.200"
                        >
                            <Stack gap={4}>
                                <Text fontSize="xl" fontWeight="bold" color="#d53f8c">
                                    Phụ kiện
                                </Text>
                                <Stack align="start" spacing={2}>
                                    {accessories.map(a => (
                                        <Text fontSize={17}>{a.accessoriesName}</Text>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            bg="#fff"
                            borderRadius="xl"
                            boxShadow="lg"
                            py={4}
                            px={8}
                            border="1px solid"
                            borderColor="pink.200"
                        >
                            <Stack gap={4}>
                                <Text fontSize="xl" fontWeight="bold" color="#d53f8c">
                                    Trang phục
                                </Text>
                                <Stack align="start" spacing={2}>
                                    {clothes.map(c => (
                                        <Text fontSize={17}>{c.clothesName}</Text>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                        <Box
                            bg="#fff"
                            borderRadius="xl"
                            boxShadow="lg"
                            py={4}
                            px={8}
                            border="1px solid"
                            borderColor="pink.200"
                        >
                            <Stack gap={4}>
                                <Text fontSize="xl" fontWeight="bold" color="#d53f8c">
                                    Nhà hàng
                                </Text>
                                <Stack align="start" spacing={2}>
                                    {restaurants.map(r => (
                                        <Text fontSize={17}>{r.restaurantsName}</Text>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
                <HStack justify={'space-between'} mx={4}>
                    <Text fontWeight={500}>Phí tư vấn:</Text>
                    <Text fontWeight={500}>50,000đ</Text>
                </HStack>
                <Divider mb={5} mt={3} />
                <Button w={'full'} onClick={onOpen}>Xác nhận đăng ký tư vấn</Button>
            </Box>
            <NotifyDesignModal
                isOpen={isOpen}
                onClose={onClose}
                type="confirm-design"
            />
        </HStack >
    );
};

export default ConfirmDesignPage;
