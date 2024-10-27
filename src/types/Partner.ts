import { Status, Utility } from "./type.enum";

export interface Partner {
    informationId: number;
    fullName: string;
    partnerName: string;
    phone: string;
    address: string;
    description: string;
    imageUrl: string;
    partnerId: number;
    utilities: Utility;
    status: Status;
    images: string[];
    successEvent: number;
    note: string;
}

export const initialPartner: Partner = {
    informationId: 0,
    fullName: '',
    partnerName: '',
    phone: '',
    address: '',
    description: '',
    imageUrl: '',
    partnerId: 0,
    utilities: Utility.CLOTHES,
    status: Status.INACTIVE,
    images: [],
    successEvent: 0,
    note: ''
};

