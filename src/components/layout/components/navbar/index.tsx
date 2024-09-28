import { Link } from "react-router-dom";
import Logo from "../../../logo";
import { Box } from "@mui/material";
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import { Color } from "../../../../styles/styles";
import { useAuth } from "../../../../hooks/useAuth";

const Navbar = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Box
            minWidth={'100%'}
            position={'fixed'}
            top={0}
            zIndex={10}
            sx={{ background: Color.darkBlue }}
        >
            <Stack w={'7xl'} m={'auto'} gap={1} my={2} pos={'relative'}>
                {isAuthenticated ? (
                    <HStack pos={'absolute'} top={0} right={0}>
                        <HStack>
                            <Avatar size={'sm'} />
                            <Text color={'white'}>fullname</Text>
                        </HStack>
                    </HStack>
                ) : (
                    // <HStack pos={'absolute'} top={0} right={0}>
                    //     <HStack>
                    //         <Link to={'/login'}>
                    //             <Text color={'white'} fontSize={15}>Đăng nhập</Text>
                    //         </Link>
                    //         <Text color={'white'}>/</Text>
                    //         <Link to={'/sign-up'}>
                    //             <Text color={'white'} fontSize={15}>Đăng ký</Text>
                    //         </Link>
                    //     </HStack>
                    // </HStack>
                    <HStack pos={'absolute'} top={0} right={0}>
                        <HStack>
                            <Avatar size={'sm'} />
                            <Text color={'white'}>fullname</Text>
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
                    <HStack gap={60}>
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
