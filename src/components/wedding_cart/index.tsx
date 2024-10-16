import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ConfigProvider, FloatButton } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { useWedding } from "../../hooks/useWedding";

const WeddingCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { accessories, clothes, restaurants } = useWedding();

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
                            {accessories.length && (
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
                            )}
                            {clothes.length && (
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
                                                <Text>{c.clothesName}</Text>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}
                            {restaurants.length && (
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
                                                <Text>{r.restaurantsName}</Text>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default WeddingCart;
