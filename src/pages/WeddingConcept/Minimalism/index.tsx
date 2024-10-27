import { useEffect } from "react";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Box, Button, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Stack, Text } from "@chakra-ui/react";
import { Border, Color, Shadow } from "../../../styles/styles";
import CarouselSlider from "../../../components/slider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const MinimalismWeddingConceptPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated, setIntendedRoute } = useAuth();
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Phong cách tối giản (Minimalism)');
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
                    <Heading fontSize={55} fontWeight={300} fontFamily={'Canela'}>Phong cách tối giản</Heading>
                    <Text textAlign={'justify'} fontFamily={'Noto Sans JP'}>
                        Phong cách Minimalism xuất hiện vào những năm 1970 tại phương Tây. Hôn lễ được tổ chức theo phong cách minimalist áp dụng nguyên tắc trang trí ít hơn về “lượng” nhưng đồng thời nhiều hơn về “chất”. Như chính tên gọi, phong cách minimalism mang đến sự đơn giản nhưng kèm theo đó là sự tinh tế, hài hoà bắt lấy sự ấn tượng của người xem.
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
                                src="/Minimalism/Author Bio Photo-2.png"
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
                                <Text fontFamily={'Hatton'} fontSize={20}>Thiết kế đơn giản</Text>
                                <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17} w={'75%'}>
                                    Tiệc cưới phong cách tối giản thường tập trung vào sự tinh tế, với các đường nét sạch sẽ và hình khối rõ ràng. Không gian được trang trí nhẹ nhàng, hạn chế chi tiết rườm rà.
                                </Text>
                            </Stack>
                        </HStack>
                        <HStack gap={16} align={'flex-start'}>
                            <Stack flex={1} align={'center'} gap={8}>
                                <Heading fontFamily={'Cormorant'} fontSize={70}>2</Heading>
                                <Divider w={'md'} borderColor={'#B58B61'} />
                                <Text fontFamily={'Hatton'} fontSize={20}>Màu sắc nhẹ nhàng</Text>
                                <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17} w={'75%'}>
                                    Gam màu chủ đạo thường là những tông màu trung tính như trắng, đen, xám hoặc pastel. Sự kết hợp này tạo cảm giác thanh lịch và dễ chịu, giúp nổi bật những khoảnh khắc quan trọng.
                                </Text>
                            </Stack>
                            <Image
                                src="/Minimalism/Author Bio Photo-1.png"
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
                                <Text fontFamily={'Hatton'} fontSize={20}>Thực đơn tinh gọn</Text>
                                <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17} w={'75%'}>
                                    Thực đơn thường chọn lọc, với những món ăn ngon và chất lượng, tập trung vào hương vị thay vì số lượng. Điều này không chỉ tạo sự thoải mái cho khách mời mà còn thể hiện sự chú trọng vào trải nghiệm ẩm thực.                            </Text>
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
                                Tập trung vào cảm xúc
                            </Heading>
                            <Text fontSize={16} fontFamily={'Noto Sans JP'}>
                                Tiệc cưới tối giản thường chú trọng vào những khoảnh khắc chân thành và ý nghĩa. Các nghi thức và hoạt động được tổ chức một cách tự nhiên, giúp cặp đôi và khách mời dễ dàng kết nối và chia sẻ cảm xúc.
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
                        <Card bgColor={Color.lightGold} flex={1} mt={2}>
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
                                    Tối giản không đồng nghĩa với tẻ nhạt, đám cưới minimalist không hề thiếu đi những sắc màu tươi sáng. Cặp vợ chồng sẽ sử dụng màu sắc một cách có chủ ý, màu đậm hơn sẽ dùng cho các chi tiết quan trọng, có ý nghĩa với uyên ương.
                                </Text>
                                <br />
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Tuy nhiên, tông màu trắng xám là tông màu thường thấy trong khi trang trí đám cưới theo phong cách này. Kết hợp với nguyên liệu chủ yếu từ kim loại có hình dáng độc đáo sẽ tạo nên sự khác biệt mà vẫn vô cùng “chất” cho đám cưới của bạn.
                                </Text>
                            </CardBody>
                        </Card>
                        <Stack flex={1.5}>
                            <Image
                                src="/Minimalism/Rectangle 524.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="250px"
                            />
                            <Image
                                src="/Minimalism/Rectangle 546.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="250px"
                            />
                        </Stack>
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
                    <HStack gap={0} align={'flex-end'}>
                        <Stack gap={3} flex={1.7} h={616}>
                            <Image
                                src="/Minimalism/Rectangle 527.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="full"
                                h="60%"
                            />
                            <Image
                                src="/Minimalism/Rectangle 547.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="full"
                                h="39%"
                            />
                        </Stack>
                        <Stack gap={5} justify={'space-between'} flex={1} h={616}>
                            <Image
                                src="/Minimalism/Rectangle 548.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="97%"
                                h="auto"
                                ml={3}
                            />
                            <Card bgColor={Color.lightGold} flex={1.2}>
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
                                        Khá đa dạng khi lựa chọn địa điểm tổ chức tiệc cưới theo phong cách này, chỉ cần tông màu sáng không màu mè cùng với việc bài trí đơn giản bắt mắt thì bạn có thể lựa chọn những địa điểm này ở nhiều nơi: nhà hàng, khách sạn, sân vườn hoặc nhà thờ.
                                    </Text>
                                    <br />
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Các đặc điểm chung của những địa điểm này là có trần gỗ, trần có chi tiết kim loại, tường gạch, tường trống, sàn bê tông hoặc sàn gỗ
                                    </Text>
                                </CardBody>
                            </Card>
                        </Stack>
                    </HStack>
                </Stack>
                <Stack gap={7} w={'6xl'} mx={'auto'}>
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
                                        Sân khấu thường được thiết kế đơn giản nhưng tinh tế, với phông nền màu sắc nhẹ nhàng và ánh sáng tự nhiên. Những chi tiết như cây xanh hoặc hoa tươi cũng được chọn lựa kỹ càng để không làm mất đi sự tối giản của không gian.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Minimalism/Rectangle 530.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="498px"
                                flex={1}
                            />
                        </HStack>
                        <Image
                            src="/Minimalism/Rectangle 531.png"
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
                            src="/Minimalism/Rectangle 539.png"
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
                                    Để tạo nên phong cách tối giản, hãy ưu tiên các chất liệu thuộc về rustic và metallic. Dễ thấy nhất là bàn ghế từ gỗ hay thanh sắt mảnh vàng gold. Sự kết hợp này mang đến một chút sang trọng, tinh tế của chất liệu kim loại sáng. Hay một chút gần gũi và mộc mạc với thiên nhiên của rustic.
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
                                    Trang trí chủ yếu sử dụng các vật liệu tự nhiên như gỗ, đá, và kim loại, với các chi tiết như nến, hoa đơn sắc hoặc các tác phẩm nghệ thuật đơn giản, tạo nên sự cân bằng và thanh lịch.
                                </Text>
                            </CardBody>
                        </Card>
                        <Stack flex={1.5}>
                            <HStack>
                                <Image
                                    src="/Minimalism/Rectangle 533.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="245px"
                                    flex={1}
                                />
                                <Image
                                    src="/Minimalism/Rectangle 534.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="245px"
                                    flex={1}
                                />
                            </HStack>
                            <Image
                                src="/Minimalism/Rectangle 540.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="full"
                                h="auto"
                            />
                        </Stack>
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
                    <Stack gap={10} w={'6xl'} mx={'auto'} align={'flex-start'}>
                        <HStack w={'4xl'} gap={0} align={'flex-end'}>
                            <Card bgColor={Color.lightGold} flex={1} pb={5}>
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
                                        Khu vực photobooth được thiết kế tối giản với backdrop đơn sắc, tạo không gian cho khách mời ghi lại những khoảnh khắc đẹp.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Minimalism/Rectangle 545.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="248px"
                                flex={1}
                            />
                        </HStack>
                        <HStack gap={5}>
                            <Image
                                src="/Minimalism/Rectangle 536.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                            <HStack flex={2.2} gap={0} align={'flex-start'}>
                                <Image
                                    src="/Minimalism/Rectangle 537.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="100px"
                                    h="auto"
                                    flex={1}
                                />
                                <Card bgColor={Color.lightGold} flex={1.2} py={10}>
                                    <CardBody px={10}>
                                        <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                            Quà tặng cho khách mời thường là những món đồ hữu ích hoặc nhỏ gọn, thể hiện sự tri ân mà không quá cầu kỳ.
                                        </Text>
                                    </CardBody>
                                </Card>
                            </HStack>
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

export default MinimalismWeddingConceptPage