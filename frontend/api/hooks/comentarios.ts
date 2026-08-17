import { useQuery, useMutation } from '@tanstack/react-query'

import { getComments, postComment } from '../clients/comentarios'

export const useGetComments = () => {
  return useQuery({ queryKey: ['comments'], queryFn: getComments })
}

export const usePostComment = () => {
  return useMutation({ mutationFn: postComment })
}