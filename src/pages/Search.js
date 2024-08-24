import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiEndPoint}) => {
  const [ searchParams  ] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiEndPoint, queryTerm);

  useTitle(`Search Result ${queryTerm}`)

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies && movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card  key= {movie.id} movie= {movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
