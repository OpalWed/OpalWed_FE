import { Image } from "@chakra-ui/react";
import Slider from "react-slick";

interface Prop {
    imageList: string[];
}

const StyleSlider = ({ imageList }: Prop) => {
    var settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        arrows: true,
        draggable: false,
        pauseOnHover: false,
        swipe: false,
    };
    return (
        <Slider {...settings}>
            {imageList.map((image) => (
                <Image
                    alt={"Slider Image"}
                    objectFit={"cover"}
                    h={'60vh'}
                    borderRadius={5}
                    p={0}
                    src={image}
                    w={'full'}
                />
            ))}
            <Image
                alt={"Slider Image"}
                objectFit={"cover"}
                h={'50vh'}
                borderRadius={5}
                p={0}
                src={
                    "https://www.southernliving.com/thmb/_DTHAquZBLEHKLIgPi_C3fFIhNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-929904308-aeeb687413714dacace50062cece530a.jpg"
                }
            />
            <Image
                alt={"Slider Image"}
                objectFit={"cover"}
                h={'50vh'}
                borderRadius={5}
                p={0}
                src={
                    "https://www.brides.com/thmb/J7fmR1rugaIO7V1iTcautPVSwXE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(767x410:769x412)/guests-at-reception-toasting-logal-cole-photography-twitter-0923-1b64ca7e758a4d9f93c89a7b5f708e0d.jpg"
                }
            />
        </Slider>
    );
}

export default StyleSlider