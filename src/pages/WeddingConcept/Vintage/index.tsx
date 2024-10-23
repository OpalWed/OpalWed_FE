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
                    <Heading fontSize={55} fontFamily={'Canela'}>Phong cách Châu Âu</Heading>
                    <Text textAlign={'justify'} fontFamily={'Noto Sans JP'}>
                        Là một trong những nhà tổ chức tiệc cưới chuyên nghiệp và cao cấp đầu tiên có trụ sở tại Việt Nam,
                        OpalWed chuyên tư vấn, thiết kế, lập kế hoạch và thực hiện tiệc cưới trọn gói.
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
                            <Text fontFamily={'Hatton'} fontSize={20}>Sự thanh lịch và nét quyến rũ</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Đám cưới theo phong cách châu Âu thường chú trọng vào vẻ đẹp cổ điển với các yếu tố như váy cưới ren, áo tuxedo thanh lịch và đồ trang trí tinh tế như đèn chùm và hoa tươi được sắp xếp cẩn thận.
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
                            <Text fontFamily={'Hatton'} fontSize={20}>Không gian lãng mạn</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Những đám cưới này thường sử dụng ánh sáng dịu nhẹ, tông màu trung tính (trắng, phấn) và các loại hoa cổ điển như hoa hồng và hoa oải hương, tạo nên bầu không khí mơ màng.
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
                            <Text fontFamily={'Hatton'} fontSize={20}>Ẩm thực tinh tế</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Đám cưới theo phong cách châu Âu còn gây ấn tượng với khách mời bằng những món ăn ngon và rượu vang hảo hạng, đặc biệt là từ những vùng nổi tiếng như Pháp, Ý và Tây Ban Nha.
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
                            <Text>Elegance and classic charm</Text>
                            <Text fontFamily={'Noto Sans JP'} fontWeight={300} fontSize={17}>
                                Tuy không quá cầu kỳ, nhưng mọi chi tiết đều được lựa chọn cẩn thận để tạo nên sự hài hòa, mang lại cảm giác sang trọng mà không quá phô trương.
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
                            <Card bgColor={Color.lightGold} flex={1.2}>
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
                                        Lần đầu gặp gỡ trong bối cảnh lãng mạn của vùng đất châu Âu xinh đẹp và thanh lịch, cặp đôi này đã có những ấn tượng rất đặc biệt về nhau và để chứng minh cho cuộc gặp gỡ này đã ảnh hưởng đến quyết định lựa chọn phong cách tiệc cưới chủ đạo theo phong cách châu Âu. Màu sắc chủ đạo của tiệc cưới ngoài trời là xanh pastel và hồng thạch anh. Hai tông màu pastel này cũng đã trở thành xu hướng được nhiều người lựa chọn trong những năm gần đây.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Europe/Rectangle 524.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
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
                                        Với phong cách và màu sắc tươi sáng của buổi tiệc, tổ chức ở một vùng biển là một ý tưởng hoàn hảo. Màu hồng pastel và trắng sẽ trở nên thơ mộng và ngọt ngào nếu bạn tổ chức ngoài trời giữa biển xanh mênh mông. Vì bạn cần di chuyển đồ trang trí cho tiệc cưới ngoài trời đến một địa điểm gần biển nên bạn cần tổ chức theo phong cách đơn giản, nhẹ nhàng, không quá cầu kỳ và mang lại ấn tượng cho khách mời. Bạn có thể liên hệ với đơn vị cung cấp dịch vụ cưới hỏi để đặt xe và xác nhận số lượng đồ cần di chuyển.
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
                            <Card bgColor={Color.lightGold} flex={1.2}>
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
                                        Sân khấu nơi cô dâu và chú rể đứng cùng linh mục để chứng kiến ​​lễ cưới được thiết kế hướng ra biển với phông nền trắng cơ bản cùng cánh cửa gỗ trang trí hoa nhẹ phía trên, mang ý nghĩa cánh cửa mở ra điều gì đó mới mẻ, cuộc sống mới và đặc biệt hơn cho đôi uyên ương trẻ.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/Europe/Rectangle 530.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
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
                            h="248px"
                            flex={1}
                        />
                        <Card bgColor={Color.lightGold} flex={1}>
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
                        <Card bgColor={Color.lightGold} flex={1}>
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
                                    Những chiếc đèn nhỏ xinh màu trắng và hồng phù hợp với phong cách chính của tiệc cưới và cũng mang đến không gian đáng yêu để khách check in. Bàn tiệc gỗ mộc mạc được trang trí bằng lồng chim - thể hiện cặp đôi đã về chung một nhà, nến trắng và ảnh cưới của cặp đôi.
                                </Text>
                                <br />
                                <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                    Những chiếc đèn nhỏ xinh màu trắng và hồng phù hợp với phong cách chính của tiệc cưới và cũng mang đến không gian đáng yêu để khách check in. Bàn tiệc gỗ mộc mạc được trang trí bằng lồng chim - thể hiện cặp đôi đã về chung một nhà, nến trắng và ảnh cưới của cặp đôi.
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
                        <Card bgColor={Color.lightGold} flex={1}>
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
                        <HStack gap={4}>
                            <HStack flex={2.2} gap={0} align={'flex-end'}>
                                <Card bgColor={Color.lightGold} flex={1.2}>
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
                                            Cặp đôi này còn thiết lập một khu vực chụp ảnh lưu niệm với nội thất theo phong cách châu Âu để khách có thể chụp ảnh lưu niệm.
                                        </Text>
                                    </CardBody>
                                </Card>
                                <Image
                                    src="/Europe/Rectangle 536.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="100px"
                                    h="auto"
                                    flex={1}
                                />
                            </HStack>
                            <Image
                                src="/Europe/Rectangle 548.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
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
                            <Card bgColor={Color.lightGold} flex={1}>
                                <CardBody px={10}>
                                    <Text fontSize={14} color={'#737373'} fontFamily={'Noto Sans JP'}>
                                        Những lọ kẹo dẻo mềm, thơm là món quà nhỏ xinh mà cặp đôi muốn gửi đến khách mời như lời cảm ơn vì đã đến dự tiệc và chia sẻ niềm hạnh phúc của đôi vợ chồng trẻ.
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