import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../../product_item";

const ProductCarousel = () => {
    const navigate = useNavigate();
    const navigateToDetail = (name: string) => {
        const hyphenatedName = name.replace(/ /g, '-');
        navigate(`/dentists/${hyphenatedName}`);
    };

    return (
        <OwlCarousel
            key={5}
            items={4}
            autoplay
            autoplayTimeout={4000}
            loop
            dots={false}
            mouseDrag={false}
            margin={32}
        >
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </OwlCarousel>
    )
}


export default ProductCarousel
