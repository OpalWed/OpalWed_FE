import { Image } from "@chakra-ui/react";
import Slider from "react-slick";

const PartnersSlider = () => {
    const imageList: string[] = [
        './capella.png',
        './katjewelry.png',
        './lavender_studio.png',
        './mai_wedding.png',
        './misa_vu.png',
        './miskyhall.png',
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 6,
        slidesToScroll: 1,
        accessibility: false,
        arrows: false,
        autoplaySpeed: 8000,
        autoplay: true,
        draggable: false,
        pauseOnHover: false,
        swipe: false,
    };
    return (
        <Slider {...settings}>
            {imageList.map((image, index) => (
                <Image
                    key={index}
                    alt={"Slider Image"}
                    objectFit={"cover"}
                    h={'100px'}
                    w={'auto'}
                    borderRadius={5}
                    px={10}
                    src={image}
                    bg={'#E0EFF4'}
                />
            ))}
        </Slider>
    );
}

export default PartnersSlider