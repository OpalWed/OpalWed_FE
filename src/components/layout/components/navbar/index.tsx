import { Link } from "react-router-dom";
import Logo from "../../../logo";
import { Box } from "@mui/material";
import { HStack, Text } from "@chakra-ui/react";
import { Color } from "../../../../styles/styles";

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
                p={2}
                justify='space-between'
                maxW={'6xl'}
                m={'auto'}
            >
                <Link to={'/about-us'}>
                    <Text color={'white'}>
                        About Us
                    </Text>
                </Link>
                <Link to={'/our-services'}>
                    <Text color={'white'}>
                        Our Services
                    </Text>
                </Link>
                <Link to={'/'}>
                    <Logo height="60px" width="60px" />
                </Link>
                <Link to={'/our-partners'}>
                    <Text color={'white'}>
                        Our Partners
                    </Text>
                </Link>
                <Link to={'/contact'}>
                    <Text color={'white'}>
                        Contact
                    </Text>
                </Link>
            </HStack>
        </Box>
    );
};

export default Navbar;
