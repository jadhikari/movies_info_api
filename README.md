

# MovieApp

MovieApp is a React-based application that leverages The Movie Database (TMDb) API to display information about movies, including popular, top-rated, upcoming, and detailed movie information. The application also features a search functionality to find movies.

## Features

- **List Movies**: Display a list of movies categorized by popularity, top-rated, and upcoming releases.
- **Movie Details**: View detailed information about a specific movie, including its synopsis, rating, and more.
- **Search Functionality**: Search for movies by title using the TMDb API.
- **Responsive Design**: Tailwind CSS is used for styling, ensuring a responsive and modern user interface.

## API Configuration

This project uses the [TMDb API](https://www.themoviedb.org/documentation/api) to fetch movie data. To get started, you need to configure the API key.

1. Create a `.env` file in the root directory.
2. Add your TMDb API key in the following format:

   ```plaintext
   REACT_APP_BASE_URL=https://api.themoviedb.org/3
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movies_info_api.git
   cd movies_info_api
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```

## Usage

Once the development server is running, you can explore the different movie categories, view details for each movie, and use the search bar to find specific movies.

## Project Structure

```plaintext

src/
│
├── components/
│   ├── ListMovies.js
│   ├── MovieDetails.js
│   ├── Search.js
│   └── ...
│
├── hooks/
│   └── useFetch.js
|	.....
│
├── pages/
│   ├── Popular.js
│   ├── TopRated.js
│   ├── Upcoming.js
│   └── ...
│
├── App.js
└── index.js
```

- **components/**: Contains reusable React components like `ListMovies`, `MovieDetails`, and `Search`.
- **hooks/**: Custom hooks such as `useFetch` for fetching data from the API.
- **pages/**: Pages that correspond to different routes, such as popular, top-rated, and upcoming movies.

## Tailwind CSS

Tailwind CSS is used for the styling of the application. The configuration is set up in `tailwind.config.js`. Make sure to install and configure Tailwind CSS by following the [official documentation](https://tailwindcss.com/docs/installation).

## Contributing

Feel free to submit issues, fork the repository, and send pull requests! Contributions are welcome.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the API.
- [Tailwind CSS](https://tailwindcss.com/) for the design framework.
