import { Card, CardBody, Text, Stack, Button, Box, FormControl, FormLabel, Input, useToast, InputGroup, InputRightElement, Divider, AbsoluteCenter, HStack, Icon, Heading, useDisclosure, FormErrorMessage } from "@chakra-ui/react";
import { Border } from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { FormEvent, useEffect, useRef, useState } from "react";
import Logo from "../../components/logo";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AxiosError } from "axios";
import ApiClient from "../../services/apiClient";
import { useGoogleLogin } from "@react-oauth/google";
import VerifyModal from "../../components/modal/verify";
import LoadingModal from "../../components/modal/loading";

const SignUpPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showPass, setShowPass] = useState<boolean>(false);
    const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
    const [fullNameError, setFullNameError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [addressError, setAddressError] = useState<string>("");
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const { isOpen: isOpenVerify, onClose: onCloseVerify, onOpen: onOpenVerify } = useDisclosure();
    const emailRef = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const navigate = useNavigate();
    const googleSignup = useGoogleLogin({
        onSuccess: (token) => {
            handleGoogleLogin(token.access_token);
        },
        onError: () => {
            toast({
                title: "Xảy ra lỗi",
                description: "Sign up by Google failed. Try again!!!",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        }
    })

    const handleGoogleLogin = async (token: string) => {
        const api = new ApiClient<any>('/auth/login-google');
        const data = {
            token
        };

        try {
            const response = await api.postUnauthen(data);

            if (response.success) {
                localStorage.setItem('access_token', response.data.token);
                localStorage.setItem('refresh_token', response.data.refreshToken);
                // const decoded = jwtDecode<DecodeJWTRole>(response.data.token);
                // const decodedRole = formatRoleString(decoded.role[0]);

                // setIsAuthenticated(true);
                // setRole(decodedRole);
                // if (decodedRole === 'Customer') {
                //     navigate('/');
                // } else {
                //     return;
                // }
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
    };

    const getVerifyCode = async (email: string) => {
        const api = new ApiClient<any>('/auth/requestOTP');
        try {
            const response = await api.getUnauthen({
                params: {
                    email
                }
            });
            if (!response.isSuccess) {
                toast({
                    title: "Xảy ra lỗi",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                return;
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast({
                    title: "Xảy ra lỗi",
                    description: error.response?.data?.message || "Đã có lỗi xảy ra",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                return
            }
        } finally {
            onCloseLoading();
        }
    }

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        setFullNameError("");
        setPhoneError("");
        setAddressError("");
        if (password !== confirmPassword) {
            setConfirmPasswordError("Xác nhận mật khẩu phải giống với mật khẩu")
            return;
        }
        onOpenLoading();
        const api = new ApiClient<any>("/auth/register");
        const data = {
            email,
            password,
            fullName,
            phone,
            address
        }

        try {
            const response = await api.postUnauthen(data);
            if (response.isSuccess) {
                getVerifyCode(email);
                onOpenVerify();
            } else {
                setEmailError(response.data.errors.email || '');
                setPasswordError(response.data.errors.password || '');
                setFullNameError(response.data.errors.fullName || '');
                setPhoneError(response.data.errors.phone || '');
                setAddressError(response.data.errors.address || '');
                toast({
                    title: "Xảy ra lỗi",
                    description: "Đăng ký không thành công",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        } catch (error) {
            if (error instanceof AxiosError)
                toast({
                    title: "Xảy ra lỗi",
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

    const areAllFieldsFilled = () => {
        return (
            email !== '' &&
            password !== '' &&
            fullName !== '' &&
            phone !== '' &&
            address !== ''
        );
    };

    useEffect(() => {
        changeTabTitle('Đăng ký');
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
                <CardBody py={8} px={16}>
                    <Stack gap={6}>
                        <Box bg={'#0C2948'} px={4} mx={'auto'} onClick={() => navigate('/')} cursor={'pointer'}>
                            <Logo width="6rem" height="6rem" />
                        </Box>
                        <HStack
                            m={'auto'}
                            w={'3xl'}
                            gap={10}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    handleSignUp(e);
                                }
                            }}
                        >
                            <Stack flex={1} gap={3}>
                                <Heading fontSize={18} fontWeight={600} fontFamily={'Hatton'}>Thông tin tài khoản</Heading>
                                <FormControl id="email" isRequired isInvalid={!!emailError}>
                                    <FormLabel pl={1}>Email</FormLabel>
                                    <Input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        ref={emailRef}
                                        placeholder="Email"
                                        required
                                    />
                                    {emailError && <FormErrorMessage mt={0} ml={2}>{emailError}</FormErrorMessage>}
                                </FormControl>
                                <FormControl id="password" isRequired isInvalid={!!passwordError}>
                                    <FormLabel pl={1}>Mật khẩu</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPass ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Mật khẩu"
                                            required
                                        />
                                        <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowPass(!showPass)}>
                                            {!showPass ? <FaEye /> : <FaEyeSlash />}
                                        </InputRightElement>
                                    </InputGroup>
                                    {passwordError && <FormErrorMessage mt={0} ml={2}>{passwordError}</FormErrorMessage>}
                                </FormControl>
                                <FormControl id="confirmPassword" isRequired isInvalid={!!confirmPasswordError}>
                                    <FormLabel pl={1}>Xác nhận mật khẩu</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showConfirmPass ? 'text' : 'password'}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Xác nhận mật khẩu"
                                            required
                                        />
                                        <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                            {!showConfirmPass ? <FaEye /> : <FaEyeSlash />}
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage mt={0} ml={2}>{confirmPasswordError}</FormErrorMessage>
                                </FormControl>
                            </Stack>

                            <Stack flex={1} gap={3}>
                                <Heading fontSize={18} fontWeight={600} fontFamily={'Hatton'}>Thông tin cá nhân</Heading>
                                <FormControl id="fullName" isRequired isInvalid={!!fullNameError}>
                                    <FormLabel pl={1}>Họ và Tên</FormLabel>
                                    <Input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Họ và tên"
                                        required
                                    />
                                    {fullNameError && <FormErrorMessage mt={0} ml={2}>{fullNameError}</FormErrorMessage>}
                                </FormControl>
                                <FormControl id="phone" isRequired isInvalid={!!phoneError}>
                                    <FormLabel pl={1}>Số điện thoại</FormLabel>
                                    <Input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Số điện thoại"
                                        required
                                    />
                                    {phoneError && <FormErrorMessage mt={0} ml={2}>{phoneError}</FormErrorMessage>}
                                </FormControl>
                                <FormControl id="address" isRequired isInvalid={!!addressError}>
                                    <FormLabel pl={1}>Địa chỉ</FormLabel>
                                    <Input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Địa chỉ"
                                        required
                                    />
                                    {addressError && <FormErrorMessage mt={0} ml={2}>{addressError}</FormErrorMessage>}
                                </FormControl>
                            </Stack>
                        </HStack>
                        <Button
                            bg={'#0C2948'}
                            _hover={{ bg: '#143252' }}
                            color={'white'}
                            fontWeight={'400'}
                            fontFamily={'Noto Sans JP'}
                            onClick={handleSignUp}
                            isDisabled={!areAllFieldsFilled()}
                        >
                            Đăng kí
                        </Button>
                        <Box position='relative'>
                            <Divider borderColor={'black'} />
                            <AbsoluteCenter bg={'white'} px={2} fontFamily={'Hatton'}>
                                hoặc
                            </AbsoluteCenter>
                        </Box>
                        <HStack w={'full'} justify={'center'}>
                            <Button
                                leftIcon={<Icon as={FcGoogle} />}
                                bg={'white'}
                                border={Border.tableBorder}
                                size="lg"
                                onClick={() => googleSignup()}
                            >
                                Tiếp tục với Google
                            </Button>
                        </HStack>
                        <HStack gap={2} justify={'center'}>
                            <Text align={"center"} fontFamily={'Noto Sans JP'} fontSize={16}>
                                Đã có tài khoản?
                            </Text>
                            <Text color={"#00d4d8"} fontFamily={'Canela'}>
                                <Link to={'/login'}>
                                    Đăng nhập
                                </Link>
                            </Text>
                        </HStack>
                    </Stack>
                </CardBody>
            </Card>
            <VerifyModal
                isOpen={isOpenVerify}
                onClose={onCloseVerify}
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

export default SignUpPage;
