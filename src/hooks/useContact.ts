import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ContactType } from '../types';

const API_URL = 'http://localhost:3000/users';

export const useGetContacts = () => {
    const { isPending, error, data } = useQuery<ContactType[]>({
        queryKey: ['get-contacts'],
        queryFn: () =>
          axios(API_URL).then((res) => res.data),
      })
      return {
        isPending, error, data
      }
    
};

export const useGetOneContact = (contactId: string) => {
  const { isPending, error, data, isError } = useQuery<ContactType>({

      queryKey: ['get-one-contact',contactId],
      queryFn: () =>
        axios(`${API_URL}/${contactId}`).then((res) => res.data),
    })
    return {
      isPending, error, data,isError
    }
  
};


export const useCreateContact = () => {
  const queryClient = useQueryClient();
    const {isPending,isSuccess, isError,mutate} = useMutation({
        mutationFn: (body: Partial<ContactType>) => {
          return axios.post(API_URL, body)
        },
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["get-contacts"]})
        }
      });

      return {isPending,isSuccess, isError, mutate}
};

export const useUpdateContact = () => {
  const queryClient = useQueryClient();
    const {isPending,isSuccess, isError,mutate} = useMutation({
        mutationFn: (body: ContactType) => {
          return axios.put(`${API_URL}/${body.id}`, body)
        },
        onSuccess: (_, variables) => {
          queryClient.invalidateQueries({queryKey: ["get-contacts"]});
          queryClient.invalidateQueries({queryKey: ["get-one-contact", variables.id]})
        }
      });

      return {isPending,isSuccess, isError, mutate}
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
    const {isPending,isSuccess, isError, mutate} = useMutation({
        mutationFn: (id: string) => {
          return axios.delete(`${API_URL}/${id}`)
        },
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["get-contacts"]})
        }
      });

      return {isPending,isSuccess, isError,mutate}
};
