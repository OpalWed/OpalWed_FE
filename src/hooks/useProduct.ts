import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"
import { Budget, Utility } from "../types/type.enum";

interface Prop {
    budgetLevel: Budget;
    utilityType: Utility;
}

const useProduct = ({ budgetLevel, utilityType }: Prop) => {
    const api = new ApiClient<any>('/product/budget-utility');
    return useQuery({
        queryKey: ["product"],
        queryFn: () =>
            api.getUnauthen({
                params: {
                    budgetLevel,
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