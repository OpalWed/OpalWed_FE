import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"
import { Status } from "../types/type.enum";

interface Prop {
    name?: string;
    status?: Status;
}

const usePartner = ({ name, status }: Prop = {}) => {
    const api = new ApiClient<any>('/partner');
    return useQuery({
        queryKey: ["partner"],
        queryFn: () =>
            api.getUnauthen({
                params: {
                    name,
                    status,
                    page: 0,
                    size: 1000
                }
            })
                .then((data) => {
                    return data.data;
                })
    });
}

export default usePartner