import { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Paginator } from 'primereact/paginator';
import { UsersService } from '@/API/UsersService';

interface User {
  id: string;
  data: string;
  name: string;
  description: string;
  equipment: string;
  image: string;
  importan: string;
}

const CardList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);

  useEffect(() => {
    UsersService.getUsers().then((data) => setUsers(data));
  }, []);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <>
      <div className="grid">
        {users.slice(first, first + rows).map((user) => (
          <div key={user.id} className="col-4">
            <div className="text-center p-3 border-round-sm bg-primary font-bold">
              <CardItem
                data={user.data}
                importan={user.importan}
                equipment={user.equipment}
                description={user.description}
                name={user.name}
              />
            </div>
          </div>
        ))}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={users.length}
        rowsPerPageOptions={[3, 6, 9]}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default CardList;
