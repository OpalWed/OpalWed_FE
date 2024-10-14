import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

const useProfile = () => {
    const api = new ApiClient<any>('/accountInfo/info');
    return useQuery({
        queryKey: ["profile"],
        queryFn: () =>
            api.getAuthen()
                .then((data) => {
                    return data.data;
                })
    });
}

export default useProfile