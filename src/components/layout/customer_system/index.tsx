import { Avatar, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Outlet, useLocation } from "react-router"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../../../hooks/useAuth"
import NotFoundPage from "../../../pages/NotFound"
import { FaArrowLeft, FaDoorOpen, FaFile, FaLock, FaUser, FaUserGear } from "react-icons/fa6"
import { Border, Color } from "../../../styles/styles"

const CustomerSystemLayout = () => {
    const { role, intendedRoute, setIsAuthenticated, setRole, setIntendedRoute } = useAuth();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (role !== 'Customer') {
        return <NotFoundPage />
    }

    const handleLogout = async () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('tokenExpiration');
        setIsAuthenticated(false);
        setRole('');
        setIntendedRoute(null);
        navigate('/');
    }

    return (
        <>
            <HStack align='flex-start' gap={0}>
                <Stack borderRight={Border.lightBorder} h={'100vh'} w={'400px'} pos={'relative'}>
                    <HStack pt={1}>
                        <Button bg={'none'} _hover={{ bg: 'none' }} onClick={() => navigate(intendedRoute || '/')}>
                            <FaArrowLeft />
                        </Button>
                    </HStack>
                    <Stack gap={6}>
                        <HStack pl={4}>
                            <Avatar src="/opalwed_web_logo.svg" bg={Color.darkBlue} p={1} />
                            <Heading fontSize={28} fontWeight={700} userSelect={'none'} fontFamily={'Hatton'} mb={-2}>OPALWED</Heading>
                        </HStack>
                        <Stack gap={0}>
                            <HStack
                                h={14}
                                cursor={'pointer'}
                                pl={6}
                                borderRadius={4}
                                _hover={{ bg: 'gainsboro' }}
                                onClick={() => navigate('/profile')}
                            >
                                <FaUser />
                                <Text fontSize={16} fontWeight={500}>Thông tin cá nhân</Text>
                            </HStack>
                            <HStack
                                h={14}
                                cursor={'pointer'}
                                pl={6}
                                borderRadius={4}
                                _hover={{ bg: 'gainsboro' }}
                                onClick={() => navigate('/profile/update-profile')}
                            >
                                <FaUserGear />
                                <Text fontSize={16} fontWeight={500}>Cập nhật hồ sơ</Text>
                            </HStack>
                            <HStack
                                h={14}
                                cursor={'pointer'}
                                pl={6}
                                borderRadius={4}
                                _hover={{ bg: 'gainsboro' }}
                                onClick={() => navigate('/profile/update-password')}
                            >
                                <FaLock />
                                <Text fontSize={16} fontWeight={500}>Cập nhật mật khẩu</Text>
                            </HStack>
                            <HStack
                                h={14}
                                cursor={'pointer'}
                                pl={6}
                                borderRadius={4}
                                _hover={{ bg: 'gainsboro' }}
                                onClick={() => navigate('/consulting-information')}
                            >
                                <FaFile />
                                <Text fontSize={16} fontWeight={500}>Đơn tư vấn của bạn</Text>
                            </HStack>
                            <HStack
                                h={14}
                                cursor={'pointer'}
                                pl={6}
                                borderRadius={4}
                                pos={'absolute'}
                                bottom={0}
                                w={'full'}
                                _hover={{ bg: 'gainsboro' }}
                                onClick={handleLogout}
                            >
                                <FaDoorOpen />
                                <Text fontSize={16} fontWeight={500}>Đăng xuất</Text>
                            </HStack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    pb={2}
                    flex={1}
                    flexBasis={'full'}
                    alignSelf='flex-start'
                >
                    <Stack h={'calc(100vh - 0.5rem)'} overflowY={'auto'}>
                        <Outlet />
                    </Stack>
                </Stack>
            </HStack>
        </>
    )
}

export default CustomerSystemLayout