import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { Border, Color } from "../../../styles/styles";
import '@fortawesome/fontawesome-free/css/all.min.css';

interface ItemProp {
    image: string,
    title: string,
    link: string
}

const ServiceItem = ({ image, title, link }: ItemProp) => {
    return (
        <Link to={link}>
            <Stack
                h={200}
                align={'center'}
                justify={'center'}
                pos={'relative'}
                width="100%"
                bgImage={`url(${image})`}
                bgSize="cover"
                bgPosition="center"
                borderRadius={8}
            >
                <Heading
                    fontSize={14}
                    fontWeight={500}
                    py={3}
                    px={6}
                    borderRadius={'full'}
                    bg={Color.lightGold}
                    pos={'absolute'}
                    top={3}
                    border={Border.goldBorder}
                    textTransform={'uppercase'}
                    fontFamily={'Noto Sans JP'}
                >
                    {title}
                </Heading>
            </Stack>
        </Link>
    )
}

const ServiceCarousel = () => {
    const carouselRef = useRef<any>(null);

    return (
        <>
            <OwlCarousel
                key={5}
                ref={carouselRef}
                items={3}
                dots={false}
                mouseDrag={false}
                margin={14}
                nav
                navText={[
                    "<i class='custom-prev fa fa-chevron-left' />",
                    "<i class='custom-next fa fa-chevron-right' />"
                ]}
            >
                <Stack h={200} align={'center'} justify={'center'}>
                    <Heading fontFamily={'Canela'}>Dịch vụ</Heading>
                    <Text fontSize={15} fontFamily={'Noto Sans JP'}>Bộ sưu tập cần có</Text>
                </Stack>
                <ServiceItem image="/decoration.png" title="Trang trí" link="/our-services#decoration" />
                <ServiceItem image="/clothes.png" title="Trang phục" link="/our-services#clothes" />
                <ServiceItem image="/photography.png" title="Chụp hình" link="/our-services#photo" />
                <ServiceItem image="/invitation.png" title="Thiệp cưới" link="/our-services#card" />
            </OwlCarousel>
        </>
    )
}


export default ServiceCarousel
