import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputRightAddon, Link, Select, Stack, Text, Textarea } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Email, Phone, Place } from "@mui/icons-material"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const ContactPage = () => {
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Liên hệ');
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
                    bottom={-36}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={6}
                >
                    <Text fontSize={26} fontFamily={'Canela'}>Liên hệ</Text>
                    <Heading textAlign={'center'} fontFamily={'Canela'} fontWeight={400} fontSize={40}>
                        "Crafting Cherish Celebration"
                    </Heading>
                </Stack>
            </Box>
            <Box bg={Color.lightYellow} py={16} my={10}>
                <HStack w={'5xl'} m={'auto'} gap={28}>
                    <Stack flex={1} gap={8}>
                        <Heading fontFamily={'Canela'} fontWeight={300}>Kết nối</Heading>
                        <Text fontFamily={'Noto Sans JP'}>
                            Bạn đang tìm kiếm một đội ngũ chuyên nghiệp để giúp bạn biến đám cưới trong mơ của mình thành hiện thực?
                            Hãy liên hệ với chúng tôi. Đội ngũ lập kế hoạch giàu kinh nghiệm của chúng tôi sẽ tư vấn và hướng dẫn bạn trong suốt quá trình.
                            Bạn có thắc mắc gì không?
                        </Text>
                        <Stack justify={'flex-start'} fontSize='20px' fontWeight='300' gap={2}>
                            <Link href="https://www.facebook.com/profile.php?id=61565969699038&mibextid=LQQJ4d" isExternal>
                                <HStack>
                                    <FacebookRoundedIcon />
                                    <Text fontFamily={'Noto Sans JP'} fontWeight={400}>OpalWed</Text>
                                </HStack>
                            </Link>
                            <Stack>
                                <HStack gap={2} align={'center'}>
                                    <Phone />
                                    <Text fontFamily={'Noto Sans JP'} fontWeight={400}>0912345678</Text>
                                </HStack>
                                <HStack gap={2} align={'center'}>
                                    <Email />
                                    <Text fontFamily={'Noto Sans JP'} fontWeight={400}>opalwed16@gmail.com</Text>
                                </HStack>
                                <HStack gap={2} align={'center'}>
                                    <Place />
                                    <Text fontFamily={'Noto Sans JP'} fontWeight={400}>Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ Chí Minh</Text>
                                </HStack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={6} flex={1.5}>
                        <Heading fontSize={32} fontFamily={'Canela'}>
                            Thông tin liên lạc
                        </Heading>
                        <Stack gap={3}>
                            <FormControl id="name">
                                <FormLabel>Họ và tên</FormLabel>
                                <Input type="text" placeholder="Họ và tên" bg={'white'} />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="Email" bg={'white'} />
                            </FormControl>
                            <HStack>
                                <FormControl id="phone" mr={4}>
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <Input type="text" placeholder="+84" bg={'white'} />
                                </FormControl>
                                <FormControl id="location">
                                    <FormLabel>Nơi ở hiện tại</FormLabel>
                                    <Select placeholder="Chọn nơi ở hiện tại" bg={'white'}>
                                        <option value="location1">Location 1</option>
                                        <option value="location2">Location 2</option>
                                    </Select>
                                </FormControl>
                            </HStack>
                        </Stack>
                        <Heading fontSize={32} fontFamily={'Canela'}>
                            Chi tiết sự kiện
                        </Heading>
                        <Stack gap={3}>
                            <HStack>
                                <FormControl id="guests" mr={4}>
                                    <FormLabel>Số lượng khách</FormLabel>
                                    <InputGroup>
                                        <Input type="number" placeholder="Vd. 500" bg={'white'} />
                                        <InputRightAddon fontFamily={'Noto Sans JP'}>
                                            Khách
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="budget">
                                    <FormLabel>Ngân sách</FormLabel>
                                    <InputGroup>
                                        <Input type="number" placeholder="Vd. 500.000.000" bg={'white'} />
                                        <InputRightAddon fontFamily={'Noto Sans JP'}>
                                            VND
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                            </HStack>
                            <HStack>
                                <FormControl id="event-location" mr={4}>
                                    <FormLabel>Địa điểm tổ chức</FormLabel>
                                    <Select placeholder="Chọn địa điểm tổ chức" bg={'white'}>
                                        <option value="location1">Location 1</option>
                                        <option value="location2">Location 2</option>
                                    </Select>
                                </FormControl>
                                <FormControl id="event-date">
                                    <FormLabel>Ngày tổ chức</FormLabel>
                                    <Input type="date" bg={'white'} />
                                </FormControl>
                            </HStack>
                            <FormControl id="requirements">
                                <FormLabel>Câu hỏi hoặc yêu cầu cho chúng tôi?</FormLabel>
                                <Textarea
                                    placeholder="Hãy cho chúng tôi biết yêu cầu của bạn chi tiết hơn"
                                    bg={'white'}
                                    minH={28}
                                />
                            </FormControl>
                        </Stack>
                        <Button
                            bg={Color.darkBlue}
                            color={'white'}
                            fontWeight={400}
                            w={52}
                            m={'auto'}
                            fontFamily={'Noto Sans JP'}
                            _hover={{ bg: Color.darkBlueHover }}
                        >
                            Gửi yêu cầu
                        </Button>
                    </Stack>
                </HStack>
            </Box>
            {/* <Heading textAlign={'center'} mt={20}>__FOR PARTNER__</Heading>
            <Box bg={Color.lightYellow} py={16} my={10}>
                <HStack w={'5xl'} m={'auto'} gap={28}>
                    <Stack flex={1} gap={8}>
                        <Heading>Become our partner</Heading>
                        <Text>
                            Are you a wedding service provider looking to expand your reach and grow your business? Join our network of trusted partners and connect with couples planning their dream weddings.

                            Collaborate with us to offer your unique services to a wider audience. Together, we can create unforgettable wedding experiences for our clients.
                        </Text>
                        <Stack justify={'HStack-start'} fontSize='20px' fontWeight='300' gap={4}>
                            <HStack>
                                <FacebookRoundedIcon />
                                <Instagram />
                                <FaTiktok />
                            </HStack>
                            <Stack>
                                <HStack gap={2} align={'center'}>
                                    <Phone />
                                    <Text>0912345678</Text>
                                </HStack>
                                <HStack gap={2} align={'center'}>
                                    <Email />
                                    <Text>0912345678</Text>
                                </HStack>
                                <HStack gap={2} align={'center'}>
                                    <Place />
                                    <Text>0912345678</Text>
                                </HStack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={6} flex={1.5}>
                        <Heading as="h1" size="lg">
                            Contact Info
                        </Heading>
                        <Stack gap={3}>
                            <FormControl id="name">
                                <FormLabel>Name</FormLabel>
                                <Input type="text" placeholder="Type your full name here" bg={'white'} />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="Type your email here" bg={'white'} />
                            </FormControl>
                            <HStack>
                                <FormControl id="phone" mr={4}>
                                    <FormLabel>Phone/Mobile</FormLabel>
                                    <Input type="text" placeholder="+84" bg={'white'} />
                                </FormControl>
                                <FormControl id="location">
                                    <FormLabel>Your Store Location</FormLabel>
                                    <Select placeholder="Choose your location" bg={'white'}>
                                        <option value="location1">Location 1</option>
                                        <option value="location2">Location 2</option>
                                    </Select>
                                </FormControl>
                            </HStack>
                        </Stack>
                        <Heading as="h1" size="lg">
                            Service Details
                        </Heading>
                        <Stack gap={3}>
                            <HStack>
                                <FormControl id="guests" mr={4}>
                                    <FormLabel>Type of Your Service</FormLabel>
                                    <Input type="text" placeholder="Eg. Restaurant, Suit, etc." bg={'white'} />
                                </FormControl>
                                <FormControl id="budget">
                                    <FormLabel>Average Customer/month</FormLabel>
                                    <InputGroup>
                                        <Input type="number" placeholder="Eg. 3" bg={'white'} />
                                        <InputRightAddon>
                                            Customer(s)
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                            </HStack>
                            <FormControl id="requirements">
                                <FormLabel>Your Working Experience?</FormLabel>
                                <Textarea
                                    placeholder="Link to the drive that store some of your experience. Eg. image, video,..."
                                    bg={'white'}
                                    minH={28}
                                />
                            </FormControl>
                        </Stack>
                        <Button
                            bg={Color.darkBlue}
                            color={'white'}
                            fontWeight={400}
                            w={52}
                            m={'auto'}
                            _hover={{ bg: Color.darkBlueHover }}
                        >
                            Send Request
                        </Button>
                    </Stack> 
                </HStack>
            </Box>*/}
        </>
    )
}

export default ContactPage