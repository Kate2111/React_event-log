import { useState } from 'react';
import CardItem from './CardItem';
import { Paginator } from 'primereact/paginator';
import { useSelector } from 'react-redux';
import { searchState } from '@/store/slice/searchSlice';

const CardList = () => {
  const { searchResults } = useSelector(searchState);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-content-around align-items-center m-4">
        {searchResults.slice(first, first + rows).map((user) => (
          <CardItem key={user.id} info={user} />
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
