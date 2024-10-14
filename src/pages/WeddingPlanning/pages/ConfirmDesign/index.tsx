import { Box, Text, HStack, Stack, Divider, Button, useDisclosure, Icon } from "@chakra-ui/react";
import ConfirmDesignProductItem from "../../components/confirm_design_product_item";
import NotifyDesignModal from "../../../../components/modal/notify_design";
import { useWedding } from "../../../../hooks/useWedding";
import { FaGem, FaMoneyBillWave } from "react-icons/fa6";
import { ColorLens } from "@mui/icons-material";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { formatDate } from "../../../../utils/formatDate";

const ConfirmDesignPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { fullName, segment, place, weddingDate, decorationLevel, mainColor, accessories } = useWedding();

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
                            Thông tin khách hàng
                        </Text>
                        <Stack align="start" gap={2}>
                            <HStack w={'full'}>
                                <HStack flex={1}>
                                    <Icon as={FaUserAlt} color="pink.500" />
                                    <Text fontSize={17}>Tên: {fullName}</Text>
                                </HStack>
                                <HStack flex={1}>
                                    <Icon as={FaMoneyBillWave} color="pink.500" />
                                    <Text fontSize={17}>Phân khúc: {segment}</Text>
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
                <Divider />
                <Stack my="10px" gap={6}>
                    <Text color="#4CAF50" fontSize="21px" mt="0">
                        Thống kê
                    </Text>
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
                </Stack>
                <Divider my={5} />
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
