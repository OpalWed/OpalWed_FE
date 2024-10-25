import { createContext, useState, ReactNode } from 'react';
import { Concept } from '../types/type.enum';

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
    removeAccessory: (accessory: Accessories) => void;
    removeClothes: (clothes: Clothes) => void;
    removeRestaurant: (restaurant: Restaurants) => void;
    removeMakeup: (makeup: Makeup) => void;
    removeFlowers: (flowers: Flowers) => void;
    removeWeddingPhotography: (photography: WeddingPhotography) => void;
    removeDecoration: (decoration: Decoration) => void;
    removeWeddingInvitations: (invitation: WeddingInvitations) => void;
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
    color: string;
    concept: Concept;
}

interface Restaurants {
    restaurantsName: string;
    concept: Concept;
}

interface Makeup {
    makeupName: string;
    concept: Concept;
}

interface Flowers {
    flowersName: string;
}

interface WeddingPhotography {
    photographyName: string;
    concept: Concept;
}

interface Decoration {
    decorationName: string;
    color: string;
    concept: Concept;
}

interface WeddingInvitations {
    invitationsName: string;
    concept: Concept;
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

    const removeAccessory = (accessoryToRemove: Accessories) => {
        setAccessories((prev) =>
            prev.filter(item =>
                item.accessoriesName !== accessoryToRemove.accessoriesName
            )
        );
    };

    const removeClothes = (clothesToRemove: Clothes) => {
        setClothes((prev) =>
            prev.filter(item =>
                item.clothesName !== clothesToRemove.clothesName ||
                item.color !== clothesToRemove.color ||
                item.concept !== clothesToRemove.concept
            )
        );
    };

    const removeRestaurant = (restaurantToRemove: Restaurants) => {
        setRestaurants((prev) =>
            prev.filter(item =>
                item.restaurantsName !== restaurantToRemove.restaurantsName ||
                item.concept !== restaurantToRemove.concept
            )
        );
    };

    const removeMakeup = (makeupToRemove: Makeup) => {
        setMakeup((prev) =>
            prev.filter(item =>
                item.makeupName !== makeupToRemove.makeupName ||
                item.concept !== makeupToRemove.concept
            )
        );
    };

    const removeFlowers = (flowersToRemove: Flowers) => {
        setFlowers((prev) =>
            prev.filter(item =>
                item.flowersName !== flowersToRemove.flowersName
            )
        );
    };

    const removeWeddingPhotography = (photographyToRemove: WeddingPhotography) => {
        setWeddingPhotography((prev) =>
            prev.filter(item =>
                item.photographyName !== photographyToRemove.photographyName ||
                item.concept !== photographyToRemove.concept
            )
        );
    };

    const removeDecoration = (decorationToRemove: Decoration) => {
        setDecoration((prev) =>
            prev.filter(item =>
                item.decorationName !== decorationToRemove.decorationName ||
                item.color !== decorationToRemove.color ||
                item.concept !== decorationToRemove.concept
            )
        );
    };

    const removeWeddingInvitations = (invitationToRemove: WeddingInvitations) => {
        setWeddingInvitations((prev) =>
            prev.filter(item =>
                item.invitationsName !== invitationToRemove.invitationsName ||
                item.concept !== invitationToRemove.concept
            )
        );
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
