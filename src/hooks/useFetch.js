import { useState, useEffect } from "react";

export const useFetch = (apiEndPoint, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `${process.env.REACT_APP_BASE_URL }/${apiEndPoint}?api_key=${process.env.REACT_APP_API_KEY }&query=${queryTerm}`

    useEffect(() => {
      async function fetchMovies() {
          try {
              const response = await fetch(url);
              const json = await response.json();
              setData(json.results || []); // Ensure `json.results` is an array
          } catch (error) {
              console.error("Error fetching data:", error);
              setData([]); // Set to empty array on error
          }
      }
      fetchMovies();
  }, [url]);
 
  return{ data }
}
 
 