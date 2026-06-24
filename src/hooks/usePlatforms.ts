import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => 
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll({}).then((res) => res.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
;
