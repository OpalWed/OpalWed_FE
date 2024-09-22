import { Box, Button, Divider, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { ArrowForward, SentimentSatisfiedAlt } from "@mui/icons-material"
import PartnersSlider from "./components/slider"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('OpalWed');
    }, []);

    return (
        <>
            <Box pos={'relative'} mb={48}>
                <CarouselSlider imageList={imageList} />
                <Stack
                    align={'center'}
                    pos={'absolute'}
                    w={'5xl'}
                    px={28}
                    pb={16}
                    pt={8}
                    left="50%"
                    transform="translate(-50%)"
                    bottom={-48}
                    bg={Color.lightYellow}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={6}
                >
                    <Heading fontSize={55}>Giới thiệu</Heading>
                    <Text textAlign={'center'}>
                        We are OpalWed, a newly established startup, pioneer the untapped market,
                        providing customer representation and assistance in finding and selecting
                        wedding services from a variety of sources. We'll take care of it all from
                        finding personalized fonts for invitations, to choosing entertainers and
                        caterers, making sure every detail is perfect.
                    </Text>
                </Stack>
            </Box>
            <Stack w={'5xl'} mx={'auto'} my={16}>
                <Stack gap={10}>
                    <Heading textAlign={'center'} fontSize={24}>| DỊCH VỤ CỦA CHÚNG TÔI |</Heading>
                    <Text textAlign={'center'}>
                        Là một trong những đơn vị tổ chức tiệc cưới chuyên nghiệp và cao cấp đầu tiên tại Việt Nam,
                        OpalWed chuyên tư vấn, thiết kế, lập kế hoạch và thực hiện trọn gói tiệc cưới.
                    </Text>
                    <HStack justify={'space-between'} gap={4}>
                        <Heading textAlign={'center'}>TỔ CHỨC TIỆC CƯỚI</Heading>
                        <SentimentSatisfiedAlt />
                        <Heading textAlign={'center'}>SO SÁNH & CHỌN NHÀ CUNG CẤP</Heading>
                        <SentimentSatisfiedAlt />
                        <Heading textAlign={'center'}>TƯ VẤN TIỆC CƯỚI</Heading>
                    </HStack>
                </Stack>
                <Divider w={'3xl'} mx={'auto'} my={12} borderColor={'black'} />
                <Stack gap={60} mb={36} mt={5}>
                    <HStack align="center" justify="space-between" w={'full'}>
                        <Box flex="1">
                            <Heading
                                fontSize={60}
                                fontFamily="'Great Vibes', cursive"
                                lineHeight="shorter"
                                mb={4}
                            >
                                Tầm
                            </Heading>
                            <Heading
                                fontSize={60}
                                fontFamily="'Great Vibes', cursive"
                                lineHeight="shorter"
                                ml={20}
                            >
                                Nhìn
                            </Heading>
                        </Box>
                        <HStack justify={'flex-end'} flex="3" pos={'relative'}>
                            <Image
                                src="./image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="500px"
                                h="650px"
                            />
                            <Box
                                bg={Color.lightBlue}
                                py={10}
                                px={12}
                                maxW="2xl"
                                boxShadow="md"
                                borderRadius="md"
                                pos={'absolute'}
                                bottom={-36}
                                right={'25%'}
                            >
                                <Text fontSize={15} textAlign={'justify'}>
                                    OpalWed, a newly established startup, has quickly become the helper
                                    that brides and grooms didn't know they needed. We pioneer the
                                    untapped market, providing customer representation and assistance in
                                    finding and selecting wedding services from a variety of sources.
                                </Text>
                                <br />
                                <Text fontSize={15} textAlign={'justify'}>
                                    We'll take care of it all from finding personalized fonts for
                                    invitations, to choosing entertainers and caterers, making sure
                                    every detail is perfect.
                                </Text>
                            </Box>
                        </HStack>
                    </HStack>
                    <HStack align="center" justify="space-between" w={'full'}>
                        <HStack justify={'flex-start'} flex="3" pos={'relative'}>
                            <Image
                                src="./image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="500px"
                                h="650px"
                            />
                            <Box
                                bg={Color.lightYellow}
                                py={10}
                                px={12}
                                maxW="2xl"
                                boxShadow="md"
                                borderRadius="md"
                                pos={'absolute'}
                                bottom={-36}
                                left={'25%'}
                            >
                                <Text fontSize={15} textAlign={'justify'}>
                                    Initial Interview and Consultation: Our team of experts will meet with
                                    clients to understand their desires, style and budget. Based on this
                                    information, we will make the most suitable suggestions.
                                </Text>
                                <br />
                                <Text fontSize={15} textAlign={'justify'}>
                                    Detailed Planning: We will develop a detailed plan, including specific
                                    implementation steps and timelines, to ensure everything goes smoothly
                                    and on schedule.
                                </Text>
                            </Box>
                        </HStack>
                        <Box flex="1">
                            <Heading
                                fontSize={60}
                                fontFamily="'Great Vibes', cursive"
                                lineHeight="shorter"
                                mb={4}
                            >
                                Bản
                            </Heading>
                            <Heading
                                fontSize={60}
                                fontFamily="'Great Vibes', cursive"
                                lineHeight="shorter"
                                ml={20}
                            >
                                Sắc
                            </Heading>
                        </Box>
                    </HStack>
                </Stack>
            </Stack>
            <Box position="relative" bg="#E0EFF4" pt={16} pb={12} borderRadius="md" mb={16} mt={10}>
                <Box
                    position="absolute"
                    top="-20px"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="#F8F6F3"
                    px={6}
                    py={2}
                    borderRadius="md"
                    boxShadow="sm"
                >
                    <Heading as="h2" size="md" textAlign="center">
                        OUR SERVICE PARTNERS
                    </Heading>
                </Box>
                <PartnersSlider />
            </Box>
            <Box
                position="relative"
                width="100%"
                height="300px"
                bgImage="url('https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg')"
                bgSize="cover"
                bgPosition="center"
                mb={44}
            >
                <Box
                    position="absolute"
                    left="50%"
                    bottom={-28}
                    transform="translate(-50%)"
                    bg={Color.lightYellow}
                    px={7}
                    py={12}
                    borderRadius={18}
                    boxShadow="lg"
                    textAlign="center"
                    maxW="xl"
                >
                    <Stack gap={8}>
                        <Text fontSize={16}>
                            Hãy liên hệ với chúng tôi ngay để được tư vấn miễn phí và lên kế hoạch cho ngày cưới hoàn hảo!
                        </Text>
                        <Button
                            colorScheme="yellow"
                            borderRadius={'full'}
                            rightIcon={<ArrowForward />}
                            w={'xs'}
                            m={'auto'}
                            onClick={() => navigate('/contact')}
                        >
                            Liên hệ chúng tôi
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default HomePage