import { Divider, HStack, Stack, Text, Link as ChaLink } from "@chakra-ui/react";
import Logo from "../../../logo";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Email, Phone, Place } from "@mui/icons-material";
import { Color } from "../../../../styles/styles";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <Stack
            pt={2}
            borderTop='1px solid gainsboro'
            color='white'
            maxW='full'
            bg={Color.darkBlue}
        >
            <HStack py="10px" justify="space-evenly" maxW={'full'} mb={1}>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300'>
                    <Logo width="150px" height="150px" />
                    <Text>Slogan</Text>
                </Stack>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300' align={'center'} gap={4}>
                    <Text fontWeight={400}>Dịch vụ của chúng tôi</Text>
                    <Stack align={'center'}>
                        <Text fontSize={17}>Tổ chức tiệc cưới</Text>
                        <Text fontSize={17}>So sánh & chọn nhà cung cấp</Text>
                        <Text fontSize={17}>Tư vấn tiệc cưới</Text>
                    </Stack>
                </Stack>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300'>
                    <Link to={'/about-us'}>
                        <Text fontWeight={400}>Về chúng tôi</Text>
                    </Link>
                    <Link to={'/our-services'}>
                        <Text fontWeight={400}>Dịch vụ</Text>
                    </Link>
                    <Link to={'/our-partners'}>
                        <Text fontWeight={400}>Thành viên hợp tác</Text>
                    </Link>
                    <Link to={'/contact'}>
                        <Text fontWeight={400}>Liên hệ</Text>
                    </Link>
                </Stack>
                <Stack justify={'flex-start'} fontSize='20px' fontWeight='300' gap={2}>
                    <ChaLink href="https://www.facebook.com/profile.php?id=61565969699038&mibextid=LQQJ4d" isExternal>
                        <HStack>
                            <FacebookRoundedIcon />
                            <Text>OpalWed</Text>
                        </HStack>
                    </ChaLink>
                    <Stack>
                        <HStack gap={2} align={'center'}>
                            <Phone />
                            <Text>0912345678</Text>
                        </HStack>
                        <HStack gap={2} align={'center'}>
                            <Email />
                            <Text>opalwed16@gmail.com</Text>
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
