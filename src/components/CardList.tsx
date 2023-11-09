import { ProductService } from '@/API/ProductService';
import { useEffect, useState } from 'react';
import CardItem from './CardItem';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description: string;
  image?: string;
  price?: number;
  category?: string;
  quantity?: number;
  inventoryStatus?: string;
  rating?: number;
}

const CardList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="grid">
        {products.map((product) => (
          <div className="col-4">
            <div className="text-center p-3 border-round-sm bg-primary font-bold">
              <CardItem description={product.description} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
