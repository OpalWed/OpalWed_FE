import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const AboutPage = () => {
    const imageList: string[] = [

    ]

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
            <Stack w={'5xl'} mx={'auto'} my={16} gap={24}>
                <HStack justify={'space-between'} gap={20}>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={2} px={16} py={10} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30}>Tổ chức tiệc cưới</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim leo. Cras in velit tristique lectus dignissim bibendum fermentum sit amet leo. Etiam vulputate, purus in porta convallis, urna est hendrerit felis, id lobortis leo dui cursus lacus. Vivamus ac tristique eros, vel egestas augue. Etiam eu ultricies risus. Nam imperdiet sapien lacus, eu lobortis diam laoreet id. Curabitur sodales hendrerit urna, sed efficitur sem dictum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut volutpat mi, et porttitor justo. Fusce eu velit vel quam ultrices tristique.
                        </Text>
                    </Stack>
                </HStack>
                <HStack justify={'space-between'} gap={20}>
                    <Stack flex={2} px={16} py={10} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30}>So sánh & chọn nhà cung cấp</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim leo. Cras in velit tristique lectus dignissim bibendum fermentum sit amet leo. Etiam vulputate, purus in porta convallis, urna est hendrerit felis, id lobortis leo dui cursus lacus. Vivamus ac tristique eros, vel egestas augue. Etiam eu ultricies risus. Nam imperdiet sapien lacus, eu lobortis diam laoreet id. Curabitur sodales hendrerit urna, sed efficitur sem dictum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut volutpat mi, et porttitor justo. Fusce eu velit vel quam ultrices tristique.
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
                <HStack justify={'space-between'} gap={20}>
                    <Image
                        src="./image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={2} px={16} py={10} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30}>Tư vấn tiệc cưới</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim leo. Cras in velit tristique lectus dignissim bibendum fermentum sit amet leo. Etiam vulputate, purus in porta convallis, urna est hendrerit felis, id lobortis leo dui cursus lacus. Vivamus ac tristique eros, vel egestas augue. Etiam eu ultricies risus. Nam imperdiet sapien lacus, eu lobortis diam laoreet id. Curabitur sodales hendrerit urna, sed efficitur sem dictum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut volutpat mi, et porttitor justo. Fusce eu velit vel quam ultrices tristique.
                        </Text>
                    </Stack>
                </HStack>
            </Stack>
        </>
    )
}

export default AboutPage