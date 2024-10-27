import { today } from "../utils/formatTime";
import { PaymentStatus } from "./type.enum";

export interface Application {
    applicationId: number;
    userId: number;
    fullName: string;
    description: string;
    weddingDate: string;
    weddingLocation: string;
    numberOfGuests: number;
    weddingDescription: string;
    requiredServicesFile: string;
    price: number;
    paymentStatus: PaymentStatus;
    status: string;
    createdDate: string;
}

export const initialApplication: Application = {
    applicationId: 0,
    userId: 0,
    fullName: '',
    description: '',
    weddingDate: today,
    weddingLocation: "",
    numberOfGuests: 0,
    weddingDescription: "",
    requiredServicesFile: "",
    price: 0,
    paymentStatus: PaymentStatus.CANCELLED,
    status: "INITIAL",
    createdDate: new Date().toISOString(),
};