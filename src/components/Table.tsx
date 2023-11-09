import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '@/API/ProductService';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  category?: string;
  quantity?: number;
  inventoryStatus?: string;
  rating?: number;
}

const columns = [
  { field: 'code', header: 'Дата' },
  { field: 'name', header: 'Важность' },
  { field: 'category', header: 'Оборудование' },
  { field: 'quantity', header: 'Ответственный' },
];

export default function Table() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="card">
      <DataTable
        value={products}
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
