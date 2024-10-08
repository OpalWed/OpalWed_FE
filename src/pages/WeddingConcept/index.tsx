import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { Box, Button, Card, CardBody, CardHeader, Divider, Heading, HStack, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Border, Color } from "../../styles/styles";
import { ArrowForward } from "@mui/icons-material";
import SegmentModal from "../../components/modal/segment";

const WeddingConceptPage = () => {
    const param = useParams<{ concept: string }>();
    const navigate = useNavigate();
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        changeTabTitle('Phong cách Châu Âu');
    }, []);

    return (
        <Stack gap={28} my={10}>
            <Stack w={'5xl'} mx={'auto'} gap={10}>
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
                        <Divider borderColor={'gainsboro'} />
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
                        <Divider borderColor={'gainsboro'} />
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
                        <Divider borderColor={'gainsboro'} />
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
                        <Divider borderColor={'gainsboro'} />
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
            <Stack gap={10} w={'5xl'} mx={'auto'}>
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
                            Bạn thích phong cách Châu Âu? Hãy đăng ký tư vấn ngay để có thể thiết kế tiệc cưới theo sở thích của mình.
                        </Text>
                        <Button
                            colorScheme="yellow"
                            borderRadius={'full'}
                            rightIcon={<ArrowForward />}
                            w={'xs'}
                            m={'auto'}
                            onClick={onOpen}
                        >
                            Đăng ký tư vấn
                        </Button>
                    </Stack>
                </Box>
                <SegmentModal
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </Box>
        </Stack>
    )
}

export default WeddingConceptPage