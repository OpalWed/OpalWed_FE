import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

const useHistoryTransaction = () => {
    const api = new ApiClient<any>('/manage/application/paid');
    return useQuery({
        queryKey: ["manage-paid-application"],
        queryFn: () =>
            api.getAuthen({
                params: {
                    page: 0,
                    size: 10
                }
            })
                .then((data) => {
                    return data.data;
                })
    });
}

export default useHistoryTransaction