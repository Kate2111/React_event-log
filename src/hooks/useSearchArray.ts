import { setSearchResults } from '@/store/slice/searchSlice';
import { userState } from '@/store/slice/userSlice';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useSearchArray = (searchValue: string) => {
  const dispatch = useAppDispatch();
  const { userArray } = useSelector(userState);

  useEffect(() => {
    const searchArray = userArray.filter((user) =>
      user.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
    );

    dispatch(setSearchResults(searchArray));
  }, [searchValue]);
};
