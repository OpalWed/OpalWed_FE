import { Button, Card, CardHeader, Divider, HStack, Input, InputGroup, InputLeftElement, Stack, Table, TableContainer, Tag, TagLabel, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react";
import { FaArrowRightArrowLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { useNavigate } from "react-router-dom";
import { Shadow } from "../../styles/styles";
import { AddIcon } from "@chakra-ui/icons";
import Loading from "../../components/loading";
import useAccounts from "../../hooks/useAccounts";
import LoadingModal from "../../components/modal/loading";
import { Status } from "../../types/type.enum";
import Account from "../../types/Account";
import ApiClient from "../../services/apiClient";
import ActivateModal from "../../components/modal/activate";
import DeactivateModal from "../../components/modal/deactivate";
import { AxiosError } from "axios";

const AccountSettingsPage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [id, setId] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>('');
    const [status, setStatus] = useState<Status>(Status.INACTIVE);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const { data: accountData, isLoading: isLoadingAccount, refetch: refetchAccount } = useAccounts();
    const { isOpen: isOpenActivate, onClose: onCloseActivate, onOpen: onOpenActivate } = useDisclosure();
    const { isOpen: isOpenDeactivate, onClose: onCloseDeactivate, onOpen: onOpenDeactivate } = useDisclosure();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    let filteredAccounts = accounts.filter((account) => {
        return account.email.toLowerCase().includes(keyword.toLowerCase())
    })

    const handleChangeStatus = async () => {
        onCloseActivate();
        onCloseDeactivate();
        onOpenLoading();
        const api = new ApiClient<any>('/accountInfo/change-account-status');
        const data = {
            id,
            status
        }
        try {
            const response = await api.update(data);
            if (response.isSuccess) {
                toast({
                    title: "Thành công",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                refetchAccount && refetchAccount();
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
        } finally {
            onCloseLoading();
        }
    }

    useEffect(() => {
        changeTabTitle('Quản lý tài khoản');
    }, []);

    useEffect(() => {
        if (accountData) {
            setAccounts(accountData);
        }
    }, [accountData]);

    return (
        <Stack w={'full'} align='center' mx='auto' my={5} gap={10}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Tìm kiếm Email..."
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
                            <Button leftIcon={<AddIcon />} colorScheme="blue">Tạo</Button>
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
                                                            <Tag colorScheme={account.status === Status.ACTIVE ? "green" : 'red'}>
                                                                <TagLabel>
                                                                    {account.status}
                                                                </TagLabel>
                                                            </Tag>
                                                        </Td>
                                                        <Td
                                                            p={1}
                                                            textAlign='center'
                                                            gap={4}
                                                            borderColor={'gainsboro'}
                                                        >
                                                            <Button
                                                                borderRadius='full'
                                                                px={3}
                                                                colorScheme={account.status === Status.INACTIVE ? 'red' : 'green'}
                                                                variant='ghost'
                                                                onClick={() => {
                                                                    setId(account.id);
                                                                    if (account.status === Status.ACTIVE) {
                                                                        setStatus(Status.INACTIVE);
                                                                        onOpenDeactivate();
                                                                    } else {
                                                                        setStatus(Status.ACTIVE);
                                                                        onOpenActivate();
                                                                    }
                                                                }}
                                                            >
                                                                <Tooltip
                                                                    label={
                                                                        account.status === Status.INACTIVE
                                                                            ?
                                                                            'Deactivate user'
                                                                            :
                                                                            'Activate user'
                                                                    }
                                                                >
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
                                                            onClick={() => navigate(account.id.toString())}
                                                        >
                                                            <FaChevronRight />
                                                        </Td>
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
            <LoadingModal
                isOpen={isOpenLoading}
                onClose={onCloseLoading}
            />
            {status === Status.ACTIVE ? (
                <ActivateModal
                    isOpen={isOpenActivate}
                    onClose={onCloseActivate}
                    handleActivate={handleChangeStatus}
                    type="account"
                />
            ) : (
                <DeactivateModal
                    isOpen={isOpenDeactivate}
                    onClose={onCloseDeactivate}
                    handleDeactivate={handleChangeStatus}
                    type="account"
                />
            )}
        </Stack>
    )
}

export default AccountSettingsPage;