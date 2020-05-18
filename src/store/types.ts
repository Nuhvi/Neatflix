export interface RootState {
  isLoading: Boolean;
  hasCachedData: Boolean;
  tv?: TVState;
  movies?: MovieState;
  trending?: TrendingState;
  featured?: FeaturedState;
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

export interface GenericItem {
  id: number;
  mediaType: string;
  isLiked?: boolean;
  isWatched?: boolean;
  isListed?: boolean;
}

export interface TrendingState {
  list: GenericItem[];
  isLoading: boolean;
}

export interface FeaturedState {
  listMovies: [number];
  listTV: [number];
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
