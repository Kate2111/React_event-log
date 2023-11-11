import { useEffect } from 'react';
import { useAppDispatch } from '@/store/store';
import { fetchUsers } from '@/store/actions/actionUsers';

export const useFetching = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    window.scrollTo(0, 0);
  }, []);
};
