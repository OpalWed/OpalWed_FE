import { FormControl, FormLabel, HStack, Heading, Image, Input, Select, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import LoadingModal from "../../../components/modal/loading";
import { Budget, Concept, Status, Utility } from "../../../types/type.enum";
import { useNavigate, useParams } from "react-router-dom";
import { initialProduct, Product } from "../../../types/Product";

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
            if (response.success) {
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
        <Stack w={"6xl"} m={"auto"}>
            <HStack gap={20} align={"flex-start"} mb={10}>
                <Stack gap={3} flex={1}>
                    <HStack w={'full'} justify={'center'} align={'flex-end'}>
                        <Image
                            border='1px solid gainsboro'
                            borderRadius='full'
                            boxSize={'9rem'}
                            src={
                                service.image || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
                            }
                            alt='avatar'
                            bgColor='white'
                            objectFit={'cover'}
                        />
                    </HStack>

                    <FormControl id="productName">
                        <FormLabel>Tên sản phẩm</FormLabel>
                        <Input
                            type="text"
                            value={service.productName}
                            readOnly
                        />
                    </FormControl>

                    <FormControl id="description">
                        <FormLabel>Mô tả</FormLabel>
                        <Textarea
                            value={service.description}
                            readOnly
                            maxH={32}
                            minH={32}
                        />
                    </FormControl>

                    <FormControl id="price">
                        <FormLabel>Giá</FormLabel>
                        <Input
                            type="text"
                            value={service.price}
                            readOnly
                        />
                    </FormControl>

                    <FormControl id="image">
                        <FormLabel>Ảnh sản phẩm</FormLabel>
                        <Input
                            type="text"
                            value={service.image}
                            readOnly
                        />
                    </FormControl>
                </Stack>

                <Stack gap={3} flex={1}>
                    <Heading fontSize={24} fontWeight={600}>
                        Thông tin bổ sung
                    </Heading>

                    <FormControl id="budgetLevel">
                        <FormLabel>Phân khúc ngân sách</FormLabel>
                        <Select
                            value={service.budgetLevel}
                            placeholder="Chọn phân khúc"
                            isReadOnly
                        >
                            {Object.values(Budget).map((budget) => (
                                <option key={budget} value={budget}>
                                    {budget}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl id="weddingConcept">
                        <FormLabel>Phong cách cưới</FormLabel>
                        <Select
                            value={service.weddingConcept}
                            placeholder="Chọn phong cách"
                            isReadOnly
                        >
                            {Object.values(Concept).map((concept) => (
                                <option key={concept} value={concept}>
                                    {concept}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl id="utility">
                        <FormLabel>Tiện ích</FormLabel>
                        <Select
                            value={service.utility}
                            placeholder="Chọn tiện ích"
                            isReadOnly
                        >
                            {Object.values(Utility).map((utility) => (
                                <option key={utility} value={utility}>
                                    {utility}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl id="status">
                        <FormLabel>Trạng thái</FormLabel>
                        <Select
                            value={service.status}
                            placeholder="Chọn trạng thái"
                            isReadOnly
                        >
                            {Object.values(Status).map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </HStack>

            <LoadingModal isOpen={isOpenLoading} onClose={onCloseLoading} />
        </Stack>
    );
};

export default ServiceDetailPage;
