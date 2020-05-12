export interface RootState {
  config: ConfigState;
  tv: TVState;
  movies: MovieState;
  trending: TrendingState;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ConfigState {
  staticCategories: [string];
  isLoading: boolean;
  base: {};
  genres: {};
}

export interface TrendingItem {
  id: number;
  mediaType: string;
}

export interface TrendingState {
  list: [TrendingItem];
  isLoading: boolean;
}

export interface TVState {
  byId: {
    [key: number]: {
      id: number;
    };
  };
}

export interface MovieState {
  byId: {
    [key: number]: {
      id: number;
    };
  };
}
