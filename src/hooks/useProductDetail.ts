import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

interface Prop {
    id: number
}

const useProductDetail = ({ id }: Prop) => {
    const api = new ApiClient<any>('/product');
    return useQuery({
        queryKey: ["productDetail"],
        queryFn: () =>
            api.getDetailUnauthen(id)
                .then((data) => {
                    return data.data;
                })
    });
}

export default useProductDetail