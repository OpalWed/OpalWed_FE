import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Color } from "../../../../styles/styles";
import { useAuth } from "../../../../hooks/useAuth";
import Logo from "../../../logo";

const WeddingPlanningNavbar = () => {
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
            <HStack py={1} ml={4}>
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
