import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

const columns = [
  { field: 'data', header: 'Дата' },
  { field: 'importan', header: 'Важность' },
  { field: 'equipment', header: 'Оборудование' },
  { field: 'description', header: 'Сообщение' },
  { field: 'name', header: 'Ответственный' },
];

export default function Table() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<User[] | null>(null);

  useEffect(() => {
    UsersService.getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        showGridlines
        rows={7}
        dataKey="id"
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        selection={selectedProducts!}
        selectionMode="multiple"
        emptyMessage="No customers found.">
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        {columns.map((col) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
