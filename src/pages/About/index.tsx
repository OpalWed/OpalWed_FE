import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react"
import CarouselSlider from "../../components/slider"
import { Color, Shadow } from "../../styles/styles"
import { useEffect } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle"

const AboutPage = () => {
    const imageList: string[] = [

    ]

    useEffect(() => {
        changeTabTitle('Về chúng tôi');
    }, []);

    return (
        <>
            <Box pos={'relative'} mb={'30rem'}>
                <CarouselSlider imageList={imageList} />
                <HStack
                    align={'center'}
                    pos={'absolute'}
                    w={'7xl'}
                    px={28}
                    py={12}
                    left="50%"
                    transform="translate(-50%)"
                    bottom={'-25rem'}
                    bg={Color.lightYellow}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Image
                        src="./slogan.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12} fontFamily={'Canela'} fontWeight={400}>VỀ CHÚNG TÔI</Heading>
                        <Text fontFamily={'Noto Sans JP'}>
                            Chúng tôi là OpalWed, một công ty khởi nghiệp mới thành lập, đi tiên phong trong thị trường chưa được khai thác, cung cấp dịch vụ đại diện và hỗ trợ khách hàng trong việc tìm kiếm và lựa chọn dịch vụ cưới từ nhiều nguồn khác nhau.
                        </Text>
                        <br />
                        <Text fontFamily={'Noto Sans JP'}>
                            Chúng tôi sẽ đảm nhiệm tất cả từ việc tìm phông chữ được cá nhân hóa cho lời mời đến việc chọn người giải trí và nhà cung cấp thực phẩm, đảm bảo mọi chi tiết đều hoàn hảo.
                        </Text>
                    </Stack>
                </HStack>
            </Box>
            <Stack w={'7xl'} m={'auto'} gap={32} mb={10}>
                <HStack
                    align={'center'}
                    w={'full'}
                    px={28}
                    py={12}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12} fontFamily={'Canela'} fontWeight={400}>LÝ LỊCH</Heading>
                        <Text fontFamily={'Noto Sans JP'}>
                            Trở thành đội ngũ tư vấn và lập kế hoạch cưới chuyên nghiệp tại Việt Nam, với sự hài lòng 100% của khách hàng.
                        </Text>
                        <br />
                        <Text fontFamily={'Noto Sans JP'}>
                            Phục vụ khách hàng tốt nhất với tinh thần trách nhiệm và sáng tạo, làm việc ngay từ đầu để tạo ra một thiết kế độc đáo cho toàn bộ đám cưới của bạn, đảm bảo chúng tôi có tất cả các chi tiết bạn muốn đưa vào chương trình.
                        </Text>
                    </Stack>
                    <Image
                        src="./background.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                </HStack>
                <HStack
                    align={'center'}
                    w={'full'}
                    px={28}
                    py={12}
                    bg={Color.lightYellow}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Image
                        src="./slogan.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12} fontFamily={'Canela'} fontWeight={400}>KHẨU HIỆU</Heading>
                        <Text fontFamily={'Noto Sans JP'}>
                            Tầm nhìn của chúng tôi là đi đầu trong đổi mới lập kế hoạch sự kiện, sử dụng các chuyên gia tư vấn sáng tạo và công nghệ tùy chỉnh tiên tiến trực tiếp.
                        </Text>
                        <br />
                        <Text fontFamily={'Noto Sans JP'}>
                            Chúng tôi tin rằng công nghệ nên được sử dụng để nâng cao trải nghiệm của con người. Đó là lý do tại sao chúng tôi cam kết sử dụng các công cụ và công nghệ tiên tiến theo cách nâng cao việc lập kế hoạch và sản xuất sự kiện được cá nhân hóa, đồng thời vẫn ưu tiên kết nối con người và sự tiếp xúc cá nhân, những yếu tố thiết yếu để tạo nên những kỷ niệm khó quên.
                        </Text>
                    </Stack>
                </HStack>
                <HStack
                    align={'center'}
                    w={'full'}
                    px={28}
                    py={12}
                    bg={Color.lightBlue}
                    borderRadius={5}
                    shadow={Shadow.cardShadow}
                    gap={36}
                >
                    <Stack flex={1.5} align={'center'}>
                        <Heading fontSize={55} mb={12} fontFamily={'Canela'} fontWeight={400}>TRÁCH NHIỆM</Heading>
                        <Text fontFamily={'Noto Sans JP'}>
                            Tại OpalWed, chúng tôi cam kết cung cấp dịch vụ cưới chất lượng và hỗ trợ tận tâm cho khách hàng. Chúng tôi đảm bảo thông tin minh bạch, tư vấn chu đáo và lựa chọn các nhà cung cấp uy tín.
                        </Text>
                        <br />
                        <Text fontFamily={'Noto Sans JP'}>
                            Đồng thời, chúng tôi cũng chú trọng đến việc phát triển bền vững và đóng góp tích cực cho cộng đồng. Sự hài lòng của khách hàng là động lực để chúng tôi không ngừng cải tiến dịch vụ.
                        </Text>
                    </Stack>
                    <Image
                        src="./responsibility.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                </HStack>
            </Stack>
            <Stack w={'7xl'} mx={'auto'} my={16} gap={24}>
                <HStack justify={'space-between'} gap={20}>
                    <Image
                        src="./wedding c&p.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                    <Stack flex={1.5} px={16} py={16} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30} fontFamily={'Canela'} fontWeight={300}>Tổ chức & tư vấn tiệc cưới</Heading>
                        <Text fontFamily={'Noto Sans JP'} fontSize={17}>
                            Chúng tôi hiểu rằng tiệc cưới không chỉ là một sự kiện, mà là kỷ niệm đáng nhớ trong đời bạn. Với dịch vụ tư vấn tổ chức tiệc cưới chuyên nghiệp, từ việc lựa chọn địa điểm, thiết kế không gian, đến thực đơn ẩm thực đa dạng và phong phú, đội ngũ của chúng tôi sẽ đồng hành cùng bạn trong từng bước chuẩn bị. Với sự tận tâm và chu đáo, chúng tôi đảm bảo rằng mỗi chi tiết đều được chăm chút, mang đến cho bạn một buổi tiệc cưới đáng nhớ và trọn vẹn.
                        </Text>
                    </Stack>
                </HStack>
                <HStack justify={'space-between'} gap={20}>
                    <Stack flex={2} px={16} py={16} align={'center'} bg={Color.lightYellow} gap={8}>
                        <Heading fontSize={30} fontFamily={'Canela'} fontWeight={300}>So sánh & chọn nhà cung cấp</Heading>
                        <Text fontFamily={'Noto Sans JP'} fontSize={17}>
                            Tại OpalWed, chúng tôi giúp bạn so sánh và đánh giá các nhà cung cấp dịch vụ cưới từ nhiều lĩnh vực khác nhau, bao gồm địa điểm, ẩm thực, trang trí và giải trí,... và cung cấp thông tin chi tiết, nhận xét và giá cả để bạn dễ dàng đưa ra quyết định. Chúng tôi cam kết đồng hành cùng bạn trong suốt quá trình, đảm bảo bạn chọn được nhà cung cấp phù hợp nhất với phong cách và ngân sách của mình.
                        </Text>
                    </Stack>
                    <Image
                        src="./compare vendor.png"
                        alt="Wedding"
                        borderRadius="md"
                        objectFit="cover"
                        h="450px"
                        flex={1}
                    />
                </HStack>
            </Stack>
        </>
    )
}

export default AboutPage