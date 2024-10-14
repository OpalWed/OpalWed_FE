import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Color } from "../../../../styles/styles";
import { FaChevronLeft } from "react-icons/fa6";
import { useAuth } from "../../../../hooks/useAuth";
import Logo from "../../../logo";
import { useEffect, useState } from "react";

const WeddingPlanningNavbar = () => {
    const navigate = useNavigate();
    const { role } = useAuth();
    const [title, setTitle] = useState<string>(document.title);

    useEffect(() => {
        const handleTitleChange = () => {
            setTitle(document.title);
        };

        const observer = new MutationObserver(handleTitleChange);
        const titleElement = document.querySelector('title');

        if (titleElement) {
            observer.observe(titleElement, { childList: true });
        }

        return () => {
            if (titleElement) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <Box
            minW={'full'}
            pos={'fixed'}
            top={0}
            zIndex={10}
            bg={Color.darkBlue}
            my={'auto'}
        >
            <HStack
                p={4}
                pos={'relative'}
            >
                <HStack pos={'absolute'}>
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
                <Heading
                    textAlign={'center'}
                    w={'full'}
                    color={'white'}
                    fontWeight={500}
                    fontSize={24}
                >
                    Chọn {title.toLowerCase()}
                </Heading>
            </HStack>
        </Box>
    );
};

export default WeddingPlanningNavbar;
