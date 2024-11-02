import { createContext, useState, ReactNode } from 'react';
import { Concept } from '../types/type.enum';

// Define the props for the context, which include wedding details, style, and lists of items
export interface WeddingContextProps {
    fullName: string;
    phone: string;
    budget: string;
    place: string;
    weddingDate: string;
    clothes: Clothes[];
    makeup: Makeup[];
    flowers: Flowers[];
    weddingPhotography: WeddingPhotography[];
    restaurantConcept: RestaurantConcept[];
    weddingInvitations: WeddingInvitations[];
    setWeddingInfo: (info: Partial<WeddingInfo>) => void;
    addClothes: (clothes: Clothes) => void;
    addMakeup: (makeup: Makeup) => void;
    addFlowers: (flowers: Flowers) => void;
    addWeddingPhotography: (photography: WeddingPhotography) => void;
    addRestaurantConcept: (restaurantConcept: RestaurantConcept) => void;
    addWeddingInvitations: (invitations: WeddingInvitations) => void;
    removeClothes: (clothes: Clothes) => void;
    removeMakeup: (makeup: Makeup) => void;
    removeFlowers: (flowers: Flowers) => void;
    removeWeddingPhotography: (photography: WeddingPhotography) => void;
    removeRestaurantConcept: (restaurantConcept: RestaurantConcept) => void;
    removeWeddingInvitations: (invitation: WeddingInvitations) => void;
}

// Define interfaces for wedding information, style, and items
interface WeddingInfo {
    fullName: string;
    phone: string;
    budget: string;
    place: string;
    weddingDate: string;
}

interface Clothes {
    image: string;
    clothesName: string;
    color: string;
    concept: Concept;
}

interface Makeup {
    image: string;
    makeupName: string;
    concept: Concept;
}

interface Flowers {
    image: string;
    flowersName: string;
    note: string;
}

interface WeddingPhotography {
    image: string;
    photographyName: string;
    concept: Concept;
}

interface RestaurantConcept {
    image: string;
    restaurantConceptName: string;
    color: string;
    concept: Concept;
}

interface WeddingInvitations {
    image: string;
    invitationsName: string;
    concept: Concept;
    color: string
}

// Create the WeddingContext with undefined as the default value
export const WeddingContext = createContext<WeddingContextProps | undefined>(undefined);

// WeddingProvider will hold the state and pass the context values to its children
export const WeddingProvider = ({ children }: { children: ReactNode }) => {
    const [weddingInfo, setWeddingInfo] = useState<WeddingInfo>({
        fullName: '',
        phone: '',
        budget: '',
        place: '',
        weddingDate: '',
    });

    const [clothes, setClothes] = useState<Clothes[]>([]);
    const [restaurantConcept, setRestaurantConcept] = useState<RestaurantConcept[]>([]);
    const [makeup, setMakeup] = useState<Makeup[]>([]);
    const [flowers, setFlowers] = useState<Flowers[]>([]);
    const [weddingPhotography, setWeddingPhotography] = useState<WeddingPhotography[]>([]);
    const [weddingInvitations, setWeddingInvitations] = useState<WeddingInvitations[]>([]);

    // Functions to update wedding info and wedding style
    const updateWeddingInfo = (info: Partial<WeddingInfo>) => {
        setWeddingInfo((prev) => ({ ...prev, ...info }));
    };

    // Functions to add new items to each category

    const addClothes = (clothes: Clothes) => {
        setClothes((prev) => [...prev, clothes]);
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


    const addRestaurantConcept = (restaurantConcept: RestaurantConcept) => {
        setRestaurantConcept((prev) => [...prev, restaurantConcept]);
    };

    const addWeddingInvitations = (invitations: WeddingInvitations) => {
        setWeddingInvitations((prev) => [...prev, invitations]);
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
                item.flowersName !== flowersToRemove.flowersName ||
                item.note !== item.note
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

    const removeRestaurantConcept = (restaurantConceptToRemove: RestaurantConcept) => {
        setRestaurantConcept((prev) =>
            prev.filter(item =>
                item.restaurantConceptName !== restaurantConceptToRemove.restaurantConceptName ||
                item.color !== restaurantConceptToRemove.color ||
                item.concept !== restaurantConceptToRemove.concept
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
                clothes,
                makeup,
                flowers,
                weddingPhotography,
                restaurantConcept,
                weddingInvitations,
                setWeddingInfo: updateWeddingInfo,
                addClothes,
                addMakeup,
                addFlowers,
                addWeddingPhotography,
                addRestaurantConcept,
                addWeddingInvitations,
                removeClothes,
                removeMakeup,
                removeFlowers,
                removeWeddingPhotography,
                removeRestaurantConcept,
                removeWeddingInvitations,
            }}
        >
            {children}
        </WeddingContext.Provider>
    );
};
