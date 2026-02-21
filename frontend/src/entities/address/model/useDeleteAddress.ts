import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addressApi } from '../api/addressApi';

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => addressApi.deleteAddress(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addressList'] });
    },
  });
};
