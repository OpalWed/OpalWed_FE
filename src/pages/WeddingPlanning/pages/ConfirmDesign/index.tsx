import { Box, Text, HStack, Stack, Divider, Button, useDisclosure, Icon, useToast } from "@chakra-ui/react";
import ConfirmDesignProductItem from "../../components/confirm_design_product_item";
import NotifyDesignModal from "../../../../components/modal/notify_design";
import { useWedding } from "../../../../hooks/useWedding";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { formatDate } from "../../../../utils/formatDate";
import { useEffect } from "react";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ApiClient from "../../../../services/apiClient";
import { useNavigate } from "react-router-dom";

const ConfirmDesignPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        fullName,
        budget,
        place,
        weddingDate,
        clothes,
        accessories,
        makeup,
        flowers,
        weddingPhotography,
        decoration,
        restaurants,
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
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        changeTabTitle('Đăng ký tư vấn');
    }, []);

    const handleCreateOrder = async () => {
        const api = new ApiClient<any>('/order');

        try {
            // Replace with actual PayOS API call
            const response = await api.create({});
            console.log(response);
            if (response.isSuccess === null) {
                handleCheckout(response.data.orderId);
                window.location.href = response.data.payOSData.checkoutUrl;
            }


        } catch (error) {
            toast({
                title: "Xảy ra lỗi",
                description: "Tạo đơn hàng bị lỗi",
                status: "success",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        }
    }

    const handleCheckout = async (orderId: number) => {

        const api = new ApiClient<any>('/order/payOS-payment-detail');

        try {
            // Replace with actual PayOS API call
            const response = await api.getDetail(orderId);
            console.log(response);

            // window.location.href = response.data;
        } catch (error) {
            toast({
                title: "Xảy ra lỗi",
                description: "Tạo thanh toán bị lỗi",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        } finally {
        }
    };

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            toast({
                title: "Thành công",
                description: "Thanh toán thành công. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!",
                status: "success",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
            navigate('');
        }

        if (query.get("canceled")) {
            toast({
                title: "Xảy ra lỗi",
                description: "Thanh toán thất bại. Hãy thử lại sau",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
            navigate('http://localhost:5173/wedding-planning/europe/low/confirm-design');
        }
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
                    {clothes.map(c => (
                        <ConfirmDesignProductItem
                            productName={c.clothesName}
                            onRemove={() => removeClothes(c.clothesName)}
                        />
                    ))}
                    {accessories.map(a => (
                        <ConfirmDesignProductItem
                            productName={a.accessoriesName}
                            onRemove={() => removeAccessory(a.accessoriesName)}
                        />
                    ))}
                    {makeup.map(m => (
                        <ConfirmDesignProductItem
                            productName={m.makeupName}
                            onRemove={() => removeMakeup(m.makeupName)}
                        />
                    ))}
                    {flowers.map(f => (
                        <ConfirmDesignProductItem
                            productName={f.flowersName}
                            onRemove={() => removeFlowers(f.flowersName)}
                        />
                    ))}
                    {weddingPhotography.map(p => (
                        <ConfirmDesignProductItem
                            productName={p.photographyName}
                            onRemove={() => removeWeddingPhotography(p.photographyName)}
                        />
                    ))}
                    {decoration.map(d => (
                        <ConfirmDesignProductItem
                            productName={d.decorationName}
                            onRemove={() => removeDecoration(d.decorationName)}
                        />
                    ))}
                    {restaurants.map(r => (
                        <ConfirmDesignProductItem
                            productName={r.restaurantsName}
                            onRemove={() => removeRestaurant(r.restaurantsName)}
                        />
                    ))}
                    {weddingInvitations.map(i => (
                        <ConfirmDesignProductItem
                            productName={i.invitationsName}
                            onRemove={() => removeWeddingInvitations(i.invitationsName)}
                        />
                    ))}

                    {!clothes &&
                        !accessories &&
                        !makeup &&
                        !flowers &&
                        !weddingPhotography &&
                        !decoration &&
                        !restaurants &&
                        !weddingInvitations && (
                            <Text>Không có dịch vụ</Text>
                        )}
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
                                    <Text fontSize={17}>Địa điểm: {place}</Text>
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
                                        {clothes.map(c => (
                                            <Text fontSize={17}>{c.clothesName}</Text>
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
                                        {accessories.map(a => (
                                            <Text fontSize={17}>{a.accessoriesName}</Text>
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
                                        {makeup.map(m => (
                                            <Text fontSize={17}>{m.makeupName}</Text>
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
                                        {flowers.map(f => (
                                            <Text fontSize={17}>{f.flowersName}</Text>
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
                                        {weddingPhotography.map(p => (
                                            <Text fontSize={17}>{p.photographyName}</Text>
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
                                        {decoration.map(d => (
                                            <Text fontSize={17}>{d.decorationName}</Text>
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
                                        {restaurants.map(r => (
                                            <Text fontSize={17}>{r.restaurantsName}</Text>
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
                                        {weddingInvitations.map(i => (
                                            <Text fontSize={17}>{i.invitationsName}</Text>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Box>
                        )}

                        {!clothes &&
                            !accessories &&
                            !makeup &&
                            !flowers &&
                            !weddingPhotography &&
                            !decoration &&
                            !restaurants &&
                            !weddingInvitations && (
                                <Text textAlign={'center'}>Không có dịch vụ để tư vấn</Text>
                            )}
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
                handleCheckout={handleCreateOrder}
            />
        </HStack >
    );
};

export default ConfirmDesignPage;
