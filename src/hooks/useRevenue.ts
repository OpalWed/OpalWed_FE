import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

interface Prop {
    year: number;
}

const useRevenue = ({ year }: Prop) => {
    const api = new ApiClient<any>('/manage/dashboard/daily');
    return useQuery({
        queryKey: ["revenue"],
        queryFn: () =>
            api.getDetail(year)
                .then((data) => {
                    return data.data;
                })
    });
}

export default useRevenue