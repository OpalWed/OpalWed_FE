import { Link } from "react-router-dom";
import Logo from "../../../logo";
import { Box } from "@mui/material";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import { Color } from "../../../../styles/styles";
import { useAuth } from "../../../../hooks/useAuth";
import useProfile from "../../../../hooks/useProfile";
import { Dropdown, MenuProps } from "antd";
import { ArrowDropDown } from "@mui/icons-material";

const productItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={'/product/clothes'}>
                Trang phục
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={'/product/jewelry'}>
                Trang sức
            </Link>
        ),
    },
];

const conceptItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to={'/wedding-concept/europe'}>
                Phong cách Châu Âu (Europe)
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to={'/wedding-concept/minimalist'}>
                Phong cách tối giản (Minimalism)
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to={'/wedding-concept/vintage'}>
                Phong cách cổ điển (Vintage)
            </Link>
        ),
    },
];

const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const { data } = useProfile();

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
                            <Link to={'/profile'}>
                                <Text color={'white'}>{data?.fullName}</Text>
                            </Link>
                        </HStack>
                    </HStack>
                ) : (
                    <HStack pos={'absolute'} top={0} right={0}>
                        <HStack>
                            <Link to={'/login'}>
                                <Text color={'white'} fontSize={15}>Đăng nhập</Text>
                            </Link>
                            <Text color={'white'}>/</Text>
                            <Link to={'/sign-up'}>
                                <Text color={'white'} fontSize={15}>Đăng ký</Text>
                            </Link>
                        </HStack>
                    </HStack>
                )}
                <HStack justify={'center'}>
                    <Link to={'/'}>
                        <Box>
                            <Logo height="100px" width="100px" />
                        </Box>
                    </Link>
                </HStack>
                <HStack justify={'center'}>
                    <HStack gap={32}>
                        <Link to={'/about-us'}>
                            <Text color={'white'} fontSize={18}>
                                Về chúng tôi
                            </Text>
                        </Link>
                        <Link to={'/our-services'}>
                            <Text color={'white'} fontSize={18}>
                                Dịch vụ
                            </Text>
                        </Link>
                        <Dropdown menu={{ items: conceptItems }} placement="bottomLeft">
                            <HStack cursor={'pointer'} color={'white'} gap={0} align={'flex-end'}>
                                <Text color={'white'} fontSize={18}>
                                    Ý tưởng tiệc cưới
                                </Text>
                                <ArrowDropDown />
                            </HStack>
                        </Dropdown>
                        <Dropdown menu={{ items: productItems }} placement="bottomLeft">
                            <HStack cursor={'pointer'} color={'white'} gap={0} align={'flex-end'}>
                                <Text color={'white'} fontSize={18}>
                                    Sản phẩm
                                </Text>
                                <ArrowDropDown />
                            </HStack>
                        </Dropdown>
                        <Link to={'/our-partners'}>
                            <Text color={'white'} fontSize={18}>
                                Thành viên hợp tác
                            </Text>
                        </Link>
                        <Link to={'/contact'}>
                            <Text color={'white'} fontSize={18}>
                                Liên hệ
                            </Text>
                        </Link>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    );
};

export default Navbar;
