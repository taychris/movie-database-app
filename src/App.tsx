import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:imdbID" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
