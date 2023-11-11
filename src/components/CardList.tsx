import { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Paginator } from 'primereact/paginator';
import { useSelector } from 'react-redux';
import { searchState } from '@/store/slice/searchSlice';
import { checkboxState } from '@/store/slice/checkboxSlice';
import { User } from '@/types/types';

interface SelectedUser extends User {
  selected: boolean;
}

const CardList = () => {
  const { searchResults } = useSelector(searchState);
  const { selectedUsers } = useSelector(checkboxState);
  const [searchAndSelecredUsers, setSearchAndSelecredUsers] = useState<SelectedUser[]>([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  useEffect(() => {
    console.log(selectedUsers);
    const newArray = searchResults?.map((user) => ({
      ...user,
      selected: selectedUsers?.some((selectedUser) => selectedUser.id === user.id) || false,
    }));

    setSearchAndSelecredUsers(newArray);
  }, [searchResults, selectedUsers]);

  return (
    <>
      <div className="grid">
        {searchAndSelecredUsers.slice(first, first + rows).map((user) => (
          <div key={user.id} className="col-4">
            <div className="text-center p-3 border-round-sm bg-primary font-bold">
              <CardItem info={user} selected={user.selected} />
            </div>
          </div>
        ))}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={searchResults.length}
        rowsPerPageOptions={[3, 6, 9]}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CardList;
