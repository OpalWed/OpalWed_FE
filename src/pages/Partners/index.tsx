import { Button, Card, CardHeader, Divider, Heading, HStack, Input, InputGroup, InputLeftElement, Stack, Table, TableContainer, Tag, TagLabel, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { FaArrowRightArrowLeft, FaChevronRight, FaPlus } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { Shadow } from "../../styles/styles";
import ChangeStatusModal from "../../components/modal/change_status";
import usePartner from "../../hooks/usePartner";
import { Partner } from "../../types/Partner";
import { Status } from "../../types/type.enum";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import { AxiosError } from "axios";
import ApiClient from "../../services/apiClient";

const PartnerPage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [id, setId] = useState<number>(0);
    const [partners, setPartners] = useState<Partner[]>([]);
    const { isOpen: isOpenChange, onClose: onCloseChange, onOpen: onOpenChange } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();
    const { data, isLoading, refetch } = usePartner();

    let filteredPartners = partners.filter((partner) => {
        return partner.partnerName?.toLowerCase().includes(keyword.toLowerCase())
    })

    const handleChangeStatus = async () => {
        const api = new ApiClient<any>('/partner/update-status');
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
        changeTabTitle('Quản lý nhà cung cấp');
    }, []);

    useEffect(() => {
        if (data?.content) {
            setPartners(data.content);
        }
    }, [data?.content]);

    return (
        <Stack w={'full'} align='center' mx='auto' my={5} gap={10}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search title..."
                    variant="filled"
                    border='1px solid gainsboro'
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                    value={keyword}
                />
            </InputGroup>
            <Stack w={'full'} gap={10}>
                <Heading fontSize={30}>Nhà cung cấp</Heading>
                <Card shadow={Shadow.cardShadow}>
                    <CardHeader py={3}>
                        <HStack w={'full'} justify={'flex-end'} gap={5}>
                            <Button leftIcon={<FaPlus />} colorScheme="blue">Tạo</Button>
                        </HStack>
                    </CardHeader>
                    <Divider borderColor={'gainsboro'} />
                    <TableContainer w='full' overflowY="auto" whiteSpace='normal'>
                        <Table variant="simple" size="md">
                            <Thead>
                                <Tr>
                                    <Th textAlign='center' borderColor={'gainsboro'}>ID</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Nhà cung cấp</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Số điện thoại</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Địa điểm</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Loại dịch vụ</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Trạng thái</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Hành động</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {!isLoading ? (
                                    <>
                                        {filteredPartners.length !== 0 ? (
                                            <>
                                                {filteredPartners.map((partner) => (
                                                    <Tr _hover={{ bg: 'gray.50' }} key={partner.partnerId}>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{partner.partnerId}</Td>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{partner.partnerName}</Td>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{partner.phone}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{partner.address}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{partner.utilities}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>
                                                            <Tag size={'md'} variant='subtle' colorScheme={partner.status === Status.ACTIVE ? 'green' : 'red'}>
                                                                <TagLabel>{partner.status}</TagLabel>
                                                            </Tag>
                                                        </Td>
                                                        <Td
                                                            textAlign='center'
                                                            borderColor={'gainsboro'}
                                                            gap={2}
                                                        >
                                                            <Button
                                                                borderRadius='full'
                                                                px={3}
                                                                colorScheme="red"
                                                                variant='ghost'
                                                                onClick={() => {
                                                                    setId(partner.partnerId);
                                                                    onOpenChange();
                                                                }}
                                                            >
                                                                <Tooltip label='Deactivate Partner'>
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
                                                            onClick={() => navigate(partner.partnerId.toString())}
                                                        >
                                                            <FaChevronRight />
                                                        </Td>
                                                    </Tr>
                                                ))}
                                            </>
                                        ) : (
                                            <Tr>
                                                <Td colSpan={8} textAlign="center">
                                                    Không có thành viên
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
                type="partner"
            />
        </Stack>
    )
}

export default PartnerPage