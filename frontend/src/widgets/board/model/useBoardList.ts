import { getPostList } from '@/entities/post';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useBoardList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['boardLIst', currentPage],
    queryFn: () => getPostList(currentPage),
  });

  return {
    boards: data?.content ?? [],
    totalPages: data?.totalPages ?? 1,
    first: data?.first ?? true,
    last: data?.last ?? true,
    currentPage,
    setCurrentPage,
    isLoading,
    isError,
  };
};
