import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiEndPoint, title}) => {

  const { data: movies } = useFetch(apiEndPoint);

  useTitle(title)

  return (
    <main>
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
