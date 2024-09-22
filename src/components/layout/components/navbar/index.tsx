import { Link } from "react-router-dom";
import Logo from "../../../logo";
import { Box } from "@mui/material";
import { Button, HStack, Text } from "@chakra-ui/react";
import { Border, Color } from "../../../../styles/styles";

const Navbar = () => {

    return (
        <Box
            minWidth={'100%'}
            position={'fixed'}
            top={0}
            zIndex={10}
            sx={{ background: Color.darkBlue }}
        >
            <HStack
                py={2}
                px={10}
                gap={5}
                borderBottom={Border.tableBorder}
                justify={'flex-end'}
            >
                <Button py={6} px={5}>
                    Sign Up
                </Button>
                <Link to={'/about-us'}>
                    <Text color={'white'}>
                        Sign In
                    </Text>
                </Link>
            </HStack>
            <HStack
                p={2}
                justify='space-between'
                maxW={'6xl'}
                m={'auto'}
            >
                <Link to={'/about-us'}>
                    <Text color={'white'}>
                        Về chúng tôi
                    </Text>
                </Link>
                <Link to={'/our-services'}>
                    <Text color={'white'}>
                        Dịch vụ
                    </Text>
                </Link>
                <Link to={'/'}>
                    <Logo height="60px" width="60px" />
                </Link>
                <Link to={'/our-partners'}>
                    <Text color={'white'}>
                        Thành viên hợp tác
                    </Text>
                </Link>
                <Link to={'/contact'}>
                    <Text color={'white'}>
                        Liên hệ
                    </Text>
                </Link>
            </HStack>
        </Box>
    );
};

export default Navbar;
