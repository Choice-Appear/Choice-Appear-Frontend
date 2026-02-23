import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addressApi } from '../api/addressApi';

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ids: number[]) => addressApi.deleteAddress(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addressList'] });
    },
  });
};
