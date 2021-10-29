import { useHistory } from 'react-router-dom';

export default function useQuery() {
  const {
    replace,
    location: { search: query, pathname },
  } = useHistory();
  const currentQuery = new URLSearchParams(query);

  const addQuery = (key: string, value: string) => {
    const searchParams = new URLSearchParams(query);
    searchParams.set(key, value);
    replace({ pathname, search: searchParams.toString() });
  };

  const removeQuery = (key: string) => {
    const searchParams = new URLSearchParams(query);
    searchParams.delete(key);
    replace({ pathname, search: searchParams.toString() });
  };

  return { currentQuery, addQuery, removeQuery };
}
