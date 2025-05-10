export interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
  color: {
    btn: string;
    btnHover: string;
  };
  slug: string;
  genre: string[];
  directors: string[];
  writers: string[];
  actors: string[];
  tmdbRating: number;
  pgRating: string;
  watchTime: string;
  availableOn: {
    platform: string;
    link: string;
    color: string;
    logo: string;
  }[];
}
