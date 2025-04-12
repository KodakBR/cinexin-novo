import { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';
import { Movie } from '../../types';

interface MoviesSectionProps {
  movies: Movie[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

const MoviesSection = ({ 
  movies, 
  title = "Filmes em Cartaz", 
  subtitle = "Confira os filmes em cartaz em nossas salas de cinema",
  showFilters = true
}: MoviesSectionProps) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Extrair todos os gêneros únicos dos filmes
  const genres = [...new Set(movies.flatMap(movie => movie.genre))];
  
  // Filtrar filmes por gênero e texto de busca
  const filteredMovies = movies.filter(movie => {
    const matchesGenre = filter === 'all' || movie.genre.includes(filter);
    const matchesSearch = searchQuery === '' || 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesGenre && matchesSearch;
  });
  
  return (
    <section className="section bg-dark-950">
      <div className="container">
        <h2 className="section-title text-white">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        
        {showFilters && (
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              {/* Filtro por gênero */}
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-800 text-white hover:bg-dark-700'
                  }`}
                  onClick={() => setFilter('all')}
                >
                  Todos
                </button>
                
                {genres.map((genre) => (
                  <button
                    key={genre}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      filter === genre
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-800 text-white hover:bg-dark-700'
                    }`}
                    onClick={() => setFilter(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </div>
              
              {/* Campo de busca */}
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Buscar filme..."
                  className="bg-dark-800 border-dark-700 text-white rounded-full py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-400">Nenhum filme encontrado para a sua busca.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 btn-primary"
            >
              Limpar Filtros
            </button>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link to="/programacao" className="btn-primary">
            Ver Programação Completa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;