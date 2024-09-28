import { Button, Card, CardHeader, Divider, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Table, TableContainer, Tag, TagLabel, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { FaChevronRight, FaPlus, FaTrashCan, FaUserCheck, FaUserDoctor, FaUserNurse, FaUserXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { Link, useNavigate } from "react-router-dom";
import { Color, Shadow } from "../../styles/styles";
import { AddIcon } from "@chakra-ui/icons";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../../components/loading";
import ApiClient from "../../services/apiClient";
import DeleteModal from "../../components/modal/delete";
import ActivateModal from "../../components/modal/activate";
import useAccounts from "../../hooks/useAccounts";
import LoadingModal from "../../components/modal/loading";
import { Status } from "../../types/type.enum";

const AccountSettingsPage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [id, setId] = useState<number>(0);
    const { role } = useAuth();
    const [accounts, setAccounts] = useState<any[]>([]);
    const { data: clinicAccountData, isLoading: isLoadingClinicAccount, refetch: refetchClinicAccount } = useClinicAccounts();
    const { data: accountData, isLoading: isLoadingAccount, refetch: refetchAccount } = useAccounts();
    const { isOpen: isOpenDeactivate, onClose: onCloseDeactivate, onOpen: onOpenDeactivate } = useDisclosure();
    const { isOpen: isOpenActivate, onClose: onCloseActivate, onOpen: onOpenActivate } = useDisclosure();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    let filteredAccounts = accounts.filter((account) => {
        return account.fullName.toLowerCase().includes(keyword.toLowerCase())
    })

    const handleActivate = async () => {
        onOpenLoading();
        onCloseActivate();
        if (type === 'dentist') {
            try {
                const api = new ApiClient<any>(`/dentists/re-activate`);
                const response = await api.updateWithId(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchClinicAccount && refetchClinicAccount();
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        } else if (type === 'staff') {
            const api = new ApiClient<any>(`/staff`);
            try {
                const response = await api.updateWithId(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchClinicAccount && refetchClinicAccount();
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        } else if (type === 'owner') {
            const api = new ApiClient<any>(`/owners/status`);
            try {
                const response = await api.updateWithId(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        } else if (type === 'customer') {
            const api = new ApiClient<any>(`/customers/status`);
            try {
                const response = await api.updateWithId(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        }
    }

    const handleDeactivate = async () => {
        onOpenLoading();
        onCloseDeactivate();
        if (type === 'dentist') {
            try {
                const api = new ApiClient<any>(`/dentists`);
                const response = await api.delete(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchClinicAccount && refetchClinicAccount();
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        } else if (type === 'staff') {
            const api = new ApiClient<any>(`/staff`);
            try {
                const response = await api.delete(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchClinicAccount && refetchClinicAccount();
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        } else if (type === 'owner') {
            const api = new ApiClient<any>(`/owners/status`);
            try {
                const response = await api.updateWithId(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        } else if (type === 'customer') {
            const api = new ApiClient<any>(`/customers/status`);
            try {
                const response = await api.updateWithId(id);
                if (response.success) {
                    toast({
                        title: "Success",
                        description: response.message,
                        status: "success",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                    refetchAccount && refetchAccount();
                } else {
                    toast({
                        title: "Error",
                        description: response.message,
                        status: "error",
                        duration: 2500,
                        position: 'top',
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } finally {
                onCloseLoading();
            }
        }
    }

    useEffect(() => {
        changeTabTitle('Quản lý tài khoản');
    }, []);

    useEffect(() => {
        setAccounts(accountData.content);
    }, [accountData]);

    return (
        <Stack w={'full'} align='center' mx='auto' my={5} gap={10}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search username..."
                    variant="filled"
                    border='1px solid gainsboro'
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                    value={keyword}
                />
            </InputGroup>
            <Stack w={'full'}>
                <Card shadow={Shadow.cardShadow}>
                    <CardHeader py={3}>
                        <HStack w={'full'} justify={'flex-end'} gap={5}>
                            <Button leftIcon={<FaPlus />} colorScheme="blue">Tạo</Button>
                            {/* <Button leftIcon={<FaSliders />} colorScheme="blue">Filter</Button> */}
                        </HStack>
                    </CardHeader>
                    <Divider borderColor={'gainsboro'} />
                    <TableContainer w='full' overflowY="auto" whiteSpace='normal'>
                        <Table variant="simple" size="md">
                            <Thead>
                                <Tr borderColor={'gainsboro'}>
                                    <Th textAlign='center' borderColor={'gainsboro'}>ID</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Email</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Vai trò</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Trạng thái</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}>Hành Động</Th>
                                    <Th textAlign='center' borderColor={'gainsboro'}></Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {!isLoadingAccount ? (
                                    <>
                                        {filteredAccounts.length !== 0 ? (
                                            <>
                                                {filteredAccounts.map((account, index) => (
                                                    <Tr key={index} _hover={{ bg: 'gray.100' }}>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{account.id || '-'}</Td>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>{account.email || '-'}</Td>
                                                        <Td textAlign='center' borderColor={'gainsboro'} textTransform={'capitalize'}>{account.accountRole.toLowerCase()}</Td>
                                                        <Td textAlign="center" borderColor={'gainsboro'}>
                                                            {account.status === Status.ACTIVE && (
                                                                <Tag colorScheme="green">
                                                                    <TagLabel>
                                                                        {account.status}
                                                                    </TagLabel>
                                                                </Tag>
                                                            )}
                                                            {account.status === Status.INACTIVE && (
                                                                <Tag colorScheme="red">
                                                                    <TagLabel>
                                                                        {account.status}
                                                                    </TagLabel>
                                                                </Tag>
                                                            )}
                                                        </Td>
                                                        {account.roleName === 'CUSTOMER' && (
                                                            <>
                                                                <Td
                                                                    p={1}
                                                                    textAlign='center'
                                                                    gap={4}
                                                                    borderColor={'gainsboro'}
                                                                >
                                                                    {account.status === Status.ACTIVE && (
                                                                        <Button
                                                                            borderRadius='full'
                                                                            px={3}
                                                                            colorScheme="red"
                                                                            variant='ghost'
                                                                            onClick={() => {
                                                                                setType('customer');
                                                                                setId(account.id);
                                                                                onOpenDeactivate();
                                                                            }}
                                                                        >
                                                                            <Tooltip label='Deactivate user account'>
                                                                                <span>
                                                                                    <FaUserXmark />
                                                                                </span>
                                                                            </Tooltip>
                                                                        </Button>
                                                                    )}
                                                                    {account.status === Status.INACTIVE && (
                                                                        <Button
                                                                            borderRadius='full'
                                                                            px={3}
                                                                            colorScheme="green"
                                                                            variant='ghost'
                                                                            onClick={() => {
                                                                                setType('customer');
                                                                                setId(account.id);
                                                                                onOpenActivate();
                                                                            }}
                                                                        >
                                                                            <Tooltip label='Activate user account'>
                                                                                <span>
                                                                                    <FaUserCheck />
                                                                                </span>
                                                                            </Tooltip>
                                                                        </Button>
                                                                    )}
                                                                </Td>
                                                                <Td
                                                                    textAlign='center'
                                                                    borderColor={'gainsboro'}
                                                                    cursor={'pointer'}
                                                                    onClick={() => navigate(`customer/${account.id}`)}
                                                                >
                                                                    <FaChevronRight />
                                                                </Td>
                                                            </>
                                                        )}
                                                        {account.roleName === 'ADMIN' && (
                                                            <>
                                                                <Td
                                                                    p={1}
                                                                    textAlign='center'
                                                                    gap={4}
                                                                    borderColor={'gainsboro'}
                                                                >
                                                                    -
                                                                </Td>
                                                                <Td
                                                                    borderColor={'gainsboro'}
                                                                >
                                                                    -
                                                                </Td>
                                                            </>
                                                        )}
                                                    </Tr>
                                                ))}
                                            </>
                                        ) : (
                                            <Tr>
                                                <Td colSpan={8} textAlign="center">
                                                    No account
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
            <DeleteModal
                isOpen={isOpenDeactivate}
                onClose={onCloseDeactivate}
                type={type}
                handleDeactivate={handleDeactivate}
            />
            <ActivateModal
                isOpen={isOpenActivate}
                onClose={onCloseActivate}
                type={type}
                handleActivate={handleActivate}
            />
            <LoadingModal
                isOpen={isOpenLoading}
                onClose={onCloseLoading}
            />
        </Stack>
    )
}

export default AccountSettingsPage;