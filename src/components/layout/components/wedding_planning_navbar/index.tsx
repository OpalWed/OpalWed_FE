import { Box, Button, HStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Color } from "../../../../styles/styles";
import { FaChevronLeft } from "react-icons/fa6";
import { useAuth } from "../../../../hooks/useAuth";
import Logo from "../../../logo";

const WeddingPlanningNavbar = () => {
    const navigate = useNavigate();
    const { role } = useAuth();

    return (
        <Box
            minW={'full'}
            pos={'fixed'}
            top={0}
            zIndex={10}
            bg={Color.darkBlue}
            my={'auto'}
        >
            <HStack>
                <Button
                    variant={'ghost'}
                    ml={10}
                    py={8}
                    color={'white'}
                    _hover={{ bg: '#ffffff1c' }}
                    onClick={() => navigate(-1)}
                >
                    <FaChevronLeft />
                </Button>
                <Box ml={5}>
                    <Link to={(role === 'Admin') ? '/administrator' : '/'}>
                        <Logo height="60px" width="60px" />
                    </Link>
                </Box>
            </HStack>
        </Box>
    );
};

export default WeddingPlanningNavbar;
