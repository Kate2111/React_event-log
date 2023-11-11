import { TabView, TabPanel } from 'primereact/tabview';
import Table from './Table';
import CardList from './CardList';
import { useSearchArray } from '@/hooks/useSearchArray';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebaunse';
import SearchInput from './SearchInput';

const Tabs = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 600);

  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useSearchArray(debouncedValue);

  const createInputSearch = () => <SearchInput onSearchHandler={onSearchHandler} value={value} />;

  return (
    <TabView>
      <TabPanel header="Таблица">
        <Table />
      </TabPanel>
      <TabPanel header="Карточки">
        <CardList />
      </TabPanel>
      <TabPanel
        headerTemplate={createInputSearch}
        headerClassName="absolute right-0 flex align-items-center gap-2"></TabPanel>
    </TabView>
  );
};

export default Tabs;
