import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

const useAccounts = () => {
    const api = new ApiClient<any>('/accountInfo/accounts');
    return useQuery({
        queryKey: ["accounts"],
        queryFn: () =>
            api.getAuthen()
                .then((data) => {
                    return data.data;
                })
    });
}

export default useAccounts