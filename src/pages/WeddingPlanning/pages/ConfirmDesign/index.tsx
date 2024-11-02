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
import { Concept } from "../../../../types/type.enum";
import { Color } from "../../../../styles/styles";

const ConfirmDesignPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const {
        fullName,
        phone,
        budget,
        place,
        weddingDate,
        clothes,
        makeup,
        flowers,
        weddingPhotography,
        restaurantConcept,
        weddingInvitations,
        removeClothes,
        removeMakeup,
        removeFlowers,
        removeWeddingPhotography,
        removeRestaurantConcept,
        removeWeddingInvitations
    } = useWedding();
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        changeTabTitle('Đăng ký tư vấn');
    }, []);

    const generatePDF = () => {
        const doc = new jsPDF();

        // Add the font and logo
        doc.addFont(
            'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
            'Times New Roman',
            'normal'
        );
        doc.setFont('Times New Roman');

        // Add logo
        doc.addImage('/opalwed_web_logo.jpg', 'JPG', 12, 12, 18, 18); // Adjust logo size/position as needed

        // Add company name and contact details (top left)
        doc.setFontSize(16);
        doc.setTextColor(0, 32, 96); // Dark blue color
        doc.text("OPALWED", 35, 20); // Adjust as needed
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text("opalwed16@gmail.com", 35, 25); // Email

        // Add section title (top right)
        doc.setFontSize(16);
        doc.setTextColor(0, 32, 96); // Dark blue
        doc.text("THÔNG TIN", 160, 20, { align: "center" });
        doc.text("KẾ HOẠCH", 160, 28, { align: "center" });

        // Line divider
        doc.setDrawColor(0, 0, 0);
        doc.line(10, 35, 200, 35); // Horizontal line

        // Section: Event Organizer Details
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("TỔ CHỨC TƯ VẤN SỰ KIỆN OPAL WED", 110, 48);

        doc.text(`Tên khách hàng: ${fullName}`, 130, 57);
        doc.text(`Số điện thoại: ${phone}`, 130, 63);
        doc.text(`Ngày tổ chức: ${new Date(weddingDate).toLocaleDateString('vi-VN')}`, 10, 57);
        doc.text(`Địa điểm: ${place}`, 10, 63);

        // Table Headers (Hạng mục, Đặc điểm, Ghi chú)
        doc.setFillColor(0, 32, 96); // Dark blue
        doc.rect(10, 80, 190, 10, 'F'); // Background for header
        doc.setTextColor(255, 255, 255); // White text for headers
        doc.setFontSize(12);
        doc.text("Hạng mục", 15, 87); // Adjust position
        doc.text("Đặc điểm", 98, 87); // Adjust position
        doc.text("Ghi chú", 166, 87); // Adjust position

        // Define the types
        interface ProductItem {
            productName: string;
            concept?: Concept;
            color?: string;
            note?: string;
        }

        // Dynamic product categories
        const productCategories: { title: string, items: ProductItem[] }[] = [
            { title: "Trang phục", items: clothes.map(c => ({ productName: c.clothesName, concept: c.concept, color: c.color })) },
            { title: "Trang điểm", items: makeup.map(m => ({ productName: m.makeupName, concept: m.concept })) },
            { title: "Hoa cưới", items: flowers.map(f => ({ productName: f.flowersName, note: f.note })) },
            { title: "Chụp ảnh cưới", items: weddingPhotography.map(p => ({ productName: p.photographyName, concept: p.concept })) },
            { title: "Concept Nhà hàng", items: restaurantConcept.map(rc => ({ productName: rc.restaurantConceptName, concept: rc.concept, color: rc.color })) },
            { title: "Thiệp cưới", items: weddingInvitations.map(i => ({ productName: i.invitationsName, concept: i.concept })) }
        ];

        // Concept Translation Logic
        const translateConcept = (concept?: Concept): string => {
            if (!concept) return ""; // Return empty if no concept
            switch (concept) {
                case Concept.TRADITIONAL:
                    return "Truyền thống";
                case Concept.EUROPE:
                    return "Châu Âu";
                case Concept.MINIMALISM:
                    return "Tối giản";
                case Concept.VINTAGE:
                    return "Cổ điển";
                default:
                    return "";
            }
        };

        // Render table rows dynamically
        let y = 98; // Starting Y position for rows
        doc.setTextColor(0, 0, 0); // Reset to black text

        productCategories.forEach(category => {
            if (category.items.length > 0) {
                doc.setFontSize(12);
                // Product name (Hạng mục)
                doc.text(category.title, 15, y);  // Hạng mục
                category.items.forEach(item => {

                    // Concept (Đặc điểm)
                    const concept: string = translateConcept(item.concept);
                    if (concept) {
                        doc.text(`${item.productName} - ${concept}`, 70, y);  // Đặc điểm
                    } else {
                        doc.text(item.productName, 70, y);  // Đặc điểm
                    }

                    // Other details (Ghi chú)
                    const otherDetails = item.color || item.note || '';
                    doc.text(otherDetails, 155, y);  // Ghi chú

                    // Draw horizontal line after each row
                    doc.line(10, y + 3, 58, y + 3);   // Hạng mục line
                    doc.line(63, y + 3, 145, y + 3);  // Đặc điểm line
                    doc.line(150, y + 3, 200, y + 3);

                    y += 10; // Space between rows
                });
            }
        });

        // Calculate position for the fees section (10px above the contact divider)
        const contactDividerY = doc.internal.pageSize.height - 40; // Calculate position for the contact divider
        const feesY = contactDividerY - 14; // 10px above the contact divider

        // Fees section aligned with the right side of the table and positioned 10px above the divider
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Phí đăng ký tư vấn: 50.000", 200 - doc.getTextWidth("Phí đăng ký tư vấn: 50.000") - 10, feesY);
        doc.setFontSize(14);
        doc.setTextColor(0, 32, 96); // Dark blue
        doc.text("TỔNG CỘNG: 50.000 VND", 200 - doc.getTextWidth("TỔNG CỘNG: 50.000 VND") - 10, feesY + 9);

        // Divider above contact information (10px above contact)
        doc.setDrawColor(0, 0, 0);
        doc.line(10, contactDividerY, 200, contactDividerY); // Divider line

        // Contact information aligned with the table on the left (x = 10) and below the divider
        const contactY = contactDividerY + 10; // 10px below the divider

        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0);
        doc.text("Thông tin liên hệ:", 10, contactY); // Left aligned at x = 10
        doc.setFontSize(12);
        doc.text("Liên hệ: 0907688124", 10, contactY + 8);
        doc.text("Địa chỉ: Lê Eza-7, Đường D1, P. Long Thạnh Mỹ, TP. Thủ Đức, Hồ Chí Minh", 10, contactY + 14);

        // Save the PDF
        doc.save("wedding_consultation_details.pdf");

        // Save the PDF to a blob
        const pdfBlob: Blob = doc.output("blob");
        handleUploadCloudinary(pdfBlob);
    };


    const handleUploadCloudinary = async (pdfBlob: Blob) => {
        const fileName = 'wedding_consultation_details.pdf';
        const fileToUpload = new File([pdfBlob], fileName, { type: 'application/pdf' });

        const formDataFile = new FormData();
        formDataFile.append("file", fileToUpload);
        formDataFile.append("upload_preset", "z5r1wkcn");

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dy1t2fqsc/auto/upload`,
                formDataFile
            );
            handleCreateApplication(response.data.secure_url);
        } catch (error) {
            console.error("Error uploading PDF:", error);
        }
    };

    const handleCreateApplication = async (requiredServicesFile: string) => {
        const api = new ApiClient<any>('/application');

        const data = {
            weddingDate: weddingDate + 'T00:00:00.000Z',
            weddingLocation: place,
            numberOfGuests: 1000,
            weddingDescription: 'string',
            requiredServicesFile,
        }

        try {
            // Replace with actual PayOS API call
            const response = await api.create(data);
            console.log(response);
            if (response.isSuccess) {
                handleCheckout(response.data.orderId);
                window.location.href = response.data.checkoutUrl;
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
                p="20px"
                pb="0"
                bg="white"
                borderRadius="8px"
                border="1px solid"
                borderColor={Color.darkBlue}
                minH={'82vh'}
            >
                <Text fontSize="xl" fontWeight="bold" color="#d53f8c" fontFamily={'Hatton'} mb={3}>
                    Hạng mục
                </Text>
                <Divider mb={3} borderColor={'pink'} />
                <Box maxHeight="645px" overflowY="auto" css={{
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },
                    '&::-webkit-scrollbar-thumb': { backgroundColor: 'gainsboro', borderRadius: '4px' },
                    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#d1cece' }
                }}>
                    {clothes.map(c => (
                        <ConfirmDesignProductItem
                            image={c.image}
                            productName={c.clothesName}
                            concept={c.concept}
                            color={c.color}
                            onRemove={() => removeClothes(c)}
                        />
                    ))}
                    {makeup.map(m => (
                        <ConfirmDesignProductItem
                            image={m.image}
                            productName={m.makeupName}
                            concept={m.concept}
                            onRemove={() => removeMakeup(m)}
                        />
                    ))}
                    {flowers.map(f => (
                        <ConfirmDesignProductItem
                            image={f.image}
                            productName={f.flowersName}
                            onRemove={() => removeFlowers(f)}
                        />
                    ))}
                    {weddingPhotography.map(p => (
                        <ConfirmDesignProductItem
                            image={p.image}
                            productName={p.photographyName}
                            concept={p.concept}
                            onRemove={() => removeWeddingPhotography(p)}
                        />
                    ))}
                    {restaurantConcept.map(rc => (
                        <ConfirmDesignProductItem
                            image={rc.image}
                            productName={rc.restaurantConceptName}
                            concept={rc.concept}
                            color={rc.color}
                            onRemove={() => removeRestaurantConcept(rc)}
                        />
                    ))}
                    {weddingInvitations.map(i => (
                        <ConfirmDesignProductItem
                            image={i.image}
                            productName={i.invitationsName}
                            concept={i.concept}
                            color={i.color}
                            onRemove={() => removeWeddingInvitations(i)}
                        />
                    ))}

                    {clothes.length === 0 &&
                        makeup.length === 0 &&
                        flowers.length === 0 &&
                        weddingPhotography.length === 0 &&
                        restaurantConcept.length === 0 &&
                        weddingInvitations.length === 0 && (
                            <Stack minH={470} justify={'center'}>
                                <Text textAlign={'center'} fontFamily={'Noto Sans JP'}>Không có dịch vụ để tư vấn</Text>
                            </Stack>
                        )}
                </Box>
            </Box>

            <Box
                flex="1"
                p="20px"
                bg="white"
                borderRadius="8px"
                border="1px solid"
                borderColor={Color.darkBlue}
                minH={'82vh'}
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
                        <Text fontSize="xl" fontWeight="bold" color="#d53f8c" fontFamily={'Hatton'}>
                            Thông tin tiệc cưới
                        </Text>
                        <Stack align="start" gap={2}>
                            <HStack w={'full'}>
                                <HStack flex={1}>
                                    <Icon as={FaUserAlt} color="pink.500" />
                                    <Text fontSize={16} fontFamily={'Noto Sans JP'}>Tên: {fullName}</Text>
                                </HStack>
                                <HStack flex={1}>
                                    <Icon as={FaMoneyBillWave} color="pink.500" />
                                    <Text fontSize={16} fontFamily={'Noto Sans JP'}>Phân khúc: {budget}</Text>
                                </HStack>
                            </HStack>
                            <HStack w={'full'}>
                                <HStack flex={1}>
                                    <Icon as={FaMapMarkerAlt} color="pink.500" />
                                    <Text fontSize={16} fontFamily={'Noto Sans JP'}>Địa điểm: {place}</Text>
                                </HStack>
                                <HStack flex={1}>
                                    <Icon as={FaCalendarAlt} color="pink.500" />
                                    <Text fontSize={16} fontFamily={'Noto Sans JP'}>Ngày cưới: {formatDate(weddingDate)}</Text>
                                </HStack>
                            </HStack>
                        </Stack>
                    </Stack>
                </Box>
                <Divider my={4} borderColor={'pink'} />
                <Text fontSize="xl" fontWeight="bold" color="#d53f8c" fontFamily={'Hatton'}>
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
                                        {clothes.map((c, index) => (
                                            <Stack key={index} justify={'space-between'} w={'full'} pos={'relative'}>
                                                <Text>{c.clothesName}</Text>
                                                {c.color && (
                                                    <Text ml={3} fontSize={17}>+ Màu sắc: {c.color}</Text>
                                                )}
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
                                <Stack minH={24} justify={'center'}>
                                    <Text textAlign={'center'} fontFamily={'Noto Sans JP'}>Không có dịch vụ để tư vấn</Text>
                                </Stack>
                            )}
                    </Stack>
                </Stack>
                <HStack justify={'space-between'} mx={4}>
                    <Text fontSize="xl" fontWeight="bold" color="#d53f8c" fontFamily={'Hatton'}>Phí tư vấn:</Text>
                    <Text fontSize="xl" fontWeight="bold" color="#d53f8c" fontFamily={'Hatton'}>50,000đ</Text>
                </HStack>
                <Divider mb={5} mt={3} borderColor={'pink'} />
                <Button
                    fontFamily={'Noto Sans JP'}
                    fontWeight={500}
                    w={'full'}
                    onClick={onOpen}
                    bg={Color.darkBlue}
                    _hover={{ bg: Color.darkBlueHover }}
                    color={'white'}
                    borderRadius={'full'}
                >
                    Xác nhận đăng ký tư vấn
                </Button>
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