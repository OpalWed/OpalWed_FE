import { Button, Card, CardHeader, Divider, Heading, HStack, Input, InputGroup, InputLeftElement, Stack, Table, TableContainer, Tag, TagLabel, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { FaArrowRightArrowLeft, FaEye, FaPlus } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { Shadow } from "../../styles/styles";
import PartnerDetailModal from "../../components/modal/partner_detail";
import ChangeStatusModal from "../../components/modal/change_status";

const ServicePage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [approve, setApprove] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const { isOpen: isOpenChange, onClose: onCloseChange, onOpen: onOpenChange } = useDisclosure();
    const { isOpen: isOpenDetail, onClose: onCloseDetail, onOpen: onOpenDetail } = useDisclosure();
    const toast = useToast();
    const navigate = useNavigate();

    const partners = [
        {
            id: 1,
            partnerName: "Tech Innovators Ltd.",
            representativeName: "John Doe",
            phoneMobile: "+1234567890",
            location: "San Francisco, CA",
        },
        {
            id: 2,
            partnerName: "Global Solutions Inc.",
            representativeName: "Jane Smith",
            phoneMobile: "+1987654321",
            location: "New York, NY",
        },
        {
            id: 3,
            partnerName: "Innovatech Partners",
            representativeName: "Alice Johnson",
            phoneMobile: "+1122334455",
            location: "Austin, TX",
        },
        {
            id: 4,
            partnerName: "NextGen Technologies",
            representativeName: "Bob Brown",
            phoneMobile: "+6677889900",
            location: "Chicago, IL",
        }
    ];


    let filteredPartners = partners.filter((partner) => {
        return partner.partnerName.toLowerCase().includes(keyword.toLowerCase())
    })

    const handleApprove = async () => {
        // const api = new ApiClient<any>(`/blog/approval`);
        // try {
        //     const response = await api.createWithId(id, {
        //         params: {
        //             isApproved: approve
        //         }
        //     });
        //     if (response.success) {
        //         toast({
        //             title: "Thành công",
        //             description: response.message,
        //             status: "success",
        //             duration: 2500,
        //             position: 'top',
        //             isClosable: true,
        //         });
        //         refetch && refetch();
        //     } else {
        //         toast({
        //             title: "Xảy ra lỗi",
        //             description: response.message,
        //             status: "error",
        //             duration: 2500,
        //             position: 'top',
        //             isClosable: true,
        //         });
        //     }
        // } catch (error: any) {
        //     toast({
        //         title: "Xảy ra lỗi",
        //         description: error.response?.data?.message || "An error occurred",
        //         status: "error",
        //         duration: 2500,
        //         position: 'top',
        //         isClosable: true,
        //     });
        // } finally {
        //     onCloseApprove();
        // }
    }

    useEffect(() => {
        changeTabTitle('Quản lý dịch vụ');
    }, []);

    // useEffect(() => {
    //     if (data?.content) {
    //         setBlogs(data.content)
    //     }
    // }, [data?.content]);

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
                <Heading fontSize={30}>Dịch vụ</Heading>
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
                                    <Th textAlign='center' borderColor={'gainsboro'}>Tên dịch vụ</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Nội dung</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Url ảnh</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Giá tiền</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Trạng thái</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Hành động</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {/* {!isLoading ? (
                                    <> */}
                                {filteredPartners.length !== 0 ? (
                                    <>
                                        {filteredPartners.map((partner) => (
                                            <Tr _hover={{ bg: 'gray.50' }} key={partner.id}>
                                                <Td textAlign='center' borderColor={'gainsboro'}>{partner.id}</Td>
                                                <Td textAlign="center" borderColor={'gainsboro'}>{partner.partnerName}</Td>
                                                <Td textAlign="center" borderColor={'gainsboro'}>{partner.representativeName}</Td>
                                                <Td textAlign='center' borderColor={'gainsboro'}>{partner.phoneMobile}</Td>
                                                <Td textAlign='center' borderColor={'gainsboro'}>{partner.location}</Td>
                                                <Td textAlign='center' borderColor={'gainsboro'}>
                                                    <Tag size={'md'} variant='subtle' colorScheme='yellow'>
                                                        <TagLabel>PENDING</TagLabel>
                                                    </Tag>
                                                </Td>
                                                <Td
                                                    textAlign='center'
                                                    borderColor={'gainsboro'}
                                                >
                                                    <Button
                                                        borderRadius='full'
                                                        px={3}
                                                        colorScheme="blue"
                                                        variant='ghost'
                                                        onClick={() => {
                                                            setId(partner.id);
                                                            onOpenDetail();
                                                        }}
                                                    >
                                                        <Tooltip label='Service Detail'>
                                                            <span>
                                                                <FaEye />
                                                            </span>
                                                        </Tooltip>
                                                    </Button>
                                                    <Button
                                                        borderRadius='full'
                                                        px={3}
                                                        colorScheme="red"
                                                        variant='ghost'
                                                        onClick={() => {
                                                            setId(partner.id);
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
                                {/* </>
                                ) : (
                                    <Tr>
                                        <Td colSpan={8} textAlign="center">
                                            <Loading />
                                        </Td>
                                    </Tr>
                                )} */}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </Stack>
            <PartnerDetailModal
                isOpen={isOpenDetail}
                onClose={onCloseDetail}
                id={id}
            />
            <ChangeStatusModal
                isOpen={isOpenChange}
                onClose={onCloseChange}
                handleChangeStatus={() => { }}
                type="services"
            />
        </Stack>
    )
}

export default ServicePage