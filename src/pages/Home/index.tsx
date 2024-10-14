import { Box, Button, Divider, Heading, HStack, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack, Text, useDisclosure } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { ArrowForward, SentimentSatisfiedAlt } from "@mui/icons-material"
import PartnersSlider from "./components/slider"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import ConceptModal from "../../components/modal/concept"

const HomePage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { isOpen, onClose, onOpen } = useDisclosure();
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
                        Chúng tôi là OpalWed, một công ty khởi nghiệp mới thành lập, đi tiên phong trong thị trường chưa được khai thác, cung cấp dịch vụ đại diện và hỗ trợ khách hàng trong việc tìm kiếm và lựa chọn dịch vụ cưới từ nhiều nguồn khác nhau. Chúng tôi sẽ đảm nhiệm tất cả từ việc tìm phông chữ được cá nhân hóa cho lời mời đến việc chọn người giải trí và người cung cấp thực phẩm, đảm bảo mọi chi tiết đều hoàn hảo.
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
            <Box
                pos={'relative'}
                width="100%"
                height="50vh"
                bgImage="url('https://media.istockphoto.com/id/1388616087/vector/magic-night-dark-blue-banner-with-sparkling-glitter-bokeh-and-line-art.jpg?s=612x612&w=0&k=20&c=lJafdN3veT2xulp8L_89g6qQttnlo_phniBUNNwWEtU=')"
                bgSize="cover"
                bgPosition="center"
                mb={16}
                mt={10}
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
                    <Heading fontSize={50} fontWeight={400} textAlign={'center'} w={'3xl'}>Nắm bắt tương lai của việc lên kế hoạch cùng OpalWed</Heading>
                    <Text textAlign={'justify'} fontSize={24}>
                        Điểm đến trực tuyến cuối cùng của bạn
                    </Text>
                    {isAuthenticated ? (
                        <Button
                            borderRadius={'full'}
                            w={60}
                            m={'auto'}
                            onClick={onOpen}
                            color={'#203963'}
                            textTransform={'uppercase'}
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
                                >
                                    Tạo kế hoạch
                                </Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>Cần đăng nhập</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <Stack align={'center'} gap={4}>
                                            <Text>Bạn cần đăng nhập để tạo kế hoạch cho buổi tiệc cưới</Text>
                                            <Button colorScheme='blue' w={'full'} onClick={() => navigate('/login')}>Đăng nhập ngay</Button>
                                        </Stack>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    )}
                </Stack>
            </Box>
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
                        THÀNH VIÊN HỢP TÁC
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
            <ConceptModal
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    )
}

export default HomePage