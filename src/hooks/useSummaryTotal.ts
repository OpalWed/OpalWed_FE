import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

const useSummaryTotal = () => {
    const api = new ApiClient<any>('/manage/dashboard/total');
    return useQuery({
        queryKey: ["summary-total"],
        queryFn: () =>
            api.getAuthen()
                .then((data) => {
                    return data.data;
                })
    });
}

export default useSummaryTotal