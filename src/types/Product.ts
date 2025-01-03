import { Budget, Concept, ProductStatus, Utility } from "./type.enum";

export interface Product {
    productId: number;
    partnerId: number;
    productName: string;
    description: string;
    image: string;
    price: string;
    budgetLevel: Budget;
    weddingConcept: Concept;
    utility: Utility;
    status: ProductStatus;
}

export const initialProduct: Product = {
    productId: 0,
    partnerId: 0,
    productName: '',
    description: '',
    image: '',
    price: '0',
    budgetLevel: Budget.LOW,
    weddingConcept: Concept.EUROPE,
    utility: Utility.CLOTHES,
    status: ProductStatus.UNAVAILABLE,
};
