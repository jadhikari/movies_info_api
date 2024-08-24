import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="#" className="hover:underline">Movie Update</Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <NavLink to="/" className="hover:underline me-4 md:me-6">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies/popular" className="hover:underline me-4 md:me-6">Popular</NavLink>
            </li>
            <li>
                <NavLink to="/movies/top" className="hover:underline me-4 md:me-6">Top Rated</NavLink>
            </li>
            <li>
                <NavLink to="/movies/popular" className="hover:underline">Upcomming</NavLink>
            </li>
        </ul>
    </footer>
  )
}
