export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  trailerUrl?: string;
  synopsis: string;
  duration: string;
  rating: string;
  genre: string[];
  releaseDate: string;
  showTimes: ShowTime[];
  ageRating?: string;
  director?: string;
  cast?: string[];
}

export interface ShowTime {
  id: string;
  time: string;
  room: string;
  price: number;
  availableSeats: number;
  format?: string; // Ex: "2D", "3D", "IMAX", etc.
  language?: string; // Ex: "Dublado", "Legendado"
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  validUntil: string;
  discountPercentage?: number;
  conditions?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  type: 'premiere' | 'special' | 'festival';
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Cinema {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phoneNumber: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  openingHours: {
    weekdays: string;
    weekend: string;
    holidays?: string;
  };
}