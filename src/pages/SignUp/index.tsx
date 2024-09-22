import { Card, CardBody, Text, Stack, Button, Box, FormControl, FormLabel, Input, useToast, InputGroup, InputRightElement, Divider, AbsoluteCenter, HStack, Icon } from "@chakra-ui/react";
import { Border, Color } from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { FormEvent, useEffect, useRef, useState } from "react";
import Logo from "../../components/logo";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AxiosError } from "axios";
import ApiClient from "../../services/apiClient";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showPass, setShowPass] = useState<boolean>(false);
    const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);
    const usernameRef = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const navigate = useNavigate();
    const googleSignup = useGoogleLogin({
        onSuccess: (token) => {
            handleGoogleLogin(token.access_token);
        },
        onError: () => {
            toast({
                title: "Sign In Error",
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

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        const api = new ApiClient<any>("/auth/register");
        const data = {
            email: username,
            password,
            // fullName,
            // phone,
            // address
        }

        try {
            const response = await api.postUnauthen(data);
            if (response.data.success) {
                toast({
                    title: "Success",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
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
            if (error instanceof AxiosError)
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "An error occurred",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
        }
        navigate('/login');
    }

    useEffect(() => {
        changeTabTitle('Sign Up');
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
                <CardBody py={8} px={20}>
                    <Stack gap={6}>
                        <Box bg={'#0C2948'} px={4} mx={'auto'} onClick={() => navigate('/')} cursor={'pointer'}>
                            <Logo width="6rem" height="6rem" />
                        </Box>
                        <Stack w={'md'} gap={4} m={'auto'}>
                            <FormControl id="email">
                                <FormLabel pl={1}>Email</FormLabel>
                                <Input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    ref={usernameRef}
                                    placeholder="Email"
                                />
                            </FormControl>
                            <FormControl id="password">
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
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel pl={1}>Xác nhận mật khẩu</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPass ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Xác nhận mật khẩu"
                                    />
                                    <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                        {!showPass ? <FaEye /> : <FaEyeSlash />}
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                bg={'#0C2948'}
                                _hover={{ bg: '#143252' }}
                                color={'white'}
                                fontWeight={'400'}
                                onClick={handleSignUp}
                            >
                                Đăng kí
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
                                onClick={() => googleSignup()}
                            >
                                Tiếp tục với Google
                            </Button>
                        </HStack>
                        <HStack gap={2} justify={'center'}>
                            <Text align={"center"}>
                                Đã có tài khoản?
                            </Text>
                            <Text style={{ color: "#00d4d8" }}>
                                <Link to={'/login'}>
                                    Đăng nhập
                                </Link>
                            </Text>
                        </HStack>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    );
};

export default SignUpPage;
