import { createContext, useState, ReactNode } from 'react';

// Define the props for the context, which include wedding details, style, and lists of items
export interface WeddingContextProps {
    fullName: string;
    budget: string;
    place: string;
    weddingDate: string;
    accessories: Accessories[];
    clothes: Clothes[];
    restaurants: Restaurants[];
    makeup: Makeup[];
    flowers: Flowers[];
    weddingPhotography: WeddingPhotography[];
    decoration: Decoration[];
    weddingInvitations: WeddingInvitations[];
    setWeddingInfo: (info: Partial<WeddingInfo>) => void;
    addAccessory: (accessory: Accessories) => void;
    addClothes: (clothes: Clothes) => void;
    addRestaurant: (restaurant: Restaurants) => void;
    addMakeup: (makeup: Makeup) => void;
    addFlowers: (flowers: Flowers) => void;
    addWeddingPhotography: (photography: WeddingPhotography) => void;
    addDecoration: (decoration: Decoration) => void;
    addWeddingInvitations: (invitations: WeddingInvitations) => void;
    removeAccessory: (accessoryName: string) => void;
    removeClothes: (clothesName: string) => void;
    removeRestaurant: (restaurantName: string) => void;
    removeMakeup: (makeupName: string) => void;
    removeFlowers: (flowersName: string) => void;
    removeWeddingPhotography: (photographyName: string) => void;
    removeDecoration: (decorationName: string) => void;
    removeWeddingInvitations: (invitationName: string) => void;
}

// Define interfaces for wedding information, style, and items
interface WeddingInfo {
    fullName: string;
    budget: string;
    place: string;
    weddingDate: string;
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

interface Makeup {
    makeupName: string;
}

interface Flowers {
    flowersName: string;
}

interface WeddingPhotography {
    photographyName: string;
}

interface Decoration {
    decorationName: string;
}

interface WeddingInvitations {
    invitationsName: string;
}

// Create the WeddingContext with undefined as the default value
export const WeddingContext = createContext<WeddingContextProps | undefined>(undefined);

// WeddingProvider will hold the state and pass the context values to its children
export const WeddingProvider = ({ children }: { children: ReactNode }) => {
    const [weddingInfo, setWeddingInfo] = useState<WeddingInfo>({
        fullName: '',
        budget: '',
        place: '',
        weddingDate: '',
    });

    const [accessories, setAccessories] = useState<Accessories[]>([]);
    const [clothes, setClothes] = useState<Clothes[]>([]);
    const [restaurants, setRestaurants] = useState<Restaurants[]>([]);
    const [makeup, setMakeup] = useState<Makeup[]>([]);
    const [flowers, setFlowers] = useState<Flowers[]>([]);
    const [weddingPhotography, setWeddingPhotography] = useState<WeddingPhotography[]>([]);
    const [decoration, setDecoration] = useState<Decoration[]>([]);
    const [weddingInvitations, setWeddingInvitations] = useState<WeddingInvitations[]>([]);

    // Functions to update wedding info and wedding style
    const updateWeddingInfo = (info: Partial<WeddingInfo>) => {
        setWeddingInfo((prev) => ({ ...prev, ...info }));
    };

    // Functions to add new items to each category
    const addAccessory = (accessory: Accessories) => {
        setAccessories((prev) => [...prev, accessory]);
    };

    const addClothes = (clothes: Clothes) => {
        setClothes((prev) => [...prev, clothes]);
    };

    const addRestaurant = (restaurant: Restaurants) => {
        setRestaurants((prev) => [...prev, restaurant]);
    };

    const addMakeup = (makeup: Makeup) => {
        setMakeup((prev) => [...prev, makeup]);
    };

    const addFlowers = (flowers: Flowers) => {
        setFlowers((prev) => [...prev, flowers]);
    };

    const addWeddingPhotography = (photography: WeddingPhotography) => {
        setWeddingPhotography((prev) => [...prev, photography]);
    };

    const addDecoration = (decoration: Decoration) => {
        setDecoration((prev) => [...prev, decoration]);
    };

    const addWeddingInvitations = (invitations: WeddingInvitations) => {
        setWeddingInvitations((prev) => [...prev, invitations]);
    };

    // In your useWedding hook or WeddingProvider component
    const removeAccessory = (accessoryName: string) => {
        setAccessories((prev) => prev.filter(item => item.accessoriesName !== accessoryName));
    };

    const removeClothes = (clothesName: string) => {
        setClothes((prev) => prev.filter(item => item.clothesName !== clothesName));
    };

    const removeRestaurant = (restaurantName: string) => {
        setRestaurants((prev) => prev.filter(item => item.restaurantsName !== restaurantName));
    };

    const removeMakeup = (makeupName: string) => {
        setMakeup((prev) => prev.filter(item => item.makeupName !== makeupName));
    };

    const removeFlowers = (flowersName: string) => {
        setFlowers((prev) => prev.filter(item => item.flowersName !== flowersName));
    };

    const removeWeddingPhotography = (photographyName: string) => {
        setWeddingPhotography((prev) => prev.filter(item => item.photographyName !== photographyName));
    };

    const removeDecoration = (decorationName: string) => {
        setDecoration((prev) => prev.filter(item => item.decorationName !== decorationName));
    };

    const removeWeddingInvitations = (invitationName: string) => {
        setWeddingInvitations((prev) => prev.filter(item => item.invitationsName !== invitationName));
    };

    return (
        <WeddingContext.Provider
            value={{
                ...weddingInfo,
                accessories,
                clothes,
                restaurants,
                makeup,
                flowers,
                weddingPhotography,
                decoration,
                weddingInvitations,
                setWeddingInfo: updateWeddingInfo,
                addAccessory,
                addClothes,
                addRestaurant,
                addMakeup,
                addFlowers,
                addWeddingPhotography,
                addDecoration,
                addWeddingInvitations,
                removeAccessory,
                removeClothes,
                removeRestaurant,
                removeMakeup,
                removeFlowers,
                removeWeddingPhotography,
                removeDecoration,
                removeWeddingInvitations,
            }}
        >
            {children}
        </WeddingContext.Provider>
    );
};
