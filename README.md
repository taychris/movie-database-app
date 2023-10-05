# Movie Database

🌍 [mv-db.vercel.app](https://mv-db.vercel.app)

**What is the Movie Database app?** 

It allows users to search for specific movies based on their title. The app also allows users to find detailed information about the movie itself. Moreover, users are able to keep a list of their favorite movies.

**Tech Stack used:**
- Vite + ReactJS with Typescript
- React-Router
- OMDB API
- Axios
- React-Query
- Zustand
- React-Helmet
- TailwindCSS
- Shadcn UI
- Vercel

# Script descriptions

In this section, I will describe the scripts that play the most important roles in the application.

**src/service/apiCalls.ts**

`loadSearchedMovies(query: string, page: number)`
This function is responsible for fetching basic movie data from the OMDB API. It is used to list out movies that match the search query. It **requires** both of the props. 
The function returns the following objects: **Search, totalResults, page**
- **query** prop is used for getting the movies searched by its title
- **page** props is used for pagination

`loadMovieDetails(imdbID: string)`
This function is responsible for fetching a specific movie based on its **imdbID**.
It returns detailed information about the specific movie. The function returns one object.
- **imdbID** prop is required

**src/components/home/MovieList.tsx**

In my opinion, Infinite Scroll provides a better user experience. For this, the `useInfiniteQuery` hook is used from React-Query in combination with a library called `react-infinite-scroll-component`. This allowed an easy implementation of the infinite scroll feature. Moreover, `useInfiniteQuery` caches the fetched results, which means if we check a movie's details and navigate back, the list of fetched movies stay on the page, and the scroll position is also persisted.

Also, `useInfiniteQuery` provides state statuses, such as `isLoading` which allows to ditch unnecessary "spaghetti code".

The search query is extracted from the URL and is getting passed to the `loadSearchedMovies` function.

**src/pages/Movie.tsx**

To fetch detailed movie information the `useQuery` hook is used from React-Query. The `imdbID` of the movie is need for this. The ID is extracted from the URL and is getting passed to the `loadMovieDetails` function.


# Storing the list of Favorite movies

For this feature, the state management library **Zustand** is used, since it allows for persisting state on the client side. This is where the list of favorite movies is maintained.

Next, it is also being used for keeping track of the previous search query. This is needed when a user searches for a new movie title, and the cached list of movies need to be removed from the cache.