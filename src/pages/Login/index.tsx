import { Card, CardBody, Text, Stack, Button, Box, FormControl, FormLabel, Input, useToast, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Color } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { useEffect, useRef, useState } from "react";
import Logo from "../../components/logo";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPass, setShowPass] = useState<boolean>(false);
    const usernameRef = useRef<HTMLInputElement>(null);
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        changeTabTitle('Login');
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
                <CardBody py={16} px={20}>
                    <Stack gap={10}>
                        <Box bg={'#0C2948'} px={4} mx={'auto'}>
                            <Logo width="6rem" height="6rem" />
                        </Box>
                        <Stack w={'md'} gap={6} m={'auto'}>
                            <FormControl id="username">
                                <FormLabel pl={1}>Username</FormLabel>
                                <Input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    ref={usernameRef}
                                    placeholder="Username"
                                />
                            </FormControl>
                            <Stack gap={1}>
                                <FormControl id="password">
                                    <FormLabel pl={1}>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPass ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                        <InputRightElement width='3.5rem' cursor='pointer' onClick={() => setShowPass(!showPass)}>
                                            {!showPass ? <FaEye /> : <FaEyeSlash />}
                                        </InputRightElement>
                                    </InputGroup>
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
                                    Forgot password?
                                </Text>
                            </Stack>
                            <Button
                                bg={'#0C2948'}
                                _hover={{ bg: '#143252' }}
                                color={'white'}
                                fontWeight={'400'}
                                onClick={() => navigate('/administrator')}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    );
};

export default LoginPage;
