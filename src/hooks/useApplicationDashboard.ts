import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

interface Prop {
    year: number;
}

const useApplicationDashboard = ({ year }: Prop) => {
    const api = new ApiClient<any>('/manage/dashboard');
    return useQuery({
        queryKey: ["application-dashboard"],
        queryFn: () =>
            api.getAuthen({
                params: {
                    year: year
                }
            })
                .then((data) => {
                    return data.data;
                })
    });
}

export default useApplicationDashboard