import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800 ">
        <Routes>
            <Route path="" element={<MovieList apiEndPoint= "movie/now_playing" title = "Home"/>} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiEndPoint= "movie/popular" title = "Popular"/>}  />
            <Route path="movies/top" element={<MovieList apiEndPoint= "movie/top_rated" title = "Top Rated"/>} />
            <Route path="movies/upcoming" element={<MovieList apiEndPoint= "movie/upcoming" title = "Upcoming"/>} />
            <Route path="search" element={<Search apiEndPoint="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div >
  )
}
 