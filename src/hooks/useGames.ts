import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () =>{
    //<Game[]> is needed to avoid the compilation error for the res response
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
            // makes it so that error code: canceled, doesn't show
            if (err instanceof CanceledError) return;
            setError(err.message)
        });
        //clean up function 
      return () => controller.abort();
  }, []);

  return {games, error};
}

export default useGames