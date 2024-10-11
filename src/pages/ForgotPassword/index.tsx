import { Card, CardBody, Stack, Button, Box, FormControl, FormLabel, Input, useToast, FormErrorMessage, Alert, AlertIcon, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { FormEvent, useEffect, useRef, useState } from "react";
import Logo from "../../components/logo";
import ApiClient from "../../services/apiClient";
import RecoverModal from "../../components/modal/recover";
import LoadingModal from "../../components/modal/loading";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const emailRef = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const navigate = useNavigate();
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const { isOpen: isOpenRecover, onClose: onCloseRecover, onOpen: onOpenRecover } = useDisclosure();

    const handleRecover = async (e: FormEvent) => {
        e.preventDefault();
        setEmailError("");

        if (email === '') {
            setEmailError("Hãy nhập email");
            return;
        }

        onOpenLoading();

        const api = new ApiClient<any>('/auth/forget-password');

        try {
            const response = await api.getUnauthen({
                params: {
                    email
                }
            });

            if (response.isSuccess) {
                onOpenRecover();
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
        } catch (error: any) {

            toast({
                title: "Xảy ra lỗi",
                description: error.response?.data?.message || "Đã có lỗi xảy ra",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        } finally {
            onCloseLoading();
        }
    };

    useEffect(() => {
        changeTabTitle('Quên mật khẩu');
        emailRef.current?.focus();
    }, []);

    return (
        <Stack
            align={'center'}
            justify={'center'}
            h={'100vh'}
            bgImage="url('https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgColor={'white'}
        >
            <Box pos={'absolute'} top={0} bottom={0} right={0} left={0} bg={'white'} opacity={0.4} />
            <Card borderRadius={20} shadow={'xl'}>
                <CardBody py={10} px={20}>
                    <Stack gap={12}>
                        <Box bg={'#0C2948'} px={4} mx={'auto'} onClick={() => navigate('/')} cursor={'pointer'}>
                            <Logo width="6rem" height="6rem" />
                        </Box>
                        <Stack gap={0}>
                            <Alert status='info' w={'md'} mx={'auto'} mb={3}>
                                <AlertIcon />
                                Nhập email để nhận được OTP xác nhận. Nhập OTP cùng với mật khẩu mới để hoàn tất cài đặt lại mật khẩu
                            </Alert>
                            <Stack
                                w={'md'}
                                gap={8}
                                m={'auto'}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        handleRecover(e);
                                    }
                                }}
                            >
                                <FormControl id="email" isInvalid={!!emailError}>
                                    <FormLabel pl={1}>Email</FormLabel>
                                    <Input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        ref={emailRef}
                                        placeholder="Email"
                                    />
                                    {emailError && <FormErrorMessage mt={0} ml={2}>{emailError}</FormErrorMessage>}
                                </FormControl>
                                <Button
                                    bg={'#0C2948'}
                                    _hover={{ bg: '#143252' }}
                                    color={'white'}
                                    fontWeight={'400'}
                                    onClick={handleRecover}
                                >
                                    Tiếp tục
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
            <RecoverModal
                isOpen={isOpenRecover}
                onClose={onCloseRecover}
                email={email}
                sendTime={30}
            />
            <LoadingModal
                isOpen={isOpenLoading}
                onClose={onCloseLoading}
            />
        </Stack>
    );
};

export default ForgotPasswordPage;
