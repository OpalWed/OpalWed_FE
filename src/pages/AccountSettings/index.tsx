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

const AccountSettingsPage = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState<string>('');
    const [accounts, setAccounts] = useState<Account[]>([]);
    const { data: accountData, isLoading: isLoadingAccount, refetch: refetchAccount } = useAccounts();
    const { isOpen: isOpenChange, onClose: onCloseChange, onOpen: onOpenChange } = useDisclosure();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    let filteredAccounts = accounts.filter((account) => {
        return account.email.toLowerCase().includes(keyword.toLowerCase())
    })

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
                                                                    onOpenChange();
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
                                                            onClick={() => navigate(account.id)}
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
        </Stack>
    )
}

export default AccountSettingsPage;