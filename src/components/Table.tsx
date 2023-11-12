import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { columnsTable } from '@/constant/constant';
import { searchState, toggleSelectedUser } from '@/store/slice/searchSlice';

export default function Table() {
  const { searchResults } = useSelector(searchState);
  const dispatch = useDispatch();

  const handlerSelect = (e) => {
    const selectedId = e.data.id; // Получаем id выбранной строки
    dispatch(toggleSelectedUser(selectedId));
  };

  return (
    <div className="card">
      <DataTable
        value={searchResults}
        paginator
        showGridlines
        rows={7}
        dataKey="id"
        //selectionMode="multiple"
        //selection={searchResults}
        //onSelectionChange={(e) => handlerSelect(e)}
        className="selected"
        emptyMessage="No customers found.">
        {columnsTable.map((col) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            className={searchResults.map((user) => (user.selected ? 'selected' : '')).join(' ')}
            onClick={(e) => handlerSelect(e)}
          />
        ))}
      </DataTable>
    </div>
  );
}
