import { useEffect } from "react";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Box, Button, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack, Text } from "@chakra-ui/react";
import { Border, Color, Shadow } from "../../../styles/styles";
import CarouselSlider from "../../../components/slider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const VintageWeddingConceptPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const imageList: string[] = [
        '/Vintage/Rectangle 559.png',
        '/Vintage/Rectangle 539.png'
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
                    <Heading fontSize={55} fontWeight={300} fontFamily={'Canela'}>Phong cách cổ điển</Heading>
                    <Text textAlign={'justify'} fontFamily={'Noto Sans JP'}>
                        Sử dụng các yếu tố cổ điển, từ trang trí đến trang phục, mang lại không khí ấm áp và lãng mạn. Các chi tiết như bàn ghế gỗ, hoa khô, và đèn treo tạo ra vẻ đẹp hoài cổ và đầy ý nghĩa.
                    </Text>
                </Stack>
            </Box>
            <Stack gap={20} my={16}>
                <Stack w={'6xl'} mx={'auto'} gap={10}>
                    <Heading textAlign={'center'} fontFamily={'Hatton'}>
                        Điều đặc biệt bạn sẽ tìm thấy
                    </Heading>
                    <Stack gap={16} align={'flex-start'}>
                        <HStack>
                            <Image
                                src="/Vintage/Rectangle 549.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                            <Stack flex={1} align={'center'} gap={8}>
                                <Heading fontFamily={'Cormorant'} fontSize={70}>1</Heading>
                                <Divider w={'md'} borderColor={'#B58B61'} />
                                <Text fontFamily={'Hatton'} fontSize={20}>Thời trang đặc trưng</Text>
                                <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17} w={'75%'}>
                                    Cô dâu và chú rể thường chọn những bộ trang phục theo phong cách retro, như váy xòe với ren, hoặc áo vest cổ điển. Những phụ kiện như mũ, găng tay và trang sức vintage cũng thường được sử dụng.
                                </Text>
                            </Stack>
                        </HStack>
                        <HStack gap={16} align={'flex-start'}>
                            <Stack flex={1} align={'center'} gap={8}>
                                <Heading fontFamily={'Cormorant'} fontSize={70}>2</Heading>
                                <Divider w={'md'} borderColor={'#B58B61'} />
                                <Text fontFamily={'Hatton'} fontSize={20}>Chi tiết thủ công</Text>
                                <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17} w={'75%'}>
                                    Những chi tiết như thiệp cưới handmade, bàn tiệc được trang trí bằng hoa tươi và các vật dụng cổ điển được sắp xếp khéo léo, mang lại cảm giác cá nhân và độc đáo cho ngày trọng đại.
                                </Text>
                            </Stack>
                            <Image
                                src="/Vintage/Rectangle 448.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                        </HStack>
                        <HStack>
                            <Image
                                src="/Minimalism/Author Bio Photo.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                            <Stack flex={1} align={'center'} gap={8}>
                                <Heading fontFamily={'Cormorant'} fontSize={70}>3</Heading>
                                <Divider w={'md'} borderColor={'#B58B61'} />
                                <Text fontFamily={'Hatton'} fontSize={20}>Thực đơn đậm đà</Text>
                                <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17} w={'75%'}>
                                    Thực đơn trong tiệc cưới vintage thường bao gồm các món ăn truyền thống hoặc mang hương vị cổ điển, được trình bày tinh tế, tạo cảm giác gần gũi và thân thuộc cho khách mời.
                                </Text>
                            </Stack>
                        </HStack>
                    </Stack>
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
                                Nét hoài cổ
                            </Heading>
                            <Text fontSize={16} fontFamily={'Noto Sans JP'}>
                                Tiệc cưới vintage thường mang đậm ảnh hưởng từ các thập niên trước, với những chi tiết trang trí như bàn ghế gỗ cũ, đèn chùm và các vật dụng cổ điển, tạo nên không gian ấm áp và lãng mạn.
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
                    <HStack gap={0} align={'flex-start'}>
                        <HStack flex={2.2} gap={0} align={'flex-end'}>
                            <Image
                                src="/Vintage/Rectangle 524.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="350px"
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
                                    01
                                </CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Màu chủ đạo thường là những tông màu nhẹ nhàng, như hồng pastel, xanh mint, hoặc nâu đất. Những gam màu này không chỉ mang lại cảm giác ấm áp mà còn thể hiện sự ngọt ngào và lãng mạn, phù hợp với phong cách vintage.
                                    </Text>
                                </CardBody>
                            </Card>
                        </HStack>
                        <Image
                            src="/Vintage/Rectangle 557.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="350px"
                            mt={20}
                            flex={1}
                        />
                    </HStack>
                </Stack>
                <Stack gap={10} w={'6xl'} mx={'auto'} mt={-8}>
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
                                src="/Vintage/Rectangle 527.png"
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
                                        Địa điểm tổ chức tiệc cưới thường là những không gian mang đậm chất cổ điển như nhà cổ, quán cà phê vintage, hoặc khu vườn với những hàng cây xanh mát. Những địa điểm này giúp tạo ra bầu không khí lãng mạn và hoài cổ.
                                    </Text>
                                    <br />
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Biệt thự cổ điển với kiến trúc trang nhã, nội thất tinh tế mang đến một không gian ấm áp, lãng mạn, nơi mà mọi khoảnh khắc đều trở nên quý giá hơn. Những nhà hàng với ánh đèn vàng ấm áp, được trang trí tỉ mỉ giúp các cặp đôi và khách mời có thể giao lưu, kết nối trong một bầu không khí thân mật và ấm cúng.
                                    </Text>
                                </CardBody>
                            </Card>
                        </HStack>
                        <HStack gap={6}>
                            <Image
                                src="/Vintage/Rectangle 559.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="300px"
                                flex={1.5}
                            />
                            <Image
                                src="/Vintage/Rectangle 539.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="300px"
                                flex={1}
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
                                        Sân khấu được thiết kế tinh tế, thường sử dụng phông nền nhẹ nhàng cùng với ánh sáng dịu dàng, tạo ra không gian ấm cúng cho các nghi thức và hoạt động trong lễ cưới.
                                    </Text>
                                    <br />
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Giữa sân khấu, một chiếc cửa gỗ cổ điển được trang trí tinh tế bằng hoa tươi và dây leo như một biểu tượng của tình yêu bền vững, mở ra một chương mới trong cuộc đời của cặp đôi. Bàn lễ đường, được chăm chút tỉ mỉ với những bình hoa rực rỡ và ánh nến lung linh, thể hiện sự trân trọng đối với tình yêu và những khoảnh khắc thiêng liêng.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Vintage/Rectangle 530.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="498px"
                                flex={1}
                            />
                        </HStack>
                        <Image
                            src="/Vintage/Rectangle 531.png"
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
                        Trang trí
                    </Heading>
                    <HStack gap={0} align={'flex-end'}>
                        <HStack flex={2}>
                            <Stack flex={1}>
                                <Image
                                    src="/Vintage/Rectangle 533.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="245px"
                                />
                                <Image
                                    src="/Vintage/Rectangle 534.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="245px"
                                />
                            </Stack>
                            <Image
                                src="/Vintage/Rectangle 560.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="500px"
                                flex={1}
                            />
                        </HStack>
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
                                    Trang trí tiệc cưới vintage thường bao gồm hoa tươi theo mùa, bàn ghế gỗ mộc mạc, và các chi tiết nhỏ như khăn trải bàn hoa văn hoặc đĩa cổ. Những vật dụng như máy đánh chữ hoặc bình hoa cổ điển cũng thường được sử dụng để tăng thêm phần phong cách.
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
                                        Trong không gian lãng mạn của một đám cưới phong cách cổ điển, góc photobooth và quà tặng nhỏ trở thành hai điểm nhấn thú vị, góp phần tạo nên những kỷ niệm khó quên cho khách mời.
                                    </Text>
                                    <br />
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Góc photobooth được trang trí tinh tế, với phông nền làm từ vải satin mềm mại và hoa tươi rực rỡ. Những phụ kiện vui nhộn như mũ, kính râm và bảng chữ độc đáo không chỉ khơi gợi sự sáng tạo mà còn mang lại những khoảnh khắc vui vẻ và tự nhiên. Mỗi bức ảnh được chụp không chỉ là một hình ảnh, mà còn là một câu chuyện, một kỷ niệm đầy ắp tiếng cười và tình yêu.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Stack flex={1.5}>
                                <Image
                                    src="/Vintage/Rectangle 532.png"
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
                                src="/Vintage/Rectangle 535.png"
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
                                        Cạnh bên, những món quà tặng nhỏ được chuẩn bị chu đáo, từ nến thơm đến hộp socola ngọt ngào, tất cả đều được bọc trong những chiếc hộp đẹp mắt, thắt nơ tinh tế. Những món quà này không chỉ thể hiện lòng biết ơn của cặp đôi dành cho khách mời mà còn mang đến cảm giác gần gũi và ấm áp. Khi khách mời cầm trên tay món quà, họ không chỉ nhận được một vật phẩm mà còn là một phần của kỷ niệm đặc biệt trong ngày trọng đại.
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
                                                    onClick={() => navigate('/login')}
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

export default VintageWeddingConceptPage