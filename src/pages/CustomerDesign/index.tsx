import { Button, Card, CardHeader, Divider, Heading, HStack, Input, InputGroup, InputLeftElement, Link, Stack, Table, TableContainer, Tag, TagLabel, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { FaArrowRightArrowLeft, FaEye, FaPlus } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { Shadow } from "../../styles/styles";
import ChangeStatusModal from "../../components/modal/change_status";
import useManageApplication from "../../hooks/useManageApplication";
import { Application } from "../../types/Application";
import Loading from "../../components/loading";
import { formatDate } from "../../utils/formatDate";
import { formatDateTime } from "../../utils/formatDateTime";

const CustomerDesignPage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [id, setId] = useState<number>(0);
    const [applications, setApplications] = useState<Application[]>([]);
    const { isOpen: isOpenChange, onClose: onCloseChange, onOpen: onOpenChange } = useDisclosure();
    const { data, isLoading } = useManageApplication();

    let filteredApplications = applications.filter((application) => {
        return application.fullName.toLowerCase().includes(keyword.toLowerCase());
    });

    useEffect(() => {
        changeTabTitle('Quản lý khách hàng tư vấn');
    }, []);

    useEffect(() => {
        if (data?.content) {
            setApplications(data.content);
        }
    }, [data?.content]);

    console.log(id);

    return (
        <Stack w={'full'} align='center' mx='auto' my={5} gap={10}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Tìm kiếm theo tên..."
                    variant="filled"
                    border='1px solid gainsboro'
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                    value={keyword}
                />
            </InputGroup>
            <Stack w={'full'} gap={10}>
                <Heading fontSize={30}>Khách hàng tư vấn</Heading>
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
                                    <Th textAlign='center' borderColor={'gainsboro'}>Khách hàng</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Địa điểm</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Ngày tổ chức</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Ngày tạo</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Trạng thái</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Hành động</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {!isLoading ? (
                                    <>
                                        {filteredApplications.length !== 0 ? (
                                            <>
                                                {filteredApplications.map((application) => (
                                                    <Tr _hover={{ bg: 'gray.50' }} key={application.applicationId}>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{application.applicationId}</Td>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{application.fullName}</Td>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{application.weddingLocation}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{formatDate(application.weddingDate)}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>{formatDateTime(application.createdDate)}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'}>
                                                            <Tag size={'md'} variant='subtle' colorScheme='yellow'>
                                                                <TagLabel>{application.status}</TagLabel>
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
                                                                colorScheme="blue"
                                                                variant='ghost'
                                                            >
                                                                <Tooltip label='Xem thông tin tư vấn'>
                                                                    <Link href={application.requiredServicesFile} isExternal>
                                                                        <span>
                                                                            <FaEye />
                                                                        </span>
                                                                    </Link>
                                                                </Tooltip>
                                                            </Button>
                                                            <Button
                                                                borderRadius='full'
                                                                px={3}
                                                                colorScheme="red"
                                                                variant='ghost'
                                                                onClick={() => {
                                                                    setId(application.applicationId);
                                                                    onOpenChange();
                                                                }}
                                                            >
                                                                <Tooltip label='Deactivate Application'>
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
                handleChangeStatus={() => { }}
                type="application"
            />
        </Stack>
    );
};

export default CustomerDesignPage;
