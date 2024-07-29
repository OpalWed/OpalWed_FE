import { Divider, HStack, Stack, Text } from "@chakra-ui/react";
import Logo from "../../../logo";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Email, Instagram, Phone, Place } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {

    return (
        <Stack
            // bgImg='https://preview.colorlib.com/theme/foodblog/img/footer-bg.jpg.webp'
            // bgRepeat='no-repeat'
            // bgPos='center'
            pt={2}
            borderTop='1px solid gainsboro'
            color='white'
            maxW='full'
            bg={'#0C2948'}
        >
            <HStack py="10px" justify="space-evenly" maxW={'full'} mb={1}>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300'>
                    <Logo width="150px" height="150px" />
                    <Text>Slogan</Text>
                </Stack>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300'>
                    <Text>Our Services</Text>
                    <Text>Slogan</Text>
                </Stack>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300'>
                    <Text>Our Services</Text>
                    <Text>Our Services</Text>
                    <Text>Our Services</Text>
                </Stack>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300' gap={4}>
                    <HStack>
                        <FacebookRoundedIcon />
                        <Instagram />
                        <FaTiktok />
                    </HStack>
                    <Stack>
                        <HStack gap={2} align={'center'}>
                            <Phone />
                            <Text>0912345678</Text>
                        </HStack>
                        <HStack gap={2} align={'center'}>
                            <Email />
                            <Text>0912345678</Text>
                        </HStack>
                        <HStack gap={2} align={'center'}>
                            <Place />
                            <Text>0912345678</Text>
                        </HStack>
                    </Stack>
                </Stack>
            </HStack>
            <Divider borderColor={'white'} w={'3xl'} m={'auto'} />
            <Text textAlign='center' fontSize='18px' fontWeight='400' mt={1} mb={3}>&#169; 2024 OpalWed. All rights reserved.</Text>
        </Stack>
    );
};

export default Footer;
