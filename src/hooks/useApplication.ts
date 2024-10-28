import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

const useApplication = () => {
    const api = new ApiClient<any>('/application');
    return useQuery({
        queryKey: ["application"],
        queryFn: () =>
            api.getAuthen({
                params: {
                    page: 0,
                    size: 1000
                }
            })
                .then((data) => {
                    return data.data;
                })
    });
}

export default useApplication