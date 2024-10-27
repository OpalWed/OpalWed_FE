import { today } from "../utils/formatTime";

export interface Application {
    applicationId: number;
    userId: number;
    fullName: string;
    weddingDate: string;
    weddingLocation: string;
    numberOfGuests: number;
    weddingDescription: string;
    requiredServicesFile: string;
    status: string;
    createdDate: string;
}

export const initialApplication: Application = {
    applicationId: 0,
    userId: 0,
    fullName: '',
    weddingDate: today,
    weddingLocation: "",
    numberOfGuests: 0,
    weddingDescription: "",
    requiredServicesFile: "",
    status: "INITIAL",
    createdDate: new Date().toISOString(),
};