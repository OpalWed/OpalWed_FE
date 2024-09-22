import { Card, CardBody, Text, Stack, Button, Box, FormControl, FormLabel, Input, useToast, InputGroup, InputRightElement, Divider, AbsoluteCenter, HStack, Icon, FormErrorMessage } from "@chakra-ui/react";
import { Border, Color } from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { FormEvent, useEffect, useRef, useState } from "react";
import Logo from "../../components/logo";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { AxiosError } from "axios";
import ApiClient from "../../services/apiClient";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [showPass, setShowPass] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const navigate = useNavigate();
    const { setIsAuthenticated, setRole } = useAuth();
    const googleLogin = useGoogleLogin({
        onSuccess: (token) => {
            handleGoogleLogin(token.access_token);
        },
        onError: () => {
            toast({
                title: "Sign In Error",
                description: "Sign in by Google failed. Try again!!!",
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
                    title: "Error",
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
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        }
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");

        let hasError = false;

        if (email === '') {
            setEmailError("Hãy nhập email");
            hasError = true;
        }

        if (password === '') {
            setPasswordError("Hãy nhập mật khẩu");
            hasError = true;
        }

        if (hasError) {
            return;
        }
        const api = new ApiClient<any>('/auth/login');
        const data = {
            email,
            password,
        };

        try {
            const response = await api.postUnauthen(data);
            console.log(response);

            if (response.isSuccess === false) {
                toast({
                    title: "Error",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            } else {
                localStorage.setItem('access_token', response.data.token);
                const role = response.data.userInfo.accountRole;
                setIsAuthenticated(true);
                setRole(role);
                if (role === 'CUSTOMER') {
                    navigate('/');
                } else if (role === 'ADMIN') {
                    navigate('/administrator');
                }
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        }
    };

    useEffect(() => {
        changeTabTitle('Đăng nhập');
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
                    <Stack gap={8}>
                        <Box bg={'#0C2948'} px={4} mx={'auto'} onClick={() => navigate('/')} cursor={'pointer'}>
                            <Logo width="6rem" height="6rem" />
                        </Box>
                        <Stack w={'md'} gap={5} m={'auto'}>
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
                            <Stack gap={1}>
                                <FormControl id="password" isInvalid={!!passwordError}>
                                    <FormLabel pl={1}>Mật khẩu</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPass ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Mật khẩu"
                                        />
                                        <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowPass(!showPass)}>
                                            {!showPass ? <FaEye /> : <FaEyeSlash />}
                                        </InputRightElement>
                                    </InputGroup>
                                    {passwordError && <FormErrorMessage mt={0} ml={2}>{passwordError}</FormErrorMessage>}
                                </FormControl>
                                <Text
                                    ml={2}
                                    fontSize={12}
                                    cursor={'pointer'}
                                    onClick={() => navigate('/forgot-password')}
                                    maxW={28}
                                    color={'gray'}
                                    _hover={{ color: Color.hoverBlue }}
                                >
                                    Quên mật khẩu?
                                </Text>
                            </Stack>
                            <Button
                                bg={'#0C2948'}
                                _hover={{ bg: '#143252' }}
                                color={'white'}
                                fontWeight={'400'}
                                onClick={handleLogin}
                            >
                                Đăng nhập
                            </Button>
                        </Stack>
                        <Box position='relative'>
                            <Divider borderColor={'black'} />
                            <AbsoluteCenter bg={'white'} px={2}>
                                hoặc
                            </AbsoluteCenter>
                        </Box>
                        <HStack w={'full'} justify={'center'}>
                            <Button
                                leftIcon={<Icon as={FcGoogle} />}
                                bg={'white'}
                                border={Border.tableBorder}
                                size="lg"
                                onClick={() => googleLogin()}
                            >
                                Tiếp tục với Google
                            </Button>
                        </HStack>
                        <HStack gap={2} justify={'center'}>
                            <Text align={"center"}>
                                Không có tài khoản?
                            </Text>
                            <Text style={{ color: "#00d4d8" }}>
                                <Link to={'/sign-up'}>
                                    Đăng ký
                                </Link>
                            </Text>
                        </HStack>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    );
};

export default LoginPage;
