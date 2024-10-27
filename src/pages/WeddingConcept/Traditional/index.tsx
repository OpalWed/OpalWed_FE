import { useEffect } from "react";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Box, Button, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack, Text } from "@chakra-ui/react";
import { Border, Color, Shadow } from "../../../styles/styles";
import CarouselSlider from "../../../components/slider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const TraditionalWeddingConceptPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated, setIntendedRoute } = useAuth();
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Phong cách cổ điển (Vintage)');
    }, []);

    return (
        <>
            <Box pos={'relative'} mb={36}>
                <CarouselSlider imageList={imageList} />
                <Stack
                    align={'center'}
                    pos={'absolute'}
                    w={'5xl'}
                    px={28}
                    pb={16}
                    pt={8}
                    left="50%"
                    transform="translate(-50%, 0)"
                    bottom={-36}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={6}
                >
                    <Heading fontSize={55} fontWeight={300} fontFamily={'Canela'}>Phong cách truyền thống</Heading>
                    <Text textAlign={'justify'} fontFamily={'Noto Sans JP'}>
                        Tiệc cưới phong cách truyền thống là một sự kiện đặc biệt mang đậm bản sắc văn hóa và ý nghĩa gia đình. Không gian tiệc cưới thường được trang trí sang trọng, với hoa tươi, nến và các chi tiết truyền thống, tạo nên không khí ấm cúng và thân mật.
                    </Text>
                </Stack>
            </Box>
            <Stack gap={20} my={16}>
                <Stack w={'6xl'} mx={'auto'} gap={10}>
                    <Heading textAlign={'center'} fontFamily={'Hatton'}>
                        Điều đặc biệt bạn sẽ tìm thấy
                    </Heading>
                    <HStack gap={16} align={'flex-start'}>
                        <Image
                            src="/Europe/Rectangle 443.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading fontFamily={'Cormorant'} fontSize={70}>1</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text fontFamily={'Hatton'} fontSize={20}>Nghi thức trang trọng</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Tiệc cưới truyền thống thường đi kèm với các nghi lễ đặc trưng, như lễ rước dâu, trao nhẫn và làm lễ gia tiên, mang đậm bản sắc văn hóa và thể hiện sự tôn trọng đối với gia đình và tổ tiên.
                            </Text>
                        </Stack>
                        <Image
                            src="/Europe/Rectangle 442.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                    </HStack>

                    <HStack gap={16} align={'flex-start'}>
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading fontFamily={'Cormorant'} fontSize={70}>2</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text fontFamily={'Hatton'} fontSize={20}>Thời trang đặc trưng</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Cô dâu thường mặc áo dài hoặc váy cưới truyền thống, trong khi chú rể có thể mặc comple hoặc trang phục truyền thống. Những bộ trang phục này không chỉ đẹp mà còn chứa đựng nhiều ý nghĩa văn hóa.
                            </Text>
                        </Stack>
                        <Image
                            src="/Europe/Author Bio Photo.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading fontFamily={'Cormorant'} fontSize={70}>3</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text fontFamily={'Hatton'} fontSize={20}>Thực đơn phong phú</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Thực đơn trong tiệc cưới truyền thống thường rất đa dạng, với các món ăn đặc trưng của vùng miền. Những món ăn này không chỉ ngon mà còn mang ý nghĩa tốt đẹp, tượng trưng cho sự may mắn và thịnh vượng.
                            </Text>
                        </Stack>
                    </HStack>

                    <HStack gap={16} align={'flex-start'}>
                        <Image
                            src="/Europe/Rectangle 450.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading fontFamily={'Cormorant'} fontSize={70}>4</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text>Tình cảm gắn kết</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Tiệc cưới truyền thống là dịp để gia đình và bạn bè tụ họp, tạo cơ hội cho mọi người giao lưu, chia sẻ niềm vui. Không khí thân mật, ấm cúng và đầy cảm xúc là những điểm nhấn quan trọng của lễ cưới.
                            </Text>
                        </Stack>
                        <Image
                            src="/Europe/Rectangle 449.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                    </HStack>
                </Stack>
                <HStack gap={0} pos={'relative'}>
                    <Image
                        alt={"Slider Image"}
                        objectFit={"cover"}
                        h={550}
                        p={0}
                        src={"/Europe/Hero Image.png"}
                        flex={2.5}
                    />
                    <Box
                        pos={'absolute'}
                        h={'80%'}
                        w={385}
                        bg={'rgba(248, 246, 243, 0.9)'}
                        right={'15%'}
                        p={2}
                        shadow={'lg'}
                    >
                        <Stack
                            gap={10}
                            align={'center'}
                            justify={'center'}
                            py={20}
                            px={6}
                            border={Border.tableBorder}
                            borderColor={'#B58B61'}
                            h={'full'}
                        >
                            <Heading textAlign={'center'} fontWeight={500} fontFamily={'Hatton'}>
                                Lễ nghi và truyền thống
                            </Heading>
                            <Text fontSize={16} fontFamily={'Noto Sans JP'}>
                                Đám cưới châu Âu thường có các nghi lễ truyền thống giàu di sản văn hóa, chẳng hạn như tiệc chiêu đãi được tổ chức trong lâu đài, vườn nho hoặc biệt thự lịch sử. Điều này mang lại cảm giác hùng vĩ, tinh tế và kết nối với thiên nhiên.
                            </Text>
                        </Stack>
                    </Box>
                    <Box bgColor={'#E0EFF4'} flex={1} h={550} />
                </HStack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Box>
                        <Heading fontSize={14} textAlign={'center'} mb={4} fontFamily={'Noto Sans JP'}>Chi tiết</Heading>
                        <Heading
                            fontSize={40}
                            fontWeight={400}
                            textAlign={'center'}
                            color={'#5B5B5B'}
                            fontFamily={'Cormorant'}
                        >
                            Màu chủ đạo
                        </Heading>
                    </Box>
                    <HStack gap={4}>
                        <HStack flex={2.2} gap={0} align={'flex-end'}>
                            <Card bgColor={Color.lightGold} flex={1.2} pb={10}>
                                <CardHeader
                                    fontSize={70}
                                    ml={10}
                                    mt={-10}
                                    mb={-5}
                                    fontFamily={'Cormorant'}
                                    color={Color.darkBlue}
                                >
                                    01
                                </CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Màu chủ đạo thường là những gam màu tươi sáng và ấm áp như đỏ, vàng, hoặc trắng. Những màu sắc này không chỉ mang lại sự tươi vui mà còn tượng trưng cho hạnh phúc, tài lộc và sự thịnh vượng.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Europe/Rectangle 524.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="498px"
                                flex={1}
                            />
                        </HStack>
                        <Image
                            src="/Europe/Rectangle 525.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1}
                        />
                    </HStack>
                </Stack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Heading
                        fontSize={40}
                        fontWeight={400}
                        textAlign={'center'}
                        color={'#5B5B5B'}
                        fontFamily={'Cormorant'}
                    >
                        Địa điểm
                    </Heading>
                    <Stack gap={10}>
                        <HStack gap={0} align={'flex-end'}>
                            <Image
                                src="/Europe/Rectangle 527.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="400px"
                                flex={1}
                            />
                            <Card bgColor={Color.lightGold} flex={1.2} pb={10}>
                                <CardHeader
                                    fontSize={70}
                                    ml={10}
                                    mt={-10}
                                    mb={-5}
                                    fontFamily={'Cormorant'}
                                    color={Color.darkBlue}
                                >
                                    02
                                </CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Địa điểm tổ chức tiệc cưới truyền thống thường là nhà hàng, hội trường tiệc cưới, hoặc không gian ngoài trời có mái che. Những địa điểm này thường được trang trí công phu để phù hợp với không khí trang trọng của lễ cưới.
                                    </Text>
                                </CardBody>
                            </Card>
                        </HStack>
                        <HStack gap={6}>
                            <Image
                                src="/Europe/Rectangle 547.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="400px"
                                flex={1}
                            />
                            <Image
                                src="/Europe/Rectangle 546.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="400px"
                                flex={1.7}
                            />
                        </HStack>
                    </Stack>
                </Stack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Heading
                        fontSize={40}
                        fontWeight={400}
                        textAlign={'center'}
                        color={'#5B5B5B'}
                        fontFamily={'Cormorant'}
                    >
                        Sân khấu
                    </Heading>
                    <HStack gap={4}>
                        <HStack flex={2.2} gap={0} align={'center'}>
                            <Card bgColor={Color.lightGold} flex={1.2} pb={10}>
                                <CardHeader
                                    fontSize={70}
                                    ml={10}
                                    mt={-10}
                                    mb={-5}
                                    fontFamily={'Cormorant'}
                                    color={Color.darkBlue}
                                >
                                    03
                                </CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Sân khấu thường được thiết kế trang trọng với phông nền đẹp mắt, có thể là vải ren, hoa tươi và đèn trang trí. Ánh sáng lung linh từ đèn chùm hoặc đèn LED giúp tạo không gian lãng mạn cho các nghi thức.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Europe/Rectangle 530.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="498px"
                                flex={1}
                            />
                        </HStack>
                        <Image
                            src="/Europe/Rectangle 531.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1}
                        />
                    </HStack>
                    <HStack flex={2.2} gap={0} align={'flex-end'}>
                        <Image
                            src="/Europe/Rectangle 539.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="291px"
                            flex={1}
                        />
                        <Card bgColor={Color.lightGold} flex={1} py={10}>
                            <CardBody px={10}>
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Chủ đề đám cưới của cả hai mang ý nghĩa tình yêu sẽ là chìa khóa giải quyết xung đột, là chất liệu để tình yêu của đôi uyên ương bền chặt trăm năm.
                                </Text>
                                <br />
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Không gian sảnh cưới được trang trí với tông màu trắng và hồng, mang đến vẻ đẹp ngọt ngào và lãng mạn. Cặp đôi đã lựa chọn ghế chiavary để phục vụ 100 khách. Loại ghế này còn được gọi là Tiffany, thường được sử dụng cho các buổi tiệc và tiệc cưới theo phong cách sang trọng. Tuy nhiên, nhược điểm của ghế là khó thuê vào những thời điểm cao điểm vì nhu cầu cao.
                                </Text>
                            </CardBody>
                        </Card>
                    </HStack>
                </Stack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Heading
                        fontSize={40}
                        fontWeight={400}
                        textAlign={'center'}
                        color={'#5B5B5B'}
                        fontFamily={'Cormorant'}
                    >
                        Trang trí
                    </Heading>
                    <HStack gap={0} align={'flex-end'}>
                        <Card bgColor={Color.lightGold} flex={1} pb={10}>
                            <CardHeader
                                fontSize={70}
                                ml={10}
                                mt={-10}
                                mb={-5}
                                fontFamily={'Cormorant'}
                                color={Color.darkBlue}
                            >
                                04
                            </CardHeader>
                            <CardBody px={10}>
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Trang trí thường bao gồm hoa tươi, bàn ghế được sắp xếp gọn gàng và các chi tiết như khăn trải bàn sang trọng. Các vật dụng như bình hoa, nến và đèn lồng cũng thường được sử dụng để tạo điểm nhấn cho không gian.
                                </Text>
                            </CardBody>
                        </Card>
                        <HStack flex={2}>
                            <Stack flex={1}>
                                <Image
                                    src="/Europe/Rectangle 533.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="245px"
                                />
                                <Image
                                    src="/Europe/Rectangle 540.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="245px"
                                />
                            </Stack>
                            <Image
                                src="/Europe/Rectangle 534.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="500px"
                                flex={1}
                            />
                        </HStack>
                    </HStack>
                    <HStack gap={0}>
                        <Stack flex={2}>
                            <Image
                                src="/Europe/Rectangle 542.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="250px"
                            />
                            <Image
                                src="/Europe/Rectangle 543.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="250px"
                            />
                        </Stack>
                        <Card bgColor={Color.lightGold} flex={1} py={10}>
                            <CardBody px={10}>
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Sau buổi lễ, cặp đôi đã tổ chức một bữa tối nhẹ nhàng cho khách mời trong không gian ấm cúng và nhẹ nhàng, cùng nhau chia sẻ mọi niềm vui trong ngày cưới quan trọng nhất cuộc đời. Cô dâu thể hiện sự thích thú của mình với những chiếc đèn chùm treo trên trần nhà, tạo nên không gian ấm áp và lung linh hơn khi mặt trời dần lặn
                                </Text>
                                <br />
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Với chủ đề hoa chính là hoa hồng và hoa lan như trong sảnh cưới, trang trí bàn tiệc cũng sử dụng hai loại hoa này. Đồng thời, wedding planner cũng sơn những chiếc bình hoa màu đồng để tạo nên vẻ hiện đại cho tiệc cưới
                                </Text>
                            </CardBody>
                        </Card>
                    </HStack>
                </Stack>
                <Stack gap={10}>
                    <Heading
                        fontSize={40}
                        fontWeight={400}
                        textAlign={'center'}
                        color={'#5B5B5B'}
                        fontFamily={'Cormorant'}
                    >
                        Photobooth và Quà tặng
                    </Heading>
                    <Stack gap={10} w={'6xl'} mx={'auto'} align={'flex-end'}>
                        <HStack flex={2.2} gap={0} align={'flex-end'}>
                            <Card bgColor={Color.lightGold} flex={1} py={10}>
                                <CardHeader
                                    fontSize={70}
                                    ml={10}
                                    mt={-10}
                                    mb={-5}
                                    fontFamily={'Cormorant'}
                                    color={Color.darkBlue}
                                >
                                    05
                                </CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Khu vực photobooth thường được trang trí theo phong cách truyền thống với backdrop bằng vải hoặc hoa.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Stack flex={1.5}>
                                <Image
                                    src="/Europe/Rectangle 536.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="full"
                                    h="auto"
                                />
                                <Image
                                    src="/Europe/Rectangle 548.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="full"
                                    h="auto"
                                />
                            </Stack>
                        </HStack>
                        <HStack w={'4xl'} gap={0} align={'flex-end'}>
                            <Image
                                src="/Europe/Rectangle 545.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="248px"
                                flex={1}
                            />
                            <Card bgColor={Color.lightGold} flex={1} py={10}>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Quà tặng cho khách mời thường là những món quà nhỏ ý nghĩa, như bánh kẹo hoặc đồ lưu niệm, thể hiện lòng tri ân từ cặp đôi.
                                    </Text>
                                </CardBody>
                            </Card>
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
                        <Heading fontSize={50} fontWeight={400} textAlign={'center'} w={'3xl'} fontFamily={'Hatton'}>Nắm bắt tương lai của việc lên kế hoạch cùng OpalWed</Heading>
                        <Text textAlign={'justify'} fontSize={24} fontFamily={'Canela'}>
                            Điểm đến trực tuyến cuối cùng của bạn
                        </Text>
                        {isAuthenticated ? (
                            <Button
                                borderRadius={'full'}
                                w={60}
                                m={'auto'}
                                onClick={() => navigate('/wedding-planning/wedding-information')}
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
            </Stack >
        </>
    )
}

export default TraditionalWeddingConceptPage