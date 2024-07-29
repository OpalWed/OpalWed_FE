import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Shadow } from "../../styles/styles"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const AboutPage = () => {
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('About Us');
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
                    bg={'#F8F6F3'}
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
                        <Heading fontSize={55} mb={12}>ABOUT US</Heading>
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
                    bg={'#E0EFF4'}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12}>BACKGROUND</Heading>
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
                    bg={'#F8F6F3'}
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
                        <Heading fontSize={55} mb={12}>SLOGAN</Heading>
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
                    bg={'#E0EFF4'}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12}>OUR MISSION</Heading>
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
        </>
    )
}

export default AboutPage