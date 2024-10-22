import { Avatar, Box, Heading, HStack, Input, InputGroup, InputLeftElement, Stack, Text, Textarea } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useProfile from "../../hooks/useProfile";
import { Border, Color } from "../../styles/styles";
import Profile, { ProfileInit } from "../../types/Profile";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { FaRegUser } from "react-icons/fa6";
import { BadgeOutlined, PhoneOutlined, PlaceOutlined } from "@mui/icons-material";

const ProfilePage = () => {
    const { data } = useProfile();
    const [profile, setProfile] = useState<Profile>(ProfileInit);

    useEffect(() => {
        if (data) {
            setProfile(data);
        }
    }, [data])

    useEffect(() => {
        changeTabTitle('Thông tin cá nhân');
    }, []);

    return (
        <>
            <HStack h={78} bg={Color.darkBlue}>
                <Heading fontSize={24} color={'white'} fontWeight={500} my={'auto'} ml={6} fontFamily={'Hatton'}>Thông tin cá nhân</Heading>
            </HStack>
            <Stack w={'6xl'} m={'auto'} align={'flex-start'} gap={0}>
                <HStack borderBottom={Border.lightBorder} w={'full'} py={5} pl={6} align={'flex-start'}>
                    <Text flex={1} fontSize={15} fontWeight={600}>Ảnh đại diện</Text>
                    <Box flex={2}>
                        <Avatar src={profile.imageUrl} />
                    </Box>
                </HStack>
                <HStack borderBottom={Border.lightBorder} w={'full'} py={5} pl={6} align={'flex-start'}>
                    <Text flex={1} fontSize={15} fontWeight={600}>Mô tả bản thân</Text>
                    <Box flex={2}>
                        <Textarea
                            value={profile.description}
                            focusBorderColor='#E2E8F0'
                            maxH={36}
                            minH={36}
                            w={'70%'}
                            borderRadius={20}
                        />
                    </Box>
                </HStack>
                <HStack borderBottom={Border.lightBorder} w={'full'} py={5} pl={6} align={'flex-start'}>
                    <Text flex={1} fontSize={15} fontWeight={600}>Thông tin đăng nhập</Text>
                    <Box flex={2}>
                        <InputGroup>
                            <InputLeftElement width='3.5rem' children={<FaRegUser />} />
                            <Input
                                value={profile.account.email}
                                readOnly
                                pl={14}
                                w={'70%'}
                                borderRadius={'full'}
                            />
                        </InputGroup>
                    </Box>
                </HStack>
                <HStack w={'full'} borderBottom={Border.lightBorder} py={5} pl={6} align={'flex-start'}>
                    <Text flex={1} fontSize={15} fontWeight={600}>Thông tin cá nhân</Text>
                    <Stack flex={2} gap={4}>
                        <InputGroup>
                            <InputLeftElement width='3.5rem' children={<BadgeOutlined />} />
                            <Input
                                value={profile.fullName}
                                readOnly
                                pl={14}
                                w={'70%'}
                                borderRadius={'full'}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement width='3.5rem' children={<PhoneOutlined />} />
                            <Input
                                value={profile.phone}
                                readOnly
                                pl={14}
                                w={'70%'}
                                borderRadius={'full'}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement width='3.5rem' children={<PlaceOutlined />} />
                            <Input
                                value={profile.address}
                                readOnly
                                pl={14}
                                w={'70%'}
                                borderRadius={'full'}
                            />
                        </InputGroup>
                    </Stack>
                </HStack>
                {/* <Card
                    flex={1}
                    align='center'
                    justify='center'
                    gap={0}
                    shadow={Shadow.cardShadow}
                >
                    <CardBody alignSelf={'center'} py={10}>
                        <HStack w={'full'} align={'flex-end'} gap={0}>
                            <Image
                                border='1px solid gainsboro'
                                borderRadius='full'
                                boxSize={'15rem'}
                                src={
                                    profile.imageUrl || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
                                }
                                alt='avatar'
                                bgColor='white'
                                objectFit={'cover'}
                            />
                        </HStack>
                    </CardBody>
                </Card>
                <Stack flex={2}>
                    <Card shadow={Shadow.cardShadow}>
                        <CardBody py={8}>
                            <Stack gap={4}>
                                <HStack>
                                    <FormControl id="fullName" flex={2.5}>
                                        <FormLabel ml={1}>Full Name</FormLabel>
                                        <Input
                                            type="text"
                                            value={profile.fullName}
                                            readOnly
                                        />
                                    </FormControl>
                                </HStack>
                                <FormControl id="description">
                                    <FormLabel pl={1}>Description</FormLabel>
                                    <Textarea
                                        value={profile.description}
                                        focusBorderColor='#E2E8F0'
                                        resize={'none'}
                                        maxH={32}
                                        minH={32}
                                        readOnly
                                    />
                                </FormControl>
                                <HStack>
                                    <FormControl id="phone" flex={1}>
                                        <FormLabel ml={1} pl={1}>Phone number</FormLabel>
                                        <Input
                                            type="tel"
                                            value={profile.phone}
                                            readOnly
                                        />
                                    </FormControl>
                                </HStack>
                                <FormControl id="email" flex={2}>
                                    <FormLabel ml={1}>Email</FormLabel>
                                    <Input
                                        type="email"
                                        value={profile.account.email}
                                        readOnly
                                    />
                                </FormControl>
                                <FormControl id="address" flex={2}>
                                    <FormLabel ml={1}>Address</FormLabel>
                                    <Input
                                        type="text"
                                        value={profile.address}
                                        readOnly
                                    />
                                </FormControl>
                            </Stack>
                        </CardBody>
                    </Card>
                </Stack> */}
            </Stack>
        </>
    )
}

export default ProfilePage