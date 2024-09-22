import { Box, Button, HStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import PersonalMenu from "../personal_menu";
import { Color } from "../../../../styles/styles";
import { FaChevronLeft } from "react-icons/fa6";
import { useAuth } from "../../../../hooks/useAuth";
import Logo from "../../../logo";

interface Prop {
    type: string;
}

const AdminNavbar = ({ type }: Prop) => {
    const navigate = useNavigate();
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
                    {type === 'system' && (
                        <Button
                            variant={'ghost'}
                            ml={10}
                            py={8}
                            onClick={() => navigate(-1)}
                        >
                            <FaChevronLeft />
                        </Button>
                    )}
                    <Box ml={5}>
                        <Link to={(role === 'Admin' || role === 'Owner') ? '/administrator' : '/'}>
                            <Logo height="60px" width="60px" />
                        </Link>
                    </Box>
                </HStack>
                {type === 'admin' && (
                    <HStack mr={10}>
                        <PersonalMenu />
                    </HStack>
                )}
            </HStack>
        </Box>
    );
};

export default AdminNavbar;
