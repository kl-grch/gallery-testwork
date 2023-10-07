import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useGallery() {
  const { data, error, isLoading } = useSWR(`/api/gallery.json`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
