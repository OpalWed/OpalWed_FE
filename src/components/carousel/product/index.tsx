import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from "react-owl-carousel"
import { Utility } from '../../../types/type.enum';
import useProductByUtility from '../../../hooks/useProductByUtility';
import { useEffect, useState } from 'react';
import { Product } from '../../../types/Product';
import ProductItem from '../../product_item';

interface Prop {
    utility: Utility
    id: number
}

const ProductCarousel = ({ utility, id }: Prop) => {
    const { data } = useProductByUtility({ utilityType: utility });
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (data) {
            setProducts(data.content.filter((product: Product) => product.productId != id));
        }
    }, [data, id])

    return (
        <>
            <OwlCarousel
                key={products.length}
                items={4}
                autoplay
                autoplayTimeout={4000}
                loop
                dots={false}
                mouseDrag={false}
                margin={32}
            >
                {products.map(product => (
                    <ProductItem key={product.productId} product={product} />
                ))}
            </OwlCarousel>
        </>
    )
}


export default ProductCarousel
