import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const OurPartnersPage = () => {
    const imageList: string[] = [

    ]

    const services = [
        {
            category: 'Restaurant & Venue',
            items: [
                { src: 'image 18.png', title: 'HoangPhuc Restaurant' },
                { src: 'image 18.png', title: 'HoangPhuc Restaurant' },
                { src: 'image 18.png', title: 'HoangPhuc Restaurant' },
                { src: 'image 18.png', title: 'HoangPhuc Restaurant' },
            ],
        },
        {
            category: 'Suit & Dress',
            items: [
                { src: 'image 18.png', title: 'HoangPhuc Wed Clothes' },
                { src: 'image 18.png', title: 'HoangPhuc Wed Clothes' },
                { src: 'image 18.png', title: 'HoangPhuc Wed Clothes' },
                { src: 'image 18.png', title: 'HoangPhuc Wed Clothes' },
            ],
        },
        {
            category: 'Others',
            items: [
                { src: 'image 18.png', title: 'HoangPhuc Photos' },
                { src: 'image 18.png', title: 'HoangPhuc Wed-Printer' },
                { src: 'image 18.png', title: 'HoangPhuc Wed-MakeUp' },
                { src: 'image 18.png', title: 'HoangPhuc Jewelry' },
            ],
        },
    ];

    useEffect(() => {
        changeTabTitle('Our Partners');
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
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={6}
                >
                    <Heading fontSize={55}>Our Partners</Heading>
                    <Text textAlign={'center'}>
                        The partners have been chosen based on their high quality, excellent reputation,
                        and alignment with the specific requirements of your wedding.
                    </Text>
                </Stack>
            </Box>
            <Box p={8} w={'5xl'} m={'auto'}>
                {services.map((service, index) => (
                    <Stack key={index} mb={10}>
                        <Heading as="h2" size="lg" mb={4}>
                            {service.category}
                        </Heading>
                        <SimpleGrid columns={[2, null, 4]} spacing={8}>
                            {service.items.map((item, idx) => (
                                <Box
                                    key={idx}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    overflow="hidden"
                                    p={4}
                                    textAlign="center"
                                    boxShadow="md"
                                >
                                    <Image src={item.src} alt={item.title} borderRadius="md" mb={4} h={'44'} w={'full'} />
                                    <Text fontWeight="bold">{item.title}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Stack>
                ))}
            </Box>
        </>
    )
}

export default OurPartnersPage