import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

interface Prop {
    budgetLevel: string;
    weddingConcept: string;
    utilityType: string;
}

const useProduct = ({ budgetLevel, weddingConcept, utilityType }: Prop) => {
    const api = new ApiClient<any>('/product');
    return useQuery({
        queryKey: ["product"],
        queryFn: () =>
            api.getUnauthen({
                params: {
                    budgetLevel,
                    weddingConcept,
                    utilityType,
                    page: 0,
                    size: 10
                }
            })
                .then((data) => {
                    return data.data;
                })
    });
}

export default useProduct