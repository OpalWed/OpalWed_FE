import { Button, Card, CardBody, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Stack, useDisclosure, useToast } from "@chakra-ui/react"
import { FormEvent, useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import ApiClient from "../../../services/apiClient";
import { Shadow } from "../../../styles/styles";
import LoadingModal from "../../../components/modal/loading";
import { changeTabTitle } from "../../../utils/changeTabTitle";

const UpdatePasswordPage = () => {
    const [showCurrent, setShowCurrent] = useState<boolean>(false);
    const [showNew, setShowNew] = useState<boolean>(false);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorText, setErrorText] = useState<string>('');
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
        changeTabTitle('Thay đổi mật khẩu');
    }, []);

    return (
        <Stack align='center' w={'md'} m={'auto'}>
            <Card justify='center' shadow={Shadow.cardShadow} w={'full'}>
                <CardBody py={10}>
                    <Stack gap={6}>
                        <FormControl id="old-pasword" isRequired>
                            <FormLabel>Current Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showCurrent ? 'text' : 'password'}
                                    value={oldPassword}
                                    required
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem' cursor='pointer' onClick={() => setShowCurrent(!showCurrent)}>
                                    {!showCurrent ? <FaEye /> : <FaEyeSlash />}
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="new-password" isRequired>
                            <FormLabel>New Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showNew ? 'text' : 'password'}
                                    value={newPassword}
                                    required
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem' cursor='pointer' onClick={() => setShowNew(!showNew)}>
                                    {!showNew ? <FaEye /> : <FaEyeSlash />}
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="confirm-new-pass" isRequired>
                            <FormLabel>Confirm New Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showConfirm ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem' cursor='pointer' onClick={() => setShowConfirm(!showConfirm)}>
                                    {!showConfirm ? <FaEye /> : <FaEyeSlash />}
                                </InputRightElement>
                            </InputGroup>
                            {errorText && <FormErrorMessage mt={0} ml={2}>{errorText}</FormErrorMessage>}
                        </FormControl>
                    </Stack>
                </CardBody>
            </Card>
            <HStack spacing={6} mt={5} w={'full'}>
                <Button
                    flex={1}
                    onClick={() => {
                        setOldPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                    }}
                >
                    Reset change
                </Button>
                <Button
                    colorScheme={"blue"}
                    variant={"solid"}
                    flex={1}

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
    )
}

export default UpdatePasswordPage