import { useEffect } from "react";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Box, Button, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Border, Color, Shadow } from "../../../styles/styles";
import CarouselSlider from "../../../components/slider";
import { useNavigate } from "react-router-dom";

const MinimalistWeddingConceptPage = () => {
    const navigate = useNavigate();
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Phong cách Châu Âu');
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
                    transform="translate(-50%, 0)"
                    bottom={-48}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={6}
                >
                    <Heading fontSize={55}>Phong cách Châu Âu</Heading>
                    <Text textAlign={'justify'}>
                        Là một trong những nhà tổ chức tiệc cưới chuyên nghiệp và cao cấp đầu tiên có trụ sở tại Việt Nam,
                        OpalWed chuyên tư vấn, thiết kế, lập kế hoạch và thực hiện tiệc cưới trọn gói.
                    </Text>
                </Stack>
            </Box>
            <Stack gap={28} my={20}>
                <Stack w={'6xl'} mx={'auto'} gap={10}>
                    <Heading textAlign={'center'}>
                        Điều đặc biệt bạn sẽ tìm thấy
                    </Heading>
                    <HStack gap={16} align={'flex-start'}>
                        <Image
                            src="/image 18.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading>1</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text>Elegance and classic charm</Text>
                            <Text>European-style weddings often focus on classic beauty with elements such as lace wedding dresses, elegant tuxedos, and delicate decorations like chandeliers and carefully arranged fresh flowers.</Text>
                        </Stack>
                        <Image
                            src="/image 18.png"
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
                            <Heading>2</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text>Elegance and classic charm</Text>
                            <Text>European-style weddings often focus on classic beauty with elements such as lace wedding dresses, elegant tuxedos, and delicate decorations like chandeliers and carefully arranged fresh flowers.</Text>
                        </Stack>
                        <Image
                            src="/image 18.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading>3</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text>Elegance and classic charm</Text>
                            <Text>European-style weddings often focus on classic beauty with elements such as lace wedding dresses, elegant tuxedos, and delicate decorations like chandeliers and carefully arranged fresh flowers.</Text>
                        </Stack>
                    </HStack>

                    <HStack gap={16} align={'flex-start'}>
                        <Image
                            src="/image 18.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1.3}
                        />
                        <Stack flex={1} align={'center'} gap={8}>
                            <Heading>4</Heading>
                            <Divider w={32} borderColor={'#B58B61'} />
                            <Text>Elegance and classic charm</Text>
                            <Text>European-style weddings often focus on classic beauty with elements such as lace wedding dresses, elegant tuxedos, and delicate decorations like chandeliers and carefully arranged fresh flowers.</Text>
                        </Stack>
                        <Image
                            src="/image 18.png"
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
                        src={
                            "https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg"
                        }
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
                            <Heading textAlign={'center'} fontWeight={500}>
                                Ceremory and tradition
                            </Heading>
                            <Text fontSize={16}>European weddings often feature traditional rituals rich in cultural heritage, such as receptions held in castles, vineyards, or historic villas. This brings a sense of grandeur, sophistication, and a connection to nature.</Text>
                        </Stack>
                    </Box>
                    <Box bgColor={'#E0EFF4'} flex={1} h={550} />
                </HStack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Box>
                        <Heading fontSize={14} textAlign={'center'} mb={4}>Detail</Heading>
                        <Heading fontSize={20} fontWeight={400} textAlign={'center'}>Main color</Heading>
                    </Box>
                    <HStack gap={4}>
                        <HStack flex={2.2} gap={0} align={'flex-end'}>
                            <Card bgColor={'#F8F6F3'} flex={1.2}>
                                <CardHeader fontSize={36} ml={10} mb={-3}>01</CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14}>
                                        Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                        </HStack>
                        <Image
                            src="/image 18.png"
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
                    <Heading fontSize={20} fontWeight={400} textAlign={'center'}>Location</Heading>
                    <HStack gap={4}>
                        <Image
                            src="/image 18.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="auto"
                            flex={1}
                        />
                        <HStack flex={2.2} gap={0} align={'flex-end'}>
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                            <Card bgColor={'#F8F6F3'} flex={1.2}>
                                <CardHeader fontSize={36} ml={10} mb={-3}>02</CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14}>
                                        Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                    </Text>
                                </CardBody>
                            </Card>
                        </HStack>
                    </HStack>
                </Stack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Heading fontSize={20} fontWeight={400} textAlign={'center'}>Stage</Heading>
                    <HStack gap={4}>
                        <HStack flex={2.2} gap={0} align={'center'}>
                            <Card bgColor={'#F8F6F3'} flex={1.2}>
                                <CardHeader fontSize={36} ml={10} mb={-3}>03</CardHeader>
                                <CardBody px={10}>
                                    <Text fontSize={14}>
                                        Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="auto"
                                flex={1}
                            />
                        </HStack>
                        <Image
                            src="/image 18.png"
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
                            src="/image 18.png"
                            alt="Wedding"
                            borderRadius="md"
                            objectFit="cover"
                            w="100px"
                            h="248px"
                            flex={1}
                        />
                        <Card bgColor={'#F8F6F3'} flex={1}>
                            <CardBody px={10}>
                                <Text fontSize={14}>
                                    Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                </Text>
                            </CardBody>
                        </Card>
                    </HStack>
                </Stack>
                <Stack gap={10} w={'6xl'} mx={'auto'}>
                    <Heading fontSize={20} fontWeight={400} textAlign={'center'}>Decoration</Heading>
                    <HStack gap={0} align={'flex-end'}>
                        <Card bgColor={'#F8F6F3'} flex={1}>
                            <CardHeader fontSize={36} ml={10} mb={-3}>04</CardHeader>
                            <CardBody px={10}>
                                <Text fontSize={14}>
                                    Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                </Text>
                            </CardBody>
                        </Card>
                        <Stack flex={2}>
                            <HStack flex={1}>
                                <Image
                                    src="/image 18.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="48%"
                                    h="250px"
                                    flex={1}
                                />
                                <Image
                                    src="/image 18.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="48%"
                                    h="250px"
                                    flex={1}
                                />
                            </HStack>
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="750px"
                                h="250px"
                            />
                        </Stack>
                    </HStack>
                    <HStack gap={0}>
                        <Stack flex={2}>
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="250px"
                            />
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="250px"
                            />
                        </Stack>
                        <Card bgColor={'#F8F6F3'} flex={1}>
                            <CardBody px={10}>
                                <Text fontSize={14}>
                                    Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                </Text>
                            </CardBody>
                        </Card>
                    </HStack>
                </Stack>
                <Stack gap={10}>
                    <Heading fontSize={20} fontWeight={400} textAlign={'center'}>Photobooth and Gifts</Heading>
                    <Stack gap={10} w={'6xl'} mx={'auto'} align={'flex-end'}>
                        <HStack gap={4}>
                            <HStack flex={2.2} gap={0} align={'flex-end'}>
                                <Card bgColor={'#F8F6F3'} flex={1.2}>
                                    <CardHeader fontSize={36} ml={10} mb={-3}>05</CardHeader>
                                    <CardBody px={10}>
                                        <Text fontSize={14}>
                                            Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
                                        </Text>
                                    </CardBody>
                                </Card>
                                <Image
                                    src="/image 18.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="100px"
                                    h="auto"
                                    flex={1}
                                />
                            </HStack>
                            <Image
                                src="/image 18.png"
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
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="100px"
                                h="248px"
                                flex={1}
                            />
                            <Card bgColor={'#F8F6F3'} flex={1}>
                                <CardBody px={10}>
                                    <Text fontSize={14}>
                                        Meeting for the first time in the romantic setting of the beautiful and elegant European land, this couple had very special impressions of each other and to prove this meeting influenced the decision to choose the main wedding style of European style. The main colors of the outdoor wedding party were pastel blue and quartz pink. The two pastel colors have also become a trend chosen by many people in recent years.
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
                        <Button
                            borderRadius={'full'}
                            w={60}
                            m={'auto'}
                            onClick={() => navigate('wedding-information')}
                            color={'#203963'}
                            textTransform={'uppercase'}
                        >
                            Tạo kế hoạch
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default MinimalistWeddingConceptPage