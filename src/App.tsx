import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Favorites from './pages/Favorites';
import { Toaster } from './components/ui/toaster';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/movie/:imdbID" element={<Movie/>}/>
      </Routes>
      <Toaster/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App
