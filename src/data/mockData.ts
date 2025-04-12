import { Movie, Promotion, Event, Service, Cinema } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Duna: Parte Dois',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '2h 46min',
    rating: '9.2',
    genre: ['Ficção Científica', 'Aventura'],
    synopsis: 'Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.',
    releaseDate: '2024-03-14',
    ageRating: '14',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Oscar Isaac'],
    showTimes: [
      { id: '1', time: '14:30', room: 'Sala 1', price: 32, availableSeats: 45, format: '3D', language: 'Legendado' },
      { id: '2', time: '17:45', room: 'Sala 1', price: 32, availableSeats: 38, format: '3D', language: 'Legendado' },
      { id: '3', time: '21:00', room: 'Sala 1', price: 32, availableSeats: 50, format: '3D', language: 'Legendado' },
    ]
  },
  {
    id: '2',
    title: 'O Corvo',
    posterUrl: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '1h 33min',
    rating: '8.5',
    genre: ['Ação', 'Terror', 'Fantasia'],
    synopsis: 'Depois de serem brutalmente assassinados, um homem e sua namorada retornam do mundo dos mortos para vingar suas mortes.',
    releaseDate: '2024-04-22',
    ageRating: '16',
    director: 'Rupert Sanders',
    cast: ['Bill Skarsgård', 'FKA Twigs', 'Danny Huston'],
    showTimes: [
      { id: '4', time: '14:00', room: 'Sala 2', price: 28, availableSeats: 60, format: '2D', language: 'Dublado' },
      { id: '5', time: '16:15', room: 'Sala 2', price: 28, availableSeats: 55, format: '2D', language: 'Dublado' },
      { id: '6', time: '18:30', room: 'Sala 2', price: 32, availableSeats: 45, format: '2D', language: 'Legendado' },
      { id: '7', time: '20:45', room: 'Sala 2', price: 32, availableSeats: 48, format: '2D', language: 'Legendado' },
    ]
  },
  {
    id: '3',
    title: 'Kung Fu Panda 4',
    posterUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '1h 34min',
    rating: '7.9',
    genre: ['Animação', 'Aventura', 'Comédia'],
    synopsis: 'Po é escolhido para se tornar o Líder Espiritual do Vale da Paz. No entanto, surge um novo vilão, O Camaleão, que tem o poder de invocar todos os vilões que Po já derrotou.',
    releaseDate: '2024-03-07',
    ageRating: 'Livre',
    director: 'Mike Mitchell',
    cast: ['Jack Black', 'Awkwafina', 'Viola Davis', 'Bryan Cranston'],
    showTimes: [
      { id: '8', time: '13:30', room: 'Sala 3', price: 24, availableSeats: 70, format: '2D', language: 'Dublado' },
      { id: '9', time: '15:40', room: 'Sala 3', price: 24, availableSeats: 65, format: '2D', language: 'Dublado' },
      { id: '10', time: '17:50', room: 'Sala 3', price: 28, availableSeats: 58, format: '3D', language: 'Dublado' },
    ]
  },
  {
    id: '4',
    title: 'Godzilla e Kong: O Novo Império',
    posterUrl: 'https://images.unsplash.com/photo-1559583109-3e7968136c99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '1h 55min',
    rating: '8.2',
    genre: ['Ação', 'Aventura', 'Ficção Científica'],
    synopsis: 'O poderoso Kong e o temível Godzilla se unem contra uma ameaça colossal escondida em nosso mundo, desafiando sua própria existência e a nossa.',
    releaseDate: '2024-03-28',
    ageRating: '12',
    director: 'Adam Wingard',
    cast: ['Rebecca Hall', 'Brian Tyree Henry', 'Dan Stevens'],
    showTimes: [
      { id: '11', time: '13:45', room: 'Sala 4', price: 32, availableSeats: 40, format: '3D', language: 'Dublado' },
      { id: '12', time: '16:30', room: 'Sala 4', price: 32, availableSeats: 38, format: '3D', language: 'Dublado' },
      { id: '13', time: '19:15', room: 'Sala 4', price: 36, availableSeats: 42, format: 'IMAX', language: 'Legendado' },
      { id: '14', time: '22:00', room: 'Sala 4', price: 36, availableSeats: 45, format: 'IMAX', language: 'Legendado' },
    ]
  },
  {
    id: '5',
    title: 'Divertida Mente 2',
    posterUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '1h 36min',
    rating: '8.7',
    genre: ['Animação', 'Aventura', 'Comédia'],
    synopsis: 'Riley está na adolescência, e novas emoções estão chegando. Alegria, Tristeza, Raiva, Medo e Nojinho, vão receber mais companhia.',
    releaseDate: '2024-06-13',
    ageRating: 'Livre',
    director: 'Kelsey Mann',
    cast: ['Amy Poehler', 'Phyllis Smith', 'Lewis Black', 'Tony Hale'],
    showTimes: [
      { id: '15', time: '14:30', room: 'Sala 5', price: 28, availableSeats: 60, format: '2D', language: 'Dublado' },
      { id: '16', time: '16:45', room: 'Sala 5', price: 28, availableSeats: 58, format: '2D', language: 'Dublado' },
      { id: '17', time: '19:00', room: 'Sala 5', price: 32, availableSeats: 55, format: '3D', language: 'Dublado' },
    ]
  },
  {
    id: '6',
    title: 'Deadpool & Wolverine',
    posterUrl: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    trailerUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '2h 07min',
    rating: '9.0',
    genre: ['Ação', 'Aventura', 'Comédia'],
    synopsis: 'O mercenário tagarela se junta ao mutante mal-humorado em uma aventura que muda as regras do multiverso.',
    releaseDate: '2024-07-25',
    ageRating: '18',
    director: 'Shawn Levy',
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin', 'Matthew Macfadyen'],
    showTimes: [
      { id: '18', time: '15:00', room: 'Sala 6', price: 32, availableSeats: 50, format: '2D', language: 'Legendado' },
      { id: '19', time: '17:45', room: 'Sala 6', price: 32, availableSeats: 48, format: '2D', language: 'Legendado' },
      { id: '20', time: '20:30', room: 'Sala 6', price: 36, availableSeats: 45, format: '3D', language: 'Legendado' },
    ]
  },
];

