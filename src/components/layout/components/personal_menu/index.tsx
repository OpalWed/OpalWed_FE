import { Avatar, Button, Card, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import { FaDoorOpen } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useAuth } from "../../../../hooks/useAuth";
import useProfile from "../../../../hooks/useProfile";

const PersonalMenu = () => {

    const { data } = useProfile();
    const navigate = useNavigate();
    const { setIsAuthenticated, setRole } = useAuth();

    const handleLogout = async () => {
        localStorage.removeItem('access_token');
        setIsAuthenticated(false);
        setRole('');
        navigate('/');
    }

    return (
        <Menu autoSelect={false} isLazy>
            <MenuButton>
                <Avatar
                    size={'md'}
                    src={'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}
                    objectFit={'cover'}
                />
            </MenuButton>
            <MenuList minW={'sm'}>
                <Stack gap={0}>
                    <Card maxW={'full'} p={5} m={4} mt={2} borderTop={'0.5px solid #f0f0f0'}>
                        <Flex gap={4} align={'center'}>
                            <Avatar size={'sm'} src={'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'} />
                            <Text fontWeight={600} textAlign={'center'} flex={1}>{`Welcome back, ${data?.fullName}`}</Text>
                        </Flex>
                        <Divider my={3} />
                        <MenuItem
                            p={0}
                            _hover={{ bg: 'none' }}
                            onClick={() => navigate('/profile')}
                        >
                            <Button w={'full'}>
                                View personal information
                            </Button>
                        </MenuItem>
                    </Card>
                    <MenuItem
                        maxW={'95%'}
                        borderRadius={10}
                        p={3}
                        mx={2}
                        fontSize={17}
                        fontWeight={600}
                        onClick={handleLogout}
                    >
                        <Button
                            px={3}
                            borderRadius={'full'}
                            mr={3}
                            bg={'#dedede'}
                            _hover={{ bg: '#dedede' }}
                        >
                            <FaDoorOpen />
                        </Button>
                        Logout
                    </MenuItem>
                </Stack>
            </MenuList>
        </Menu>
    )
}

export default PersonalMenu