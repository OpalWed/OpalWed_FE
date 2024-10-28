import { Button, Card, CardHeader, Divider, Heading, HStack, Input, InputGroup, InputLeftElement, Stack, Table, TableContainer, Tag, TagLabel, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { FaArrowRightArrowLeft, FaChevronRight, FaPlus } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { Shadow } from "../../styles/styles";
import ChangeStatusModal from "../../components/modal/change_status";
import useManageProduct from "../../hooks/useManageProduct";
import { Product } from "../../types/Product";
import { ProductStatus, Utility } from "../../types/type.enum";
import { useNavigate } from "react-router-dom";
import ApiClient from "../../services/apiClient";
import { AxiosError } from "axios";
import Loading from "../../components/loading";

const ServicePage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [id, setId] = useState<number>(0);
    const [services, setServices] = useState<Product[]>([]);
    const navigate = useNavigate();
    const toast = useToast();
    const { isOpen: isOpenChange, onClose: onCloseChange, onOpen: onOpenChange } = useDisclosure();
    const { data, isLoading, refetch } = useManageProduct();

    let filteredServices = services.filter((service) => {
        return service.productName.toLowerCase().includes(keyword.toLowerCase())
    })

    const handleChangeStatus = async () => {
        const api = new ApiClient<any>('/manage/product/status');
        try {
            const response = await api.update(id);
            if (response.isSuccess) {
                toast({
                    title: "Thành công",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                refetch && refetch();
            } else {
                toast({
                    title: "Xảy ra lỗi",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast({
                    title: "Xảy ra lỗi",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        }
    }

    useEffect(() => {
        changeTabTitle('Quản lý dịch vụ');
    }, []);

    useEffect(() => {
        if (data?.content) {
            setServices(data.content)
        }
    }, [data?.content]);

    return (
        <Stack w={'full'} align='center' mx='auto' my={5} gap={10}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Tìm kiếm dịch vụ..."
                    variant="filled"
                    border='1px solid gainsboro'
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                    value={keyword}
                />
            </InputGroup>
            <Stack w={'full'} gap={10}>
                <Heading fontSize={30}>Dịch vụ</Heading>
                <Card shadow={Shadow.cardShadow}>
                    <CardHeader py={3}>
                        <HStack w={'full'} justify={'flex-end'} gap={5}>
                            <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={() => navigate('create')}>Tạo</Button>
                        </HStack>
                    </CardHeader>
                    <Divider borderColor={'gainsboro'} />
                    <TableContainer w='full' overflowY="auto" whiteSpace='normal'>
                        <Table variant="simple" size="md">
                            <Thead>
                                <Tr>
                                    <Th textAlign='center' borderColor={'gainsboro'}>ID</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Dịch vụ</Th>
                                    {/* <Th textAlign='center' borderColor={'gainsboro'}>Nhà cung cấp</Th> */}
                                    <Th textAlign='center' borderColor={'gainsboro'}>Kiểu dịch vụ</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Trạng thái</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Hành động</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {!isLoading ? (
                                    <>
                                        {filteredServices.length !== 0 ? (
                                            <>
                                                {filteredServices.map((service) => (
                                                    <Tr _hover={{ bg: 'gray.50' }} key={service.productId}>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{service.productId}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{service.productName}</Td>
                                                        {/* <Td textAlign="center" borderColor={'gainsboro'}>{service.partnerId}</Td> */}
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{service.utility === Utility.CLOTHES ? 'Trang phục' :
                                                            service.utility === Utility.MAKEUP ? 'Trang điểm' :
                                                                service.utility === Utility.PHOTOGRAPHY ? 'Chụp ảnh cưới' :
                                                                    service.utility === Utility.FLOWERS ? 'Hoa cưới' :
                                                                        service.utility === Utility.RESTAURANTCONCEPT ? 'Concept Nhà hàng' : 'Thiệp cưới'}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>
                                                            <Tag size={'md'} variant='subtle' colorScheme={service.status === ProductStatus.AVAILABLE ? 'green' : 'red'}>
                                                                <TagLabel>{service.status}</TagLabel>
                                                            </Tag>
                                                        </Td>
                                                        <Td
                                                            textAlign='center'
                                                            borderColor={'gainsboro'}
                                                        >
                                                            <Button
                                                                borderRadius='full'
                                                                px={3}
                                                                colorScheme="red"
                                                                variant='ghost'
                                                                onClick={() => {
                                                                    setId(service.productId);
                                                                    onOpenChange();
                                                                }}
                                                            >
                                                                <Tooltip label='Deactivate Services'>
                                                                    <span>
                                                                        <FaArrowRightArrowLeft />
                                                                    </span>
                                                                </Tooltip>
                                                            </Button>
                                                        </Td>
                                                        <Td
                                                            textAlign='center'
                                                            borderColor={'gainsboro'}
                                                            cursor={'pointer'}
                                                            onClick={() => navigate(service.productId.toString())}
                                                        >
                                                            <FaChevronRight />
                                                        </Td>
                                                    </Tr>
                                                ))}
                                            </>
                                        ) : (
                                            <Tr>
                                                <Td colSpan={8} textAlign="center">
                                                    Không có dịch vụ
                                                </Td>
                                            </Tr>
                                        )}
                                    </>
                                ) : (
                                    <Tr>
                                        <Td colSpan={8} textAlign="center">
                                            <Loading />
                                        </Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </Stack>
            <ChangeStatusModal
                isOpen={isOpenChange}
                onClose={onCloseChange}
                handleChangeStatus={handleChangeStatus}
                type="service"
            />
        </Stack>
    )
}

export default ServicePage