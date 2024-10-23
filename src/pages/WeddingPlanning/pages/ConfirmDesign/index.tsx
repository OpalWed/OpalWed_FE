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
import jsPDF from "jspdf";
import axios from "axios";
import LoadingModal from "../../../../components/modal/loading";

const ConfirmDesignPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
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

    const generatePDF = () => {
        const doc = new jsPDF();

        // Set font and styles
        doc.addFont(
            'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
            'Times New Roman',
            'normal'
        );

        // Set font and styles
        doc.setFont('Times New Roman');
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);

        // Add logo (Make sure to provide the correct path to your logo image)
        doc.addImage('/OpalWed.jpg', 'JPG', 10, 10, 25, 20); // Adjust size and position as needed

        // Title
        doc.setFontSize(16);
        doc.setTextColor(76, 175, 80); // #4CAF50
        doc.text("OpalWed", 105, 30, { align: "center" });

        // Tagline
        doc.setFontSize(12);
        doc.text("Lập kế hoạch cho đám cưới mơ ước của bạn", 105, 40, { align: "center" });

        // Add a horizontal line
        doc.setDrawColor(0);
        doc.line(10, 45, 200, 45);

        // Wedding Info
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text("Thông tin tiệc cưới:", 10, 55);
        doc.setFontSize(12);
        doc.text(`- Tên: ${fullName}`, 10, 65);
        doc.text(`- Ngân sách: ${budget}`, 10, 70);
        doc.text(`- Địa điểm: ${place}`, 10, 75);
        doc.text(`- Ngày cưới: ${new Date(weddingDate).toLocaleDateString('vi-VN')}`, 10, 80);

        // Products
        doc.setFontSize(14);
        doc.setTextColor(76, 175, 80); // #4CAF50
        doc.text("Sản phẩm:", 10, 90);

        const productCategories = [
            { title: "Trang phục", items: clothes.map(c => c.clothesName) },
            { title: "Phụ kiện", items: accessories.map(a => a.accessoriesName) },
            { title: "Trang điểm", items: makeup.map(m => m.makeupName) },
            { title: "Hoa cưới", items: flowers.map(f => f.flowersName) },
            { title: "Chụp ảnh cưới", items: weddingPhotography.map(p => p.photographyName) },
            { title: "Trang trí", items: decoration.map(d => d.decorationName) },
            { title: "Nhà hàng", items: restaurants.map(r => r.restaurantsName) },
            { title: "Thiệp cưới", items: weddingInvitations.map(i => i.invitationsName) }
        ];

        let y = 100;
        productCategories.forEach(category => {
            if (category.items.length > 0) {
                doc.setFontSize(12);
                doc.setTextColor(76, 175, 80); // #4CAF50
                doc.text(category.title, 10, y);
                doc.setTextColor(0, 0, 0);
                category.items.forEach(item => {
                    y += 5; // Space between items
                    doc.text(`- ${item}`, 15, y);
                });
                y += 10; // Space after category
            }
        });

        // Footer
        doc.setFontSize(12);
        doc.text("Cảm ơn bạn đã chọn OpalWed!", 105, y, { align: "center" });

        doc.save("wedding_consultation_details.pdf");
        // Save the PDF to a blob
        const pdfBlob: Blob = doc.output("blob");
        handleUploadCloudinary(pdfBlob);
    };

    const handleUploadCloudinary = async (pdfBlob: Blob) => {
        const fileName = 'wedding_consultation_details.pdf';
        const fileToUpload = new File([pdfBlob], fileName, { type: 'application/pdf' });
        let fileUrl: string = '';

        const formDataFile = new FormData();
        // Append the generated PDF blob instead of clinicRegistration
        formDataFile.append("file", fileToUpload);
        formDataFile.append("upload_preset", "z5r1wkcn"); // Your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dy1t2fqsc/auto/upload`,
                formDataFile
            );
            console.log(response);

            fileUrl = response.data.secure_url; // Get the URL of the uploaded file
            console.log("Uploaded PDF URL:", fileUrl); // Log the URL for debugging
            window.location.href = fileUrl;
        } catch (error) {
            console.error("Error uploading PDF:", error);
        }
    };

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
            onCloseLoading();
        }
    };

    const handleDesignRegister = () => {
        onClose();
        onOpenLoading();
        generatePDF();
        handleCreateOrder();
    }

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

                    {clothes.length === 0 &&
                        accessories.length === 0 &&
                        makeup.length === 0 &&
                        flowers.length === 0 &&
                        weddingPhotography.length === 0 &&
                        decoration.length === 0 &&
                        restaurants.length === 0 &&
                        weddingInvitations.length === 0 && (
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

                        {clothes.length === 0 &&
                            accessories.length === 0 &&
                            makeup.length === 0 &&
                            flowers.length === 0 &&
                            weddingPhotography.length === 0 &&
                            decoration.length === 0 &&
                            restaurants.length === 0 &&
                            weddingInvitations.length === 0 && (
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
                handleCheckout={handleDesignRegister}
            />
            <LoadingModal
                isOpen={isOpenLoading}
                onClose={onCloseLoading}
            />
        </HStack >
    );
};

export default ConfirmDesignPage;
