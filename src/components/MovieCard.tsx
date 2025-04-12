import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
  showRating?: boolean;
}

const MovieCard = ({ movie, onClick, showRating = true }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };
  
  return (
    <div 
      className="group relative bg-dark-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Poster do filme */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay ao passar o mouse */}
        <div className={`absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}>
          <p className="text-gray-300 text-sm line-clamp-3 mb-4">
            {movie.synopsis}
          </p>
          <Link 
            to={`/filme/${movie.id}`}
            className="btn-primary py-2 text-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            Ver Detalhes
          </Link>
        </div>
        
        {/* Faixa de classificação indicativa */}
        {movie.ageRating && (
          <div className="absolute top-2 right-2 rounded bg-dark-800 text-white px-2 py-1 text-xs font-bold z-10">
            {movie.ageRating}
          </div>
        )}
      </div>
      
      {/* Informações do filme */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{movie.title}</h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-400">
            <span>{movie.duration}</span>
          </div>
          
          {showRating && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-medium text-white">{movie.rating}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {movie.genre.slice(0, 2).map((genre, index) => (
            <span 
              key={index}
              className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
          {movie.genre.length > 2 && (
            <span className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded">
              +{movie.genre.length - 2}
            </span>
          )}
        </div>
        
        {/* Próximas sessões */}
        {movie.showTimes.length > 0 && (
          <div>
            <h4 className="text-xs uppercase text-gray-400 mb-2">Próximas Sessões:</h4>
            <div className="flex flex-wrap gap-2">
              {movie.showTimes.slice(0, 3).map((session) => (
                <Link 
                  key={session.id}
                  to={`/ingressos/${movie.id}/${session.id}`}
                  className="text-xs bg-primary-900 hover:bg-primary-800 text-white px-2 py-1 rounded transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {session.time}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;