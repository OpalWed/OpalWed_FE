import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PersonalMenu from "../personal_menu";
import { Color } from "../../../../styles/styles";
import { useAuth } from "../../../../hooks/useAuth";
import Logo from "../../../logo";

const AdminNavbar = () => {
    const { role } = useAuth();

    return (
        <Box
            minW={'full'}
            pos={'fixed'}
            top={0}
            zIndex={10}
            bg={Color.darkBlue}
        >
            <HStack
                p={2}
                justify='space-between'
                m={'auto'}
            >
                <HStack>
                    <Box ml={5}>
                        <Link to={(role === 'Admin') ? '/administrator' : '/'}>
                            <Logo height="60px" width="60px" />
                        </Link>
                    </Box>
                </HStack>
                <HStack mr={10}>
                    <PersonalMenu />
                </HStack>
            </HStack>
        </Box>
    );
};

export default AdminNavbar;
