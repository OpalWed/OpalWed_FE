import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ConfigProvider, FloatButton } from "antd";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { useWedding } from "../../hooks/useWedding";
import { Concept } from "../../types/type.enum";

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
                        <Stack py="15px" gap={6} h={'full'}>
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
                                                    <Text>{`${c.clothesName} (${c.concept === Concept.TRADITIONAL
                                                        ? "Truyền thống" : c.concept === Concept.EUROPE
                                                            ? "Châu Âu" : c.concept === Concept.MINIMALISM
                                                                ? "Tối giản" : "Cổ điển"
                                                        }, ${c.color})`}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeClothes(c)}
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
                                                        onClick={() => removeAccessory(a)}
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
                                                    <Text>{`${m.makeupName} (${m.concept === Concept.TRADITIONAL
                                                        ? "Truyền thống" : m.concept === Concept.EUROPE
                                                            ? "Châu Âu" : m.concept === Concept.MINIMALISM
                                                                ? "Tối giản" : "Cổ điển"})`}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeMakeup(m)}
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
                                                        onClick={() => removeFlowers(f)}
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
                                                    <Text>{`${wp.photographyName} (${wp.concept === Concept.TRADITIONAL
                                                        ? "Truyền thống" : wp.concept === Concept.EUROPE
                                                            ? "Châu Âu" : wp.concept === Concept.MINIMALISM
                                                                ? "Tối giản" : "Cổ điển"})`}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeWeddingPhotography(wp)}
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
                                                    <Text>{`${d.decorationName} (${d.concept === Concept.TRADITIONAL
                                                        ? "Truyền thống" : d.concept === Concept.EUROPE
                                                            ? "Châu Âu" : d.concept === Concept.MINIMALISM
                                                                ? "Tối giản" : "Cổ điển"}, ${d.color})`}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeDecoration(d)}
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
                                                    <Text>{`${r.restaurantsName} (${r.concept === Concept.TRADITIONAL
                                                        ? "Truyền thống" : r.concept === Concept.EUROPE
                                                            ? "Châu Âu" : r.concept === Concept.MINIMALISM
                                                                ? "Tối giản" : "Cổ điển"})`}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeRestaurant(r)}
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
                                                    <Text>{`${wi.invitationsName} (${wi.concept === Concept.TRADITIONAL
                                                        ? "Truyền thống" : wi.concept === Concept.EUROPE
                                                            ? "Châu Âu" : wi.concept === Concept.MINIMALISM
                                                                ? "Tối giản" : "Cổ điển"})`}</Text>
                                                    <Button
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeWeddingInvitations(wi)}
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
                                    <Stack align={'center'} justify={'center'} h={'full'}>
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
