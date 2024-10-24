import { Link, useLocation } from "react-router-dom";
import Logo from "../../../logo";
import { Box } from "@mui/material";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import { Color } from "../../../../styles/styles";
import { useAuth } from "../../../../hooks/useAuth";
import useProfile from "../../../../hooks/useProfile";
import { Dropdown, MenuProps } from "antd";
import { ArrowDropDown } from "@mui/icons-material";

const conceptItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={'/wedding-concept/traditional'}>
                Phong cách truyền thống (Traditional)
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={'/wedding-concept/europe'}>
                Phong cách Châu Âu (Europe)
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to={'/wedding-concept/minimalist'}>
                Phong cách tối giản (Minimalism)
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link to={'/wedding-concept/vintage'}>
                Phong cách cổ điển (Vintage)
            </Link>
        ),
    },
];

const Navbar = () => {
    const { isAuthenticated, setIntendedRoute } = useAuth();
    const { data } = useProfile();
    const location = useLocation();

    console.log(location.pathname);


    return (
        <Box
            minWidth={'100%'}
            position={'fixed'}
            top={0}
            zIndex={10}
            sx={{ background: Color.darkBlue }}
        >
            <Stack w={'7xl'} m={'auto'} gap={0} my={2} pos={'relative'}>
                {isAuthenticated ? (
                    <HStack pos={'absolute'} top={0} right={0}>
                        <HStack>
                            <Avatar size={'sm'} />
                            <Link to={'/profile'} onClick={() => setIntendedRoute(location.pathname)}>
                                <Text color={'gainsboro'} fontFamily={'Hatton'}>{data?.fullName}</Text>
                            </Link>
                        </HStack>
                    </HStack>
                ) : (
                    <HStack pos={'absolute'} top={0} right={0}>
                        <HStack>
                            <Link to={'/login'}>
                                <Text color={'gainsboro'} fontSize={15} fontFamily={'Hatton'}>Đăng nhập</Text>
                            </Link>
                            <Text color={'gainsboro'}>/</Text>
                            <Link to={'/sign-up'}>
                                <Text color={'gainsboro'} fontSize={15} fontFamily={'Hatton'}>Đăng ký</Text>
                            </Link>
                        </HStack>
                    </HStack>
                )}
                <HStack justify={'center'}>
                    <HStack gap={36} align={'flex-end'}>
                        <HStack gap={60}>
                            <Link to={'/about-us'}>
                                <Text color={'gainsboro'} fontSize={18} fontFamily={'Hatton'}>
                                    Về chúng tôi
                                </Text>
                            </Link>
                            <Link to={'/our-services'}>
                                <Text color={'gainsboro'} fontSize={18} fontFamily={'Hatton'}>
                                    Dịch vụ
                                </Text>
                            </Link>
                        </HStack>
                        <Box mb={0}>
                            <Link to={'/'}>
                                <Box>
                                    <Logo height="100px" width="100px" />
                                </Box>
                            </Link>
                        </Box>
                        <HStack gap={60}>
                            <Dropdown menu={{ items: conceptItems }} placement="bottomLeft">
                                <HStack cursor={'pointer'} color={'gainsboro'} gap={0} align={'flex-end'}>
                                    <Text color={'gainsboro'} fontSize={18} fontFamily={'Hatton'}>
                                        Ý tưởng tiệc cưới
                                    </Text>
                                    <ArrowDropDown />
                                </HStack>
                            </Dropdown>
                            <Link to={'/contact'}>
                                <Text color={'gainsboro'} fontSize={18} fontFamily={'Hatton'}>
                                    Liên hệ
                                </Text>
                            </Link>
                        </HStack>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    );
};

export default Navbar;
