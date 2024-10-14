import { createContext, useState, ReactNode } from 'react';

// Define the props for the context, which include wedding details, style, and lists of items
export interface WeddingContextProps {
    fullName: string;
    segment: string;
    place: string;
    weddingDate: string;
    decorationLevel: string;
    mainColor: string;
    accessories: Accessories[];
    clothes: Clothes[];
    restaurants: Restaurants[];
    setWeddingInfo: (info: Partial<WeddingInfo>) => void;
    setWeddingStyle: (style: Partial<WeddingStyle>) => void;
    addAccessory: (accessory: Accessories) => void;
    addClothes: (clothes: Clothes) => void;
    addRestaurant: (restaurant: Restaurants) => void;
}

// Define interfaces for wedding information, style, and items
interface WeddingInfo {
    fullName: string;
    segment: string;
    place: string;
    weddingDate: string;
}

interface WeddingStyle {
    decorationLevel: string;
    mainColor: string;
}

interface Accessories {
    accessoriesName: string;
}

interface Clothes {
    clothesName: string;
}

interface Restaurants {
    restaurantsName: string;
}

// Create the WeddingContext with undefined as the default value
export const WeddingContext = createContext<WeddingContextProps | undefined>(undefined);

// WeddingProvider will hold the state and pass the context values to its children
export const WeddingProvider = ({ children }: { children: ReactNode }) => {
    const [weddingInfo, setWeddingInfo] = useState<WeddingInfo>({
        fullName: '',
        segment: '',
        place: '',
        weddingDate: '',
    });

    const [weddingStyle, setWeddingStyle] = useState<WeddingStyle>({
        decorationLevel: '',
        mainColor: '',
    });

    const [accessories, setAccessories] = useState<Accessories[]>([]);

    const [clothes, setClothes] = useState<Clothes[]>([]);

    const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

    // Functions to update wedding info and wedding style
    const updateWeddingInfo = (info: Partial<WeddingInfo>) => {
        setWeddingInfo((prev) => ({ ...prev, ...info }));
    };

    const updateWeddingStyle = (style: Partial<WeddingStyle>) => {
        setWeddingStyle((prev) => ({ ...prev, ...style }));
    };

    // Functions to add new accessories, clothes, and restaurants
    const addAccessory = (accessory: Accessories) => {
        setAccessories((prev) => [...prev, accessory]);
    };

    const addClothes = (clothes: Clothes) => {
        setClothes((prev) => [...prev, clothes]);
    };

    const addRestaurant = (restaurant: Restaurants) => {
        setRestaurants((prev) => [...prev, restaurant]);
    };

    return (
        <WeddingContext.Provider
            value={{
                ...weddingInfo,
                ...weddingStyle,
                accessories,
                clothes,
                restaurants,
                setWeddingInfo: updateWeddingInfo,
                setWeddingStyle: updateWeddingStyle,
                addAccessory,
                addClothes,
                addRestaurant,
            }}
        >
            {children}
        </WeddingContext.Provider>
    );
};
