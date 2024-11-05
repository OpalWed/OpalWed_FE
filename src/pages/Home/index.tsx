import { Box, Button, Divider, Heading, HStack, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { ArrowForward, SentimentSatisfiedAlt } from "@mui/icons-material"
import PartnersSlider from "./components/slider"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const HomePage = () => {
    const navigate = useNavigate();
    const { isAuthenticated, setIntendedRoute } = useAuth();
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
                    <Heading fontSize={55} fontFamily={'Canela'} fontWeight={300}>Chào mừng đến với OpalWed</Heading>
                    <Text textAlign={'center'} fontFamily={'Noto Sans JP'}>
                        Chúng tôi là OpalWed - doanh nghiệp cung cấp dịch vụ tư vấn, đại diện và hỗ trợ khách hàng trong việc tìm kiếm và lựa chọn dịch vụ cưới từ nhiều nguồn khác nhau. Với website trực tuyến đa dạng các dịch vụ từ các nhà cung cấp dịch vụ cưới và tính năng tìm kiếm thông minh giúp cho khách hàng dễ dàng tìm kiếm các dịch vụ phù hợp với nhu cầu và phong cách của mình
                    </Text>
                </Stack>
            </Box>
            <Box
                pos={'relative'}
                width="100%"
                height="50vh"
                bgImage="url('https://media.istockphoto.com/id/1388616087/vector/magic-night-dark-blue-banner-with-sparkling-glitter-bokeh-and-line-art.jpg?s=612x612&w=0&k=20&c=lJafdN3veT2xulp8L_89g6qQttnlo_phniBUNNwWEtU=')"
                bgSize="cover"
                bgPosition="center"
                my={16}
            >
                <Stack
                    align={'center'}
                    pos={'absolute'}
                    w={'5xl'}
                    left="50%"
                    transform="translate(-50%, 0)"
                    bottom={"15%"}
                    gap={6}
                    color={'white'}
                >
                    <Heading fontSize={50} fontWeight={400} textAlign={'center'} w={'3xl'} fontFamily={'Hatton'}>Nắm bắt tương lai của việc lên kế hoạch cùng OpalWed</Heading>
                    <Text textAlign={'justify'} fontSize={24} fontFamily={'Canela'}>
                        Điểm đến trực tuyến cuối cùng của bạn
                    </Text>
                    {isAuthenticated ? (
                        <Button
                            borderRadius={'full'}
                            w={60}
                            m={'auto'}
                            onClick={() => navigate('wedding-planning/wedding-information')}
                            color={'#203963'}
                            textTransform={'uppercase'}
                            fontFamily={'Noto Sans JP'}
                        >
                            Tạo kế hoạch
                        </Button>
                    ) : (
                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    borderRadius={'full'}
                                    w={60}
                                    m={'auto'}
                                    color={'#203963'}
                                    textTransform={'uppercase'}
                                    fontFamily={'Noto Sans JP'}
                                    fontWeight={500}
                                >
                                    Tạo kế hoạch
                                </Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader fontFamily={'Noto Sans JP'}>Cần đăng nhập</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <Stack align={'center'} gap={4}>
                                            <Text fontFamily={'Noto Sans JP'} fontSize={17} mb={2}>Bạn cần đăng nhập để tạo kế hoạch cho buổi tiệc cưới</Text>
                                            <Button
                                                colorScheme='blue'
                                                w={'full'}
                                                onClick={() => {
                                                    navigate('/login');
                                                    setIntendedRoute('/wedding-planning/wedding-information');
                                                }}
                                                fontFamily={'Noto Sans JP'}
                                                fontSize={14}
                                                fontWeight={500}
                                            >
                                                Đăng nhập ngay
                                            </Button>
                                        </Stack>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    )}
                </Stack>
            </Box>
            <Stack w={'5xl'} mx={'auto'} my={12}>
                <Stack gap={10}>
                    <Heading textAlign={'center'} fontSize={24} fontFamily={'Noto Sans JP'} fontWeight={400}>| DỊCH VỤ CỦA CHÚNG TÔI |</Heading>
                    <Text textAlign={'center'} fontFamily={'Noto Sans JP'}>
                        Là một trong những đơn vị tổ chức tiệc cưới chuyên nghiệp và cao cấp đầu tiên tại Việt Nam,
                        OpalWed chuyên tư vấn, thiết kế, lập kế hoạch và thực hiện trọn gói tiệc cưới.
                    </Text>
                    <HStack justify={'space-between'} gap={4}>
                        <Heading textAlign={'center'} fontFamily={'Canela'} fontWeight={400}>TỔ CHỨC TIỆC CƯỚI</Heading>
                        <SentimentSatisfiedAlt />
                        <Heading textAlign={'center'} fontFamily={'Canela'} fontWeight={400}>SO SÁNH & CHỌN NHÀ CUNG CẤP</Heading>
                        <SentimentSatisfiedAlt />
                        <Heading textAlign={'center'} fontFamily={'Canela'} fontWeight={400}>TƯ VẤN TIỆC CƯỚI</Heading>
                    </HStack>
                </Stack>
                <Divider w={'3xl'} mx={'auto'} my={12} borderColor={'black'} />
                <Stack gap={60} mb={36} mt={5}>
                    <HStack align="center" justify="space-between" w={'full'}>
                        <Box flex="1">
                            <Heading
                                fontSize={72}
                                fontFamily="Great Vibes"
                                fontWeight={500}
                                lineHeight="shorter"
                                mb={4}
                            >
                                Tầm
                            </Heading>
                            <Heading
                                fontSize={72}
                                fontFamily="Great Vibes"
                                fontWeight={500}
                                lineHeight="shorter"
                                ml={20}
                            >
                                Nhìn
                            </Heading>
                        </Box>
                        <HStack justify={'flex-end'} flex="3" pos={'relative'}>
                            <Image
                                src="./vision.png"
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
                                <Text fontSize={15} textAlign={'justify'} fontFamily={'Noto Sans JP'}>
                                    Tại OPALWED, chúng tôi định hướng trở thành đơn vị tiên phong trong lĩnh vực tổ chức sự kiện sáng tạo, ứng dụng công nghệ hiện đại để tối ưu hóa trải nghiệm người dùng. Chúng tôi tin rằng công nghệ chỉ thực sự có ý nghĩa khi giúp nâng cao sự kết nối giữa con người. Do đó, OPALWED luôn cam kết kết hợp các công cụ tiên tiến với sự tinh tế và cảm xúc cá nhân, nhằm tạo nên những sự kiện cưới đáng nhớ, đậm dấu ấn cá nhân cho từng cặp đôi.
                                </Text>
                            </Box>
                        </HStack>
                    </HStack>
                    <HStack align="center" justify="space-between" w={'full'}>
                        <HStack justify={'flex-start'} flex="3" pos={'relative'}>
                            <Image
                                src="./special.png"
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
                                <Text fontSize={15} textAlign={'justify'} fontFamily={'Noto Sans JP'}>
                                    OPALWED đại diện cho sự kết hợp giữa sự sáng tạo và trách nhiệm. Chúng tôi không chỉ cung cấp dịch vụ trọn gói mà còn tận tâm chăm chút từng chi tiết nhỏ, từ ý tưởng ban đầu đến khâu thực hiện. Mỗi lễ cưới được chúng tôi thiết kế đều mang đậm dấu ấn cá nhân của khách hàng, giúp họ thể hiện phong cách riêng và tạo nên khoảnh khắc không thể nào quên. OPAL WED là nơi mà sự chuyên nghiệp, tiện lợi và cá tính hội tụ, mang đến trải nghiệm hoàn hảo cho những cặp đôi bận rộn nhưng luôn khao khát sự khác biệt và hoàn mỹ.
                                </Text>
                            </Box>
                        </HStack>
                        <Box flex="1">
                            <Heading
                                fontSize={72}
                                fontFamily="Great Vibes"
                                fontWeight={500}
                                lineHeight="shorter"
                                mb={4}
                            >
                                Bản
                            </Heading>
                            <Heading
                                fontSize={72}
                                fontFamily="Great Vibes"
                                fontWeight={500}
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
                    <Heading as="h2" size="md" textAlign="center" fontFamily={'Canela'} fontWeight={400} fontSize={17}>
                        NHÀ CUNG CẤP
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
                        <Text fontSize={18} fontFamily={'Canela'}>
                            Hãy liên hệ với chúng tôi ngay để được tư vấn miễn phí và lên kế hoạch cho ngày cưới hoàn hảo!
                        </Text>
                        <Button
                            colorScheme="yellow"
                            borderRadius={'full'}
                            rightIcon={<ArrowForward />}
                            w={'xs'}
                            m={'auto'}
                            fontSize={15}
                            fontFamily={'Noto Sans JP'}
                            fontWeight={500}
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