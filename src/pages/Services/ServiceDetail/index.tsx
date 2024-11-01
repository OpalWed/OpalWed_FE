import { Button, FormControl, FormLabel, HStack, Image, Input, InputGroup, InputRightAddon, Stack, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import LoadingModal from "../../../components/modal/loading";
import { useNavigate, useParams } from "react-router-dom";
import { initialProduct, Product } from "../../../types/Product";
import ReactQuill from "react-quill";
import { modules } from "../../../styles/styles";
import { Budget, Utility } from "../../../types/type.enum";

const ServiceDetailPage = () => {
    const param = useParams<{ id: string }>();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const toast = useToast();
    const navigate = useNavigate();
    const [service, setService] = useState<Product>(initialProduct);

    const getServiceDetailById = async (id: number) => {
        onOpenLoading();
        try {
            const api = new ApiClient<any>("/manage/product");
            const response = await api.getDetail(id);
            if (response.isSuccess) {
                setService(response.data);
            } else {
                toast({
                    title: "Error",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: "top",
                    isClosable: true,
                });
            }
        } catch (error) {
            navigate("/not-found");
        } finally {
            onCloseLoading();
        }
    };

    useEffect(() => {
        changeTabTitle("Thông tin dịch vụ");
    }, []);

    useEffect(() => {
        if (param.id) {
            getServiceDetailById(parseInt(param.id));
        }
    }, [param.id]);

    return (
        <Stack w={"6xl"} m={"auto"} pos={'relative'}>
            <Button onClick={() => navigate('update')} pos={'absolute'} right={0} top={-10}>Cập nhật</Button>
            <HStack gap={20} align={"flex-start"} mb={10}>
                <Stack gap={3} flex={1}>
                    <HStack w={'full'} justify={'center'} align={'flex-end'}>
                        <Image
                            border='1px solid gainsboro'
                            src={
                                service.image
                            }
                            h={450}
                            w={416}
                            bgColor='white'
                            objectFit={'cover'}
                        />
                    </HStack>
                </Stack>

                <Stack gap={3} flex={1}>
                    <FormControl id="productName">
                        <FormLabel>Tên sản phẩm</FormLabel>
                        <Input
                            type="text"
                            value={service.productName}
                            readOnly
                        />
                    </FormControl>

                    <FormControl id="description" isRequired>
                        <FormLabel>Mô tả</FormLabel>
                        <ReactQuill
                            theme='snow'
                            value={service.description}
                            placeholder='Mô tả'
                            modules={modules}
                            className='content-input'
                            readOnly
                        />
                    </FormControl>

                    <FormControl id="price">
                        <FormLabel>Giá (VND)</FormLabel>
                        <InputGroup>
                            <Input
                                type="text"
                                value={service.price}
                                readOnly
                            />
                            <InputRightAddon fontFamily={'Noto Sans JP'}>
                                VND
                            </InputRightAddon>
                        </InputGroup>
                    </FormControl>

                    <FormControl id="budgetLevel">
                        <FormLabel>Phân khúc ngân sách</FormLabel>
                        <Input
                            value={service.budgetLevel === Budget.LOW ? 'Thấp' :
                                service.budgetLevel === Budget.MEDIUM ? 'Trung bình' :
                                    service.budgetLevel === Budget.HIGH ? 'Cao' : 'Cao cấp'}
                            placeholder="Chọn phân khúc"
                            isReadOnly
                        />
                    </FormControl>

                    <FormControl id="utility">
                        <FormLabel>Tiện ích</FormLabel>
                        <Input
                            value={service.utility === Utility.CLOTHES ? 'Trang phục' :
                                service.utility === Utility.MAKEUP ? 'Trang điểm' :
                                    service.utility === Utility.PHOTOGRAPHY ? 'Chụp ảnh cưới' :
                                        service.utility === Utility.FLOWERS ? 'Hoa cưới' :
                                            service.utility === Utility.RESTAURANTCONCEPT ? 'Concept Nhà hàng' : 'Thiệp cưới'}
                            placeholder="Chọn tiện ích"
                            isReadOnly
                        />
                    </FormControl>
                </Stack>
            </HStack>

            <LoadingModal isOpen={isOpenLoading} onClose={onCloseLoading} />
        </Stack>
    );
};

export default ServiceDetailPage;
