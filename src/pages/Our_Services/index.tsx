import { Box, Divider, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"
import ServiceCarousel from "../../components/carousel/service"
import ProductItem from "../../components/product_item"
import { FaAnglesDown } from "react-icons/fa6"
import { useLocation } from "react-router-dom"

const OurServicesPage = () => {
    const sectionIds = ['decoration', 'clothes', 'photo', 'card'];
    // const imageList: string[] = [

    // ]
    const navbarOffset = 140;
    const location = useLocation();
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        changeTabTitle('Dịch vụ');
    }, []);

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1);
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -navbarOffset;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash]);

    useEffect(() => {
        const handleHashUpdate = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    window.history.pushState(null, '', `#${sectionId}`);
                }
            });
        };

        observer.current = new IntersectionObserver(handleHashUpdate, {
            root: null,
            rootMargin: `-${navbarOffset}px 0px 0px 0px`,
            threshold: 0.5,
        });

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element && observer.current) {
                observer.current.observe(element);
            }
        });

        return () => {
            if (observer.current) {
                sectionIds.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        observer.current?.unobserve(element);
                    }
                });
                observer.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 && location.hash) {
                window.history.replaceState(null, '', window.location.pathname);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.hash]);

    return (
        <>
            <Box
                pos={'relative'}
                width="100%"
                height="70vh"
                bgImage="/service.png"
                bgSize="cover"
                bgPosition="center"
            >
                <Box bg={'black'} pos={'absolute'} top={0} h={'70vh'} w={'full'} opacity={0.5} />
                <Stack
                    align={'center'}
                    pos={'absolute'}
                    w={'5xl'}
                    left="50%"
                    transform="translate(-50%, 0)"
                    bottom={"30%"}
                    gap={6}
                    color={'white'}
                >
                    <Heading
                        fontSize={55}
                        fontWeight={500}
                        textAlign={'center'}
                        fontFamily={'Hatton'}
                    >
                        Các dịch vụ hiện đại và đa dạng tại OPALWED
                    </Heading>
                    <Text textAlign={'justify'} fontSize={15} fontFamily={'Noto Sans JP'}>
                        Hãy tìm hiểu và lựa chọn giá trị của bạn
                    </Text>
                </Stack>
            </Box>
            <Stack w={'6xl'} mx={'auto'} mt={10} gap={24} pos={'relative'}>
                <ServiceCarousel />
            </Stack>
            <Stack align={'center'} w={'6xl'} mx={'auto'} mt={16} gap={12} id="decoration">
                <Heading fontFamily={'Hatton'}>Trang trí tiệc cưới</Heading>
                <HStack gap={10} mb={10} align={'flex-start'}>
                    <Stack gap={4} flex={1}>
                        <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                        <Text fontSize={17}>Trang trí tiệc cưới không chỉ là việc tạo ra không gian đẹp mắt mà còn là cách thể hiện cá tính và sự sáng tạo của các cặp đôi.</Text>
                    </Stack>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="250px"
                        flex={1.8}
                    />
                    <Stack gap={4} flex={1}>
                        <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                        <Text fontSize={17}>Chúng tôi mang đến những sự  lựa chọn về concept độc đáo, từ hoa tươi, ánh đèn lung linh đến bàn tiệc sang trọng.</Text>
                    </Stack>
                </HStack>
                <HStack gap={10}>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="200px"
                        flex={1}
                    />
                    <Stack gap={4} flex={1.8}>
                        <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                        <Text fontSize={17}>Với sự sáng tạo và tâm huyết, mỗi chi tiết sẽ được chăm chút tỉ mỉ và mang đậm dấu ấn tình yêu và phong cách riêng của bạn.</Text>
                    </Stack>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="200px"
                        flex={1}
                    />
                </HStack>
            </Stack>
            <Stack align={'center'} w={'6xl'} mx={'auto'} mt={16} gap={8} id="clothes">
                <Heading fontFamily={'Hatton'}>Trang phục tiệc cưới</Heading>
                <Text w={'75%'} mx={'auto'} fontFamily={'Noto Sans JP'}>
                    Với bộ sưu tập trang phục cưới đa dạng và tinh tế từ các nhà cung cấp, OpalWed mang đến những mẫu váy cưới sang trọng và vest lịch lãm, các mẫu mã đa dạng  phù hợp với mọi phong cách và sở thích. Từ thiết kế cổ điển đến hiện đại, mỗi bộ trang phục đều được chăm chút kỹ lưỡng, đảm bảo độ phù hợp về phong cách và mang đến vẻ đẹp hoàn hảo cho ngày trọng đại của các cặp đôi.
                </Text>
                <SimpleGrid
                    columns={4}
                    spacingX={8}
                    spacingY={6}
                    maxW={'full'}
                    my={5}
                    mx={'auto'}
                >
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </SimpleGrid>
            </Stack>
            <Stack align={'center'} w={'6xl'} mx={'auto'} mt={16} gap={8} id="photo">
                <Heading fontFamily={'Hatton'}>Chụp ảnh cưới</Heading>
                <Text w={'75%'} mx={'auto'} fontFamily={'Noto Sans JP'}>
                    Ghi lại những khoảnh khắc đáng nhớ trong ngày trọng đại của bạn với dịch vụ chụp ảnh cưới chuyên nghiệp từ các nhà cung cấp được tư vấn bởi OpalWed. Với đội ngũ nhiếp ảnh gia tài năng, luôn sẵn sàng bắt trọn từng cảm xúc và nét đẹp trong những khung hình ấn tượng. Hãy để chúng tôi giúp bạn lưu giữ những kỷ niệm tuyệt vời qua những bức ảnh lãng mạn và độc đáo.                </Text>
                <SimpleGrid
                    columns={3}
                    spacingX={8}
                    spacingY={6}
                    maxW={'full'}
                    my={5}
                    mx={'auto'}
                >
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="auto"
                    />
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="auto"
                    />
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="auto"
                    />
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="auto"
                    />
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="auto"
                    />
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="auto"
                    />
                </SimpleGrid>
            </Stack>
            <Stack w={'6xl'} mx={'auto'} mt={16} gap={12} id="card">
                <Heading textAlign={'center'} fontFamily={'Hatton'}>Thiệp cưới</Heading>
                <HStack gap={10} mb={10} w={'90%'} align={'flex-start'}>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="250px"
                        flex={1}
                    />
                    <Stack gap={4} flex={1}>
                        <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                        <Text fontSize={17}>Bien écrire est un art. Commencez par utiliser des expressions simples et de tous les jours que les gens peuvent facilement comprendre. Soyez clair et allez à l'essentiel. Faites en sorte que vos arguments s'enchaînent logiquement et soyez concis sauf si vous écrivez un essai.</Text>
                    </Stack>
                </HStack>
                <HStack gap={10}>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="200px"
                        flex={1}
                    />
                    <Stack gap={4} flex={1.8}>
                        <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                        <Text fontSize={17}>Bien écrire est un art. Commencez par utiliser des expressions simples et de tous les jours que les gens peuvent facilement comprendre. Soyez clair et allez à l'essentiel. Faites en sorte que vos arguments s'enchaînent logiquement et soyez concis sauf si vous écrivez un essai.</Text>
                    </Stack>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="auto"
                        h="200px"
                        flex={1}
                    />
                </HStack>
            </Stack>
            <Stack w={'6xl'} mx={'auto'} mt={16} gap={12}>
                <Stack gap={8} align={'center'}>
                    <Heading color={'#897f6b'}><FaAnglesDown /></Heading>
                    <Divider w={'md'} borderColor={'#897f6b'} />
                </Stack>
                <HStack gap={10} mb={10} align={'flex-start'}>
                    <Image
                        src="/image 18.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        w="400px"
                        h="auto"
                        flex={1}
                    />
                    <Stack flex={1} gap={8}>
                        <Stack gap={4} flex={1}>
                            <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                            <Text fontSize={17}>Bien écrire est un art. Commencez par utiliser des expressions simples et de tous les jours que les gens peuvent facilement comprendre. Soyez clair et allez à l'essentiel. Faites en sorte que vos arguments s'enchaînent logiquement et soyez concis sauf si vous écrivez un essai.</Text>
                        </Stack>
                        <HStack gap={6} flex={1} align={'flex-start'}>
                            <Image
                                src="/image 18.png"
                                alt="Wedding"
                                borderRadius="md"
                                objectFit="cover"
                                w="auto"
                                h="400px"
                                flex={1}
                            />
                            <Stack flex={1}>
                                <Image
                                    src="/image 18.png"
                                    alt="Wedding"
                                    borderRadius="md"
                                    objectFit="cover"
                                    w="auto"
                                    h="200px"
                                />
                                <Stack gap={4}>
                                    <Heading fontSize={32} fontWeight={500}>Mordern Wedding</Heading>
                                    <Text fontSize={17}>Bien écrire est un art. Commencez par utiliser des expressions simples et de tous les jours que les gens peuvent facilement comprendre. Soyez clair et allez à l'essentiel. Faites en sorte que vos arguments s'enchaînent logiquement et soyez concis sauf si vous écrivez un essai.</Text>
                                </Stack>
                            </Stack>
                        </HStack>
                    </Stack>
                </HStack>
            </Stack>
        </>
    )
}

export default OurServicesPage