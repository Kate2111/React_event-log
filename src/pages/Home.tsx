//import { useSelector } from 'react-redux';
//import { useSearchResult } from '@/hooks/useFilterArray';
//import PaginatedItems from '@/components/PaginatedItems';
//import { pizzaState } from '@/store/slice/pizzaSlice';
//import { filterState } from '@/store/slice/filterSlice';

import Tabs from '@/components/Tabs';
//import { Button } from 'primereact/button';
//import { InputText } from 'primereact/inputtext';
//import { Toast } from 'primereact/toast';
//import { useRef, useState } from 'react';

const Home = () => {
  //const { pizzaArray } = useSelector(pizzaState);
  //const { selectedSort, activeCategoryIndex, searchValue } = useSelector(filterState);

  /*   const filteredPizzaArray = useSearchResult(
    pizzaArray,
    selectedSort,
    activeCategoryIndex,
    searchValue,
  ); */

  /*  const [text, setText] = useState('Hello');
  const toast = useRef<Toast>(null);
  const onButtonClick = () => {
    if (text) {
      toast.current?.show({ severity: 'info', summary: 'success', detail: text });
    } else {
      toast.current?.show({ severity: 'info', summary: 'error', detail: 'value is requed' });
    }
  }; */

  return (
    <div className="card">
      <Tabs />
    </div>
  );
};

export default Home;

{
  /* <PaginatedItems itemsPerPage={4} filteredPizzaArray={filteredPizzaArray} /> */
}
