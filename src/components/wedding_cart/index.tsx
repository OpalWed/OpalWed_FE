import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ConfigProvider, FloatButton } from "antd";
import { FaCartShopping, FaGem, FaMoneyBillWave } from "react-icons/fa6";
import { useWedding } from "../../hooks/useWedding";
import { formatDate } from "../../utils/formatDate";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { ColorLens } from "@mui/icons-material";

const WeddingCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { fullName, segment, place, weddingDate, decorationLevel, mainColor, accessories } = useWedding();

    return (
        <>
            <Box>
                <ConfigProvider
                    theme={{
                        token: {
                            controlHeightLG: 48,
                            colorPrimary: '#3db3e6',
                        },
                    }}
                >
                    <FloatButton.Group shape="circle">
                        <FloatButton
                            icon={<FaCartShopping />}
                            onClick={() => { onOpen() }}
                        />
                    </FloatButton.Group>
                </ConfigProvider>
            </Box>
            <Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton borderRadius={'full'} />
                    <DrawerHeader>Đơn hàng của bạn</DrawerHeader>
                    <Divider />
                    <DrawerBody>
                        <Stack py="15px" mb="10px" gap={6}>
                            <Box
                                bg="#fff"
                                borderRadius="xl"
                                boxShadow="lg"
                                py={4}
                                px={6}
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
                                    <Stack align="start" spacing={2}>
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
                                            <Text>{a.accessoriesName}</Text>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default WeddingCart;
