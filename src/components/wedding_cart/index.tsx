import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ConfigProvider, FloatButton } from "antd";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { useWedding } from "../../hooks/useWedding";

const WeddingCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        accessories,
        clothes,
        restaurants,
        makeup,
        flowers,
        weddingPhotography,
        decoration,
        weddingInvitations,
        removeAccessory,
        removeClothes,
        removeRestaurant,
        removeMakeup,
        removeFlowers,
        removeWeddingPhotography,
        removeDecoration,
        removeWeddingInvitations
    } = useWedding();

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
                    <DrawerHeader>Giỏ hàng của bạn</DrawerHeader>
                    <Divider />
                    <DrawerBody>
                        <Stack py="15px" mb="10px" gap={6}>
                            {clothes.length > 0 && (
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
                                            {clothes.map((c, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{c.clothesName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeClothes(c.clothesName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {accessories.length > 0 && (
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
                                            {accessories.map((a, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{a.accessoriesName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeAccessory(a.accessoriesName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {restaurants.length > 0 && (
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
                                            {restaurants.map((r, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{r.restaurantsName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeRestaurant(r.restaurantsName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {makeup.length > 0 && (
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
                                            Trang điểm
                                        </Text>
                                        <Stack align="start" spacing={2}>
                                            {makeup.map((m, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{m.makeupName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeMakeup(m.makeupName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {flowers.length > 0 && (
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
                                            Hoa cưới
                                        </Text>
                                        <Stack align="start" spacing={2}>
                                            {flowers.map((f, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{f.flowersName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeFlowers(f.flowersName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {weddingPhotography.length > 0 && (
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
                                            Chụp ảnh cưới
                                        </Text>
                                        <Stack align="start" spacing={2}>
                                            {weddingPhotography.map((wp, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{wp.photographyName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeWeddingPhotography(wp.photographyName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {decoration.length > 0 && (
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
                                            Trang trí
                                        </Text>
                                        <Stack align="start" spacing={2}>
                                            {decoration.map((d, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{d.decorationName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeDecoration(d.decorationName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {weddingInvitations.length > 0 && (
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
                                            Thiệp cưới
                                        </Text>
                                        <Stack align="start" spacing={2}>
                                            {weddingInvitations.map((wi, index) => (
                                                <HStack key={index} justify={'space-between'} w={'full'}>
                                                    <Text>{wi.invitationsName}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeWeddingInvitations(wi.invitationsName)}
                                                    ><FaX /></Button>
                                                </HStack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {clothes.length === 0 &&
                                accessories.length === 0 &&
                                makeup.length === 0 &&
                                flowers.length === 0 &&
                                weddingPhotography.length === 0 &&
                                decoration.length === 0 &&
                                restaurants.length === 0 &&
                                weddingInvitations.length === 0 && (
                                    <Stack align={'center'}>
                                        <Text>Giỏ hàng trống</Text>
                                    </Stack>
                                )}
                        </Stack>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default WeddingCart;
