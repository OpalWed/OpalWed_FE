import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"

const useManageApplication = () => {
    const api = new ApiClient<any>('/manage/application');
    return useQuery({
        queryKey: ["manage-application"],
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

export default useManageApplication