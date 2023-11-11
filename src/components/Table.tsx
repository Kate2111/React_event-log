import { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { columnsTable } from '@/constant/constant';
import { searchState } from '@/store/slice/searchSlice';
import { checkboxState } from '@/store/slice/checkboxSlice';
import { setSelectedUsers } from '@/store/slice/checkboxSlice';

export default function Table() {
  const { searchResults } = useSelector(searchState);
  const { selectedUsers } = useSelector(checkboxState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchResults && searchResults.length > 0 && !selectedUsers) {
      dispatch(setSelectedUsers(searchResults.map((result) => result)));
    }
  }, [dispatch, searchResults, selectedUsers]);

  return (
    <div className="card">
      <DataTable
        value={searchResults}
        paginator
        showGridlines
        rows={7}
        dataKey="id"
        onSelectionChange={(e) => {
          dispatch(setSelectedUsers(e.value));
        }}
        selection={selectedUsers!}
        selectionMode="multiple"
        emptyMessage="No customers found.">
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        {columnsTable.map((col) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