export const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Segunda do Cliente',
    description: 'Todos os ingressos com 50% de desconto às segundas-feiras para clientes cadastrados.',
    imageUrl: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    validUntil: '2024-12-31',
    discountPercentage: 50,
    conditions: 'Válido apenas para cadastrados no programa de fidelidade. Não válido em feriados.'
  },
  {
    id: '2',
    title: 'Combo Casal',
    description: 'Dois ingressos + pipoca grande + 2 refrigerantes.',
    imageUrl: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    price: 75,
    validUntil: '2024-12-31',
    conditions: 'Válido de segunda a quinta-feira, exceto feriados.'
  },
  {
    id: '3',
    title: 'Aniversariante',
    description: 'No mês do seu aniversário, ganhe um ingresso grátis na compra de outro.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    validUntil: '2024-12-31',
    conditions: 'Necessário apresentar documento com foto. Válido apenas uma vez no mês do aniversário.'
  },
  {
    id: '4',
    title: 'CineClube',
    description: 'Assine nosso clube e ganhe descontos em ingressos e combos durante todo o ano!',
    imageUrl: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    price: 29.90,
    validUntil: '2024-12-31',
    conditions: 'Valor mensal. Plano anual disponível com desconto.'
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Pré-estreia: Coringa 2',
    description: 'Seja um dos primeiros a assistir a continuação do aclamado filme Coringa.',
    imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    date: '2024-10-02',
    type: 'premiere',
    location: 'CineXin Cuiabá'
  },
  {
    id: '2',
    title: 'Maratona Marvel',
    description: 'Reviva os melhores momentos do universo cinematográfico da Marvel em uma maratona imperdível!',
    imageUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
    date: '2024-09-15',
    type: 'special',
    location: 'CineXin Cuiabá'
  },
  {
    id: '3',
    title: 'Festival de Cinema Latino',
    description: 'Uma semana dedicada ao melhor do cinema latino-americano com debates e convidados especiais.',
    imageUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    date: '2024-08-10',
    type: 'festival',
    location: 'CineXin Cuiabá'
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'CineMídia',
    description: 'Divulgue sua marca nas salas de cinema do CineXin e alcance milhares de espectadores mensalmente.',
    imageUrl: 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/anuncie'
  },
  {
    id: '2',
    title: 'Projeto Cine Escola',
    description: 'Traga sua escola para uma experiência educativa e divertida com filmes selecionados e material pedagógico.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/cineescola'
  },
  {
    id: '3',
    title: 'Cine Empresa',
    description: 'Pacotes especiais para empresas com preços diferenciados para grupos e eventos corporativos.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/cineempresa'
  },
  {
    id: '4',
    title: 'Locação de Sala',
    description: 'Alugue nossas salas de cinema para eventos especiais, palestras ou apresentações.',
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/cineevento'
  },
  {
    id: '5',
    title: 'Aniversário no Cinema',
    description: 'Comemore seu aniversário de um jeito diferente! Pacotes especiais para festas infantis e adultos.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    link: '/cinefesta'
  }
];

export const cinemas: Cinema[] = [
  {
    id: '1',
    name: 'CineXin Cuiabá',
    address: 'Av. Principal, 1000 - Centro',
    city: 'Cuiabá',
    state: 'MT',
    phoneNumber: '(65) 3321-0000',
    email: 'cuiaba@cinexin.com.br',
    coordinates: {
      lat: -15.601411,
      lng: -56.097892
    },
    openingHours: {
      weekdays: '14h às 22h',
      weekend: '13h às 23h',
      holidays: '13h às 22h'
    }
  },
  {
    id: '2',
    name: 'CineXin Várzea Grande',
    address: 'Shopping Center, Piso L3 - Várzea Grande',
    city: 'Várzea Grande',
    state: 'MT',
    phoneNumber: '(65) 3321-1000',
    email: 'varzeagrande@cinexin.com.br',
    coordinates: {
      lat: -15.646795,
      lng: -56.132572
    },
    openingHours: {
      weekdays: '14h às 22h',
      weekend: '13h às 23h',
      holidays: '13h às 22h'
    }
  },
  {
    id: '3',
    name: 'CineXin Rondonópolis',
    address: 'Av. Fernando Corrêa da Costa, 4500',
    city: 'Rondonópolis',
    state: 'MT',
    phoneNumber: '(66) 3421-5000',
    email: 'rondonopolis@cinexin.com.br',
    coordinates: {
      lat: -16.460216,
      lng: -54.638542
    },
    openingHours: {
      weekdays: '14h às 22h',
      weekend: '13h às 23h',
      holidays: '13h às 22h'
    }
  },
  {
    id: '4',
    name: 'CineXin Sinop',
    address: 'Av. das Itaúbas, 3500 - Jardim Botânico',
    city: 'Sinop',
    state: 'MT',
    phoneNumber: '(66) 3511-3000',
    email: 'sinop@cinexin.com.br',
    coordinates: {
      lat: -11.860380,
      lng: -55.504829
    },
    openingHours: {
      weekdays: '14h às 22h',
      weekend: '13h às 23h',
      holidays: '13h às 22h'
    }
  }
];