export const initialState = {
  pros: [
    {
      id: 1,
      name: 'Johnny Zamulony',
      category: 'musician',
      instrument: 'drums',
      genre: 'rock',
      email: 'johnny@zamulony.com',
      rating: '4.5',
      featured: false,
      price: '200 PLN',
      priceOption: {
        basic: '200 PLN',
        standard: '400 PLN',
        premium: '600 PLN',
      },
      image: 'https://images.pexels.com/photos/876714/pexels-photo-876714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 2,
      name: 'Samanta Foxxx',
      category: 'musician',
      instrument: 'singer',
      genre: 'pop',
      email: 'samanta@foxxx.com',
      rating: '2.5',
      featured: false,
      price: '100 PLN',
      priceOption: {
        basic: '100 PLN',
        standard: '300 PLN',
        premium: '500 PLN',
      },
      image: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 3,
      name: 'Ludwik Hendrix',
      category: 'musician',
      instrument: 'guitar',
      genre: 'death metal',
      email: 'ludwik@hendrix.com',
      rating: '1.5',
      featured: true,
      price: '500 PLN',
      priceOption: {
        basic: '500 PLN',
        standard: '700 PLN',
        premium: '1200 PLN',
      },
      image: 'https://images.pexels.com/photos/2231747/pexels-photo-2231747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 4,
      name: 'Tadek Niejadek',
      category: 'musician',
      instrument: 'guitar',
      genre: 'folk',
      email: 'tadek@niejadek.com',
      rating: '1.5',
      featured: false,
      price: '50 PLN',
      priceOption: {
        basic: '50 PLN',
        standard: '700 PLN',
        premium: '200 PLN',
      },
      image: 'https://images.pexels.com/photos/3853886/pexels-photo-3853886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 5,
      name: 'Antonio Macierewicz',
      category: 'musician',
      instrument: 'bass',
      genre: 'progressive',
      email: 'anthony@macierewicz.gov.pl',
      rating: '0.0',
      featured: false,
      price: '10 PLN',
      priceOption: {
        basic: '10 PLN',
        standard: '20 PLN',
        premium: '30 PLN',
      },
      image: 'https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 6,
      name: 'Scooby Dooby Doo',
      category: 'musician',
      instrument: 'DJ',
      genre: 'house',
      email: 'scooby@dooby.com',
      rating: '0.0',
      featured: true,
      price: '300 PLN',
      priceOption: {
        basic: '300 PLN',
        standard: '500 PLN',
        premium: '700 PLN',
      },
      image: 'https://images.pexels.com/photos/1716398/pexels-photo-1716398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 7,
      name: 'Johnny Martyniuk',
      category: 'musician',
      instrument: 'guitar',
      genre: 'disco-polo',
      email: 'johnny@martyniuk.com',
      rating: '5.0',
      featured: true,
      price: '50000 PLN',
      priceOption: {
        basic: '50000 PLN',
        standard: '70000 PLN',
        premium: '90000 PLN',
      },
      image: 'https://images.pexels.com/photos/1551018/pexels-photo-1551018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 8,
      name: 'Sławomir Kloc',
      category: 'musician',
      instrument: 'piano',
      genre: 'jazz',
      email: 'slawomir@kloc.com',
      rating: '3.5',
      featured: true,
      price: '250 PLN',
      priceOption: {
        basic: '250 PLN',
        standard: '350 PLN',
        premium: '450 PLN',
      },
      image: 'https://images.pexels.com/photos/743728/pexels-photo-743728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 9,
      name: 'Arkadiusz Trąba',
      category: 'musician',
      instrument: 'saxophone',
      genre: 'funk',
      email: 'arkadiusz@traba.com',
      rating: '4.5',
      featured: false,
      price: '350 PLN',
      priceOption: {
        basic: '350 PLN',
        standard: '550 PLN',
        premium: '650 PLN',
      },
      image: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
    {
      id: 10,
      name: 'Dżesika Grapelli',
      category: 'musician',
      instrument: 'violin',
      genre: 'classical',
      email: 'jessica@grapelli.com',
      rating: '4.5',
      featured: false,
      price: '550 PLN',
      priceOption: {
        basic: '550 PLN',
        standard: '750 PLN',
        premium: '950 PLN',
      },
      image: 'https://images.pexels.com/photos/1384867/pexels-photo-1384867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Donec dictum, massa vitae ultrices mollis, ex orci scelerisque eros, vitae ultricies arcu purus nec dui. Nam ut risus sit amet ante iaculis dapibus. Nunc mattis, mi sit amet mollis accumsan, lacus purus mollis orci, et rhoncus purus neque vitae tellus. Sed vitae dui id metus viverra posuere. Nulla suscipit sollicitudin vestibulum. Sed ac ante commodo libero sollicitudin venenatis lacinia aliquam elit. Fusce et sodales tortor, quis pellentesque lorem. Etiam sit amet tincidunt orci. Duis facilisis sem a neque luctus, a maximus magna imperdiet. Donec pretium quis diam vel accumsan. In volutpat tincidunt fermentum. Donec arcu eros, congue et eros vitae, hendrerit ornare nisl. Vestibulum pharetra justo non placerat sollicitudin. Aliquam vel dui elit. Aenean et nibh ac eros lobortis maximus. Curabitur egestas in est a commodo. Nunc mattis dapibus venenatis. Donec dapibus orci in nisl tristique aliquam. Praesent egestas imperdiet mattis. Nullam elementum a nibh vitae bibendum. Vivamus dapibus lectus ut est ultrices, vitae laoreet nisi venenatis. Aliquam in pulvinar massa. Nullam vel vulputate orci, at finibus turpis. Suspendisse tincidunt congue lorem dapibus ornare. Phasellus laoreet vel mauris at tempus. Proin vitae semper enim. Nam eget suscipit tellus, a bibendum est.',
    },
  ],
  navCategories: [
    // { id: 'home', name: 'Home', link: '/' },
    { id: 'professionals', name: 'All Pros', link: '/professionals' },
    { id: 'singers', name: 'Singers', link: '/professionals/singers' },
    { id: 'guitarists', name: 'Guitarists', link: '/professionals/guitarists' },
    { id: 'djs', name: 'DJs', link: '/professionals/djs' },
    { id: 'bass players', name: 'Bass Players', link: '/professionals/bass-players' },
    { id: 'saxophonists', name: 'Saxophonists', link: '/professionals/saxophonists' },
    { id: 'drummers', name: 'DJs', link: '/professionals/djs' },
    { id: 'piano players', name: 'Piano Players', link: '/professionals/piano-players' },
    { id: 'violin players', name: 'Violin Players', link: '/professionals/violin-players' },
    // { id: 'order', name: 'Order', link: '/order' },
    // { id: 'contact', name: 'Contact', link: '/contact' },
  ],
  instruments: [
    {
      id: '100',
      url:
        'https://images.pexels.com/photos/675960/mic-music-sound-singer-675960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Singers',
      width: '32.5%',
    },
    {
      id: '101',
      url:
        'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Guitarists',
      width: '32.5%',
    },
    {
      id: '102',
      url:
        'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Bass Players',
      width: '32.5%',
    },
    {
      id: '103',
      url:
        'https://images.pexels.com/photos/730656/pexels-photo-730656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Drummers',
      width: '32.5%',
    },
    {
      id: '104',
      url:
        'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Piano Players',
      width: '32.5%',
    },
    {
      id: '105',
      url:
        'https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Violin Players',
      width: '32.5%',
    },
    {
      id: '106',
      url:
        'https://images.pexels.com/photos/462510/pexels-photo-462510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Cellists',
      width: '32.5%',
    },
    {
      id: '107',
      url:
        'https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Saxophonists',
      width: '32.5%',
    },
    {
      id: '108',
      url:
        'https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'DJs',
      width: '32.5%',
    },
  ],
};
