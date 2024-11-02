import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ConfigProvider, FloatButton } from "antd";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { useWedding } from "../../hooks/useWedding";
import { Concept } from "../../types/type.enum";
import { Color } from "../../styles/styles";

const WeddingCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        clothes,
        restaurantConcept,
        makeup,
        flowers,
        weddingPhotography,
        weddingInvitations,
        removeClothes,
        removeRestaurantConcept,
        removeMakeup,
        removeFlowers,
        removeWeddingPhotography,
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
                    <DrawerCloseButton borderRadius={'full'} color={'white'} />
                    <DrawerHeader bg={Color.darkBlue} color={'white'} fontFamily={'Hatton'} fontWeight={400}>Giỏ hàng của bạn</DrawerHeader>
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
                                                <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                    <Text>{c.clothesName}</Text>
                                                    {c.color && (
                                                        <Text ml={3} fontSize={17}>+ Màu sắc: {c.color}</Text>
                                                    )}
                                                    <Button
                                                        pos={'absolute'}
                                                        top={-2}
                                                        right={3}
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeClothes(c)}
                                                    ><FaX /></Button>
                                                </Stack>
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
                                                <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                    <Text>{m.makeupName}</Text>
                                                    {m.concept && (
                                                        <Text ml={3} fontSize={17}>
                                                            + Phong cách: {m.concept === Concept.TRADITIONAL
                                                                ? "Truyền thống" : m.concept === Concept.EUROPE
                                                                    ? "Châu Âu" : m.concept === Concept.MINIMALISM
                                                                        ? "Tối giản" : "Cổ điển"}
                                                        </Text>
                                                    )}
                                                    <Button
                                                        pos={'absolute'}
                                                        top={-2}
                                                        right={3}
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeMakeup(m)}
                                                    ><FaX /></Button>
                                                </Stack>
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
                                                <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                    <Text>{f.flowersName}</Text>
                                                    {f.note && (
                                                        <Text ml={3} fontSize={17}>
                                                            + Ghi chú: {f.note}
                                                        </Text>
                                                    )}
                                                    <Button
                                                        pos={'absolute'}
                                                        top={-2}
                                                        right={3}
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeFlowers(f)}
                                                    ><FaX /></Button>
                                                </Stack>
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
                                                <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                    <Text>{wp.photographyName}</Text>
                                                    {wp.concept && (
                                                        <Text ml={3} fontSize={17}>
                                                            + Phong cách: {wp.concept === Concept.TRADITIONAL
                                                                ? "Truyền thống" : wp.concept === Concept.EUROPE
                                                                    ? "Châu Âu" : wp.concept === Concept.MINIMALISM
                                                                        ? "Tối giản" : "Cổ điển"}
                                                        </Text>
                                                    )}
                                                    <Button
                                                        pos={'absolute'}
                                                        top={-2}
                                                        right={3}
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeWeddingPhotography(wp)}
                                                    ><FaX /></Button>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {restaurantConcept.length > 0 && (
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
                                            Concept Nhà hàng
                                        </Text>
                                        <Stack align="start" spacing={2}>
                                            {restaurantConcept.map((rc, index) => (
                                                <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                    <Text>{rc.restaurantConceptName}</Text>
                                                    {rc.concept && (
                                                        <Text ml={3} fontSize={17}>
                                                            + Phong cách: {rc.concept === Concept.TRADITIONAL
                                                                ? "Truyền thống" : rc.concept === Concept.EUROPE
                                                                    ? "Châu Âu" : rc.concept === Concept.MINIMALISM
                                                                        ? "Tối giản" : "Cổ điển"}
                                                        </Text>
                                                    )}
                                                    {rc.color && (
                                                        <Text ml={3} fontSize={17}>+ Màu sắc: {rc.color}</Text>
                                                    )}
                                                    <Button
                                                        pos={'absolute'}
                                                        top={-2}
                                                        right={3}
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeRestaurantConcept(rc)}
                                                    ><FaX /></Button>
                                                </Stack>
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
                                                <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                    <Text>{wi.invitationsName}</Text>
                                                    {wi.concept && (
                                                        <Text ml={3} fontSize={17}>
                                                            + Phong cách: {wi.concept === Concept.TRADITIONAL
                                                                ? "Truyền thống" : wi.concept === Concept.EUROPE
                                                                    ? "Châu Âu" : wi.concept === Concept.MINIMALISM
                                                                        ? "Tối giản" : "Cổ điển"}
                                                        </Text>
                                                    )}
                                                    {wi.color && (
                                                        <Text ml={3} fontSize={17}>+ Màu sắc: {wi.color}</Text>
                                                    )}
                                                    <Button
                                                        pos={'absolute'}
                                                        top={-2}
                                                        right={3}
                                                        fontSize={12}
                                                        p={3}
                                                        borderRadius={'full'}
                                                        variant={'ghost'}
                                                        onClick={() => removeWeddingInvitations(wi)}
                                                    ><FaX /></Button>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            {clothes.length === 0 &&
                                makeup.length === 0 &&
                                flowers.length === 0 &&
                                weddingPhotography.length === 0 &&
                                restaurantConcept.length === 0 &&
                                weddingInvitations.length === 0 && (
                                    <Stack align={'center'} justify={'center'} h={'full'}>
                                        <Text fontFamily={'Noto Sans JP'} fontSize={16}>Giỏ hàng trống</Text>
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
