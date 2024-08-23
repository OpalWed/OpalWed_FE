import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputRightAddon, Select, Stack, Text, Textarea } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Email, Instagram, Phone, Place } from "@mui/icons-material"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"
import { FaTiktok } from "react-icons/fa6"

const ContactPage = () => {
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Contact');
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
                    <Text fontSize={20}>Contact</Text>
                    <Heading textAlign={'center'}>
                        "Crafting Cherish Celebration"
                    </Heading>
                </Stack>
            </Box>
            <Box bg={Color.lightYellow} py={16} my={10}>
                <HStack w={'5xl'} m={'auto'} gap={28}>
                    <Stack flex={1} gap={8}>
                        <Heading>Get in touch</Heading>
                        <Text>
                            Looking for a professional team to help you make your dream wedding come true?

                            Reach out to us. Our team of experienced planners will give you advice and walk you through the process.
                            Have some questions for us? Check out our F.A.Q
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
                                    <FormLabel>Your Current Location</FormLabel>
                                    <Select placeholder="Choose your location" bg={'white'}>
                                        <option value="location1">Location 1</option>
                                        <option value="location2">Location 2</option>
                                    </Select>
                                </FormControl>
                            </HStack>
                        </Stack>
                        <Heading as="h1" size="lg">
                            Event Details
                        </Heading>
                        <Stack gap={3}>
                            <HStack>
                                <FormControl id="guests" mr={4}>
                                    <FormLabel>Number of Guests</FormLabel>
                                    <InputGroup>
                                        <Input type="number" placeholder="Eg. 500" bg={'white'} />
                                        <InputRightAddon>
                                            Guests
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="budget">
                                    <FormLabel>Budget</FormLabel>
                                    <InputGroup>
                                        <Input type="number" placeholder="Eg. 500.000.000" bg={'white'} />
                                        <InputRightAddon>
                                            VND
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                            </HStack>
                            <HStack>
                                <FormControl id="event-location" mr={4}>
                                    <FormLabel>Event Location</FormLabel>
                                    <Select placeholder="Choose event location" bg={'white'}>
                                        <option value="location1">Location 1</option>
                                        <option value="location2">Location 2</option>
                                    </Select>
                                </FormControl>
                                <FormControl id="event-date">
                                    <FormLabel>Event Date</FormLabel>
                                    <Input type="date" bg={'white'} />
                                </FormControl>
                            </HStack>
                            <FormControl id="requirements">
                                <FormLabel>Question or Requirement for Us?</FormLabel>
                                <Textarea
                                    placeholder="Let us know your requirement in more detail"
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
            </Box>
            <Heading textAlign={'center'} mt={20}>__FOR PARTNER__</Heading>
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
            </Box>
        </>
    )
}

export default ContactPage