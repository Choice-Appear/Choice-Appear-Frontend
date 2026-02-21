import { useQuery } from '@tanstack/react-query';
import { addressApi } from '../api/addressApi';

export const useAddressList = () => {
  return useQuery({
    queryKey: ['addressList'],
    queryFn: addressApi.getAddressList,
  });
};
