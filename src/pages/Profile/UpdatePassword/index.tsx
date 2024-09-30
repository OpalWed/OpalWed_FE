import { Alert, AlertIcon, Box, Button, Divider, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { FormEvent, useEffect, useState } from "react"
import { FaEye, FaEyeSlash, FaPenToSquare, FaX } from "react-icons/fa6";
import ApiClient from "../../../services/apiClient";
import { Border, Color } from "../../../styles/styles";
import LoadingModal from "../../../components/modal/loading";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { PasswordOutlined } from "@mui/icons-material";

const UpdatePasswordPage = () => {
    const [showCurrent, setShowCurrent] = useState<boolean>(false);
    const [showNew, setShowNew] = useState<boolean>(false);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorText, setErrorText] = useState<string>('');
    const [updateEnable, setUpdateEnable] = useState<boolean>(false);
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const toast = useToast();

    const handleUpdatePassword = async (e: FormEvent) => {
        e.preventDefault();
        onOpenLoading();
        if (newPassword !== confirmPassword) {
            setErrorText("Xác nhận mật khẩu phải trùng với mật khẩu")
            return;
        }

        const api = new ApiClient('/auth/update-password');
        const data = {
            oldPassword,
            newPassword,
            confirmPassword,
        }

        try {
            const response: any = await api.create(data);
            if (response.status) {
                toast({
                    title: "Success",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error: any) {
            toast({
                title: "Error",
                description: error?.response?.data?.message || "An error occurred",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        } finally {
            onCloseLoading();
        }
    }

    useEffect(() => {
        changeTabTitle('Cập nhật mật khẩu');
    }, []);

    return (
        <>
            <HStack h={78} bg={Color.darkBlue}>
                <Heading fontSize={24} color={'white'} fontWeight={500} my={'auto'} ml={6}>Cập nhật mật khẩu</Heading>
            </HStack>
            {!updateEnable ? (
                <HStack borderBottom={Border.lightBorder} w={'6xl'} mx={'auto'} py={5} pl={6} align={'flex-start'}>
                    <Stack flex={1}>
                        <Text fontSize={15} fontWeight={600}>Mật khẩu hiện tại</Text>
                    </Stack>
                    <Box flex={2}>
                        <HStack justify={'flex-end'} w={'70%'}>
                            <Button
                                leftIcon={<FaPenToSquare />}
                                variant={'outline'}
                                fontSize={15}
                                borderRadius={'full'}
                                onClick={() => setUpdateEnable(true)}
                            >
                                Thay đổi
                            </Button>
                        </HStack>
                        <InputGroup mt={4}>
                            <InputLeftElement width='3.5rem' children={<PasswordOutlined />} />
                            <Input
                                value={'profile.account.email'}
                                type="password"
                                readOnly
                                pl={14}
                                w={'70%'}
                                borderRadius={'full'}
                            />
                        </InputGroup>
                    </Box>
                </HStack>
            ) : (
                <Stack pos={'relative'} h={'calc(100% - 90px)'}>
                    <Stack align='center' w={'full'} mx={'auto'} gap={5} mt={2}>
                        <HStack justify={'flex-end'} w={'95%'}>
                            <Button
                                leftIcon={<FaX />}
                                variant={'outline'}
                                fontSize={15}
                                borderRadius={'full'}
                                onClick={() => setUpdateEnable(false)}
                            >
                                Hủy Thay đổi
                            </Button>
                        </HStack>
                        <Alert status='info' w={'md'} mx={'auto'} mb={3}>
                            <AlertIcon />
                            Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất 1 chữ cái hoa, 1 chữ cái thường và 1 số
                        </Alert>
                        <Stack gap={6} w={'md'}>
                            <FormControl id="old-pasword" isRequired>
                                <FormLabel pl={2}>Mật khẩu hiện tại</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showCurrent ? 'text' : 'password'}
                                        value={oldPassword}
                                        borderRadius={'full'}
                                        required
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                    <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowCurrent(!showCurrent)}>
                                        {!showCurrent ? <FaEye /> : <FaEyeSlash />}
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id="new-password" isRequired>
                                <FormLabel pl={2}>Mật khẩu mới</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showNew ? 'text' : 'password'}
                                        value={newPassword}
                                        borderRadius={'full'}
                                        required
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowNew(!showNew)}>
                                        {!showNew ? <FaEye /> : <FaEyeSlash />}
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id="confirm-new-pass" isRequired>
                                <FormLabel pl={2}>Xác nhận mật khẩu mới</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showConfirm ? 'text' : 'password'}
                                        value={confirmPassword}
                                        borderRadius={'full'}
                                        required
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowConfirm(!showConfirm)}>
                                        {!showConfirm ? <FaEye /> : <FaEyeSlash />}
                                    </InputRightElement>
                                </InputGroup>
                                {errorText && <FormErrorMessage mt={0} ml={2}>{errorText}</FormErrorMessage>}
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Divider
                        pos={'absolute'}
                        bottom={16}
                        w={'5xl'}
                        left={'50%'}
                        transform={'translateX(-50%)'}
                        borderColor={'gainsboro'}
                    />
                    <HStack
                        gap={4}
                        bottom={2}
                        right={8}
                        w={'300px'}
                        pos={'absolute'}
                    >
                        <Button
                            flex={1}
                            borderRadius={'full'}
                            variant={'outline'}
                            onClick={() => {
                                setOldPassword('');
                                setNewPassword('');
                                setConfirmPassword('');
                            }}
                        >
                            Reset change
                        </Button>
                        <Button
                            bg={Color.darkBlue}
                            _hover={{ bg: Color.darkBlueHover }}
                            flex={1}
                            color={'white'}
                            borderRadius={'full'}
                            onClick={handleUpdatePassword}
                        >
                            Save change
                        </Button>
                    </HStack>
                    <LoadingModal
                        isOpen={isOpenLoading}
                        onClose={onCloseLoading}
                    />
                </Stack>
            )}
        </>
    )
}

export default UpdatePasswordPage