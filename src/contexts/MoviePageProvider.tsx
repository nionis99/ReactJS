import React, { createContext, useContext } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

interface MoviePageContextType {
  sortBy: string | null;
  setSortBy: (sortBy: string | null) => void;
  filter: string | null;
  setFilter: (filter: string | null) => void;
}

export const MoviePageContext = createContext<MoviePageContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function MoviePageProvider({ children }: Props) {
  const [sortBy, setSortBy] = useLocalStorage('sortBy', null);
  const [filter, setFilter] = useLocalStorage('filter', null);

  const contextValue = {
    sortBy,
    setSortBy,
    filter,
    setFilter,
  } as MoviePageContextType;

  return <MoviePageContext.Provider value={{ ...contextValue }}>{children}</MoviePageContext.Provider>;
}

export default function useMoviePageContext() {
  const context = useContext(MoviePageContext);

  if (!context) throw new Error('useMoviePageContext must be used within the MoviePageProvider');

  return context;
}
