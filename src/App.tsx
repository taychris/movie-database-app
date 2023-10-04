import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Movie from "./pages/Movie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:imdbID" element={<Movie />} />
      </Routes>
      <Toaster />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
