import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Table from './Table';
import CardList from './CardList';

const tab3HeaderTemplate = () => {
  return (
    <>
      <InputText placeholder="search" className="px-2" />
      <Button type="button" label="Click" />
    </>
  );
};

const Tabs = () => {
  return (
    <TabView>
      <TabPanel header="Таблица">
        <Table />
      </TabPanel>
      <TabPanel header="Карточки">
        <CardList />
      </TabPanel>
      <TabPanel
        headerTemplate={tab3HeaderTemplate}
        headerClassName="absolute right-0 flex align-items-center gap-2"></TabPanel>
    </TabView>
  );
};

export default Tabs;
