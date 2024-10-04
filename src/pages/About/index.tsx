import { Box, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const AboutPage = () => {
    const imageList: string[] = [

    ]

    const teamMembers = [
        {
            name: 'CEO Nguyen Bao Long',
            position: 'Operational Strategy General Management',
            imageSrc: 'image 18.png',
        },
        {
            name: 'CMO Bui Lam Phuong Nhi',
            position: 'Project Manager Marketing',
            imageSrc: 'image 18.png',
        },
        {
            name: 'CFO Le Ngoc Tam Nhu',
            position: 'Operational Strategy General Management',
            imageSrc: 'image 18.png',
        },
        {
            name: 'CTO Nguyen Cao Minh',
            position: 'Online Platform Management',
            imageSrc: 'image 18.png',
        },
        {
            name: 'CIO Nguyen Hoang Phuc',
            position: 'Online Platform Development',
            imageSrc: 'image 18.png',
        },
        {
            name: 'CDO Nguyen Le Ngoc Cuong',
            position: 'Digital Transformation Management',
            imageSrc: 'image 18.png',
        },
    ];

    useEffect(() => {
        changeTabTitle('Về chúng tôi');
    }, []);

    return (
        <>
            <Box pos={'relative'} mb={'30rem'}>
                <CarouselSlider imageList={imageList} />
                <HStack
                    align={'center'}
                    pos={'absolute'}
                    w={'7xl'}
                    px={28}
                    py={12}
                    left="50%"
                    transform="translate(-50%)"
                    bottom={'-25rem'}
                    bg={Color.lightYellow}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12}>VỀ CHÚNG TÔI</Heading>
                        <Text>
                            We are OpalWed, a newly established startup, pioneer the untapped market,
                            providing customer representation and assistance in finding and selecting
                            wedding services from a variety of sources.
                        </Text>
                        <br />
                        <Text>
                            We'll take care of it all from
                            finding personalized fonts for invitations, to choosing entertainers and
                            caterers, making sure every detail is perfect.
                        </Text>
                    </Stack>
                </HStack>
            </Box>
            <Stack w={'7xl'} m={'auto'} gap={32} mb={10}>
                <HStack
                    align={'center'}
                    w={'full'}
                    px={28}
                    py={12}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12}>LÝ LỊCH</Heading>
                        <Text>
                            We are OpalWed, a newly established startup, pioneer the untapped market,
                            providing customer representation and assistance in finding and selecting
                            wedding services from a variety of sources.
                        </Text>
                        <br />
                        <Text>
                            We'll take care of it all from
                            finding personalized fonts for invitations, to choosing entertainers and
                            caterers, making sure every detail is perfect.
                        </Text>
                    </Stack>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                </HStack>
                <HStack
                    align={'center'}
                    w={'full'}
                    px={28}
                    py={12}
                    bg={Color.lightYellow}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12}>KHẨU HIỆU</Heading>
                        <Text>
                            We are OpalWed, a newly established startup, pioneer the untapped market,
                            providing customer representation and assistance in finding and selecting
                            wedding services from a variety of sources.
                        </Text>
                        <br />
                        <Text>
                            We'll take care of it all from
                            finding personalized fonts for invitations, to choosing entertainers and
                            caterers, making sure every detail is perfect.
                        </Text>
                    </Stack>
                </HStack>
                <HStack
                    align={'center'}
                    w={'full'}
                    px={28}
                    py={12}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12}>TRÁCH NHIỆM</Heading>
                        <Text>
                            We are OpalWed, a newly established startup, pioneer the untapped market,
                            providing customer representation and assistance in finding and selecting
                            wedding services from a variety of sources.
                        </Text>
                        <br />
                        <Text>
                            We'll take care of it all from
                            finding personalized fonts for invitations, to choosing entertainers and
                            caterers, making sure every detail is perfect.
                        </Text>
                    </Stack>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                </HStack>
            </Stack>
            {/* <Card textAlign="center" w={'7xl'} mx={'auto'} pos={'relative'} mt={20} mb={'55rem'} bg={Color.lightYellow}>
                <CardHeader fontSize={36} fontWeight={600}>
                    MEET THE TEAM
                </CardHeader>
                <CardBody>
                    <Image src="image 18.png" alt="Team Group" mb={8} h={550} w={'full'} />
                    <SimpleGrid
                        columns={3}
                        spacingX={24}
                        pos={'absolute'}
                        w={'6xl'}
                        px={6}
                        left="50%"
                        transform="translate(-50%)"
                    >
                        {teamMembers.map((member, index) => (
                            <Box key={index} pos={'relative'} mb={24}>
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    borderRadius="md"
                                    mb={4}
                                    h={350}
                                    w={310}
                                    shadow={'lg'}
                                />
                                <Stack
                                    w={64}
                                    h={129}
                                    bg={Color.lightYellow}
                                    p={5}
                                    pos={'absolute'}
                                    bottom={-16}
                                    left={'50%'}
                                    transform="translate(-50%)"
                                    justify={'center'}
                                >
                                    <Text fontWeight="bold" color={'#0C2948'}>{member.name}</Text>
                                    <Text>{member.position}</Text>
                                </Stack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </CardBody>
                <CardFooter></CardFooter>
            </Card> */}
        </>
    )
}

export default AboutPage