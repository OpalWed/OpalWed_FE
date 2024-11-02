import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"
import { Utility } from "../types/type.enum";

interface Prop {
    utilityType: Utility;
}

const useProductByUtility = ({ utilityType }: Prop) => {
    const api = new ApiClient<any>('/product/utility');
    return useQuery({
        queryKey: ["product-utility"],
        queryFn: () =>
            api.getUnauthen({
                params: {
                    utilityType,
                    page: 0,
                    size: 1000
                }
            })
                .then((data) => {
                    console.log(data.data);

                    return data.data;
                })
    });
}

export default useProductByUtility