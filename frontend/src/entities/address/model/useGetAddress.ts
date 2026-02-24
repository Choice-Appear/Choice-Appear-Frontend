import { useQuery } from '@tanstack/react-query';
import { addressApi } from '../api/addressApi';

export const useGetAddress = (addressId: number) => {
  return useQuery({
    queryKey: ['address', addressId],
    queryFn: () => addressApi.getAddress(addressId),
    enabled: !!addressId,
  });
};
