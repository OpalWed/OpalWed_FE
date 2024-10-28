import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"
import { Budget, Concept, Status, Utility } from "../types/type.enum";

interface Prop {
    budgetLevel?: Budget;
    weddingConcept?: Concept;
    utilityType?: Utility;
    name?: string;
    status?: Status;
}

const useManageProduct = ({ name, budgetLevel, weddingConcept, utilityType, status }: Prop = {}) => {
    const api = new ApiClient<any>('/manage/product');
    return useQuery({
        queryKey: ["manage-product"],
        queryFn: () =>
            api.getUnauthen({
                params: {
                    name,
                    budgetLevel,
                    weddingConcept,
                    utilityType,
                    status,
                    page: 0,
                    size: 1000
                }
            })
                .then((data) => {
                    return data.data;
                })
    });
}

export default useManageProduct