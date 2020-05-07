import React, { useState, useEffect } from 'react';
import { Input, InputIcon, DataTable, DataTableColumn } from '@salesforce/design-system-react';

import Header from './components/Header';
import './App.scss';

const API_URL = 'http://trust1-acquisitions.herokuapp.com/api/status/v1/instances/status/preview';

const App = () => {
  const [{ instanceList }, setInstanceList] = useState({ instanceList: [] });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchInstances = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setInstanceList({ instanceList: data });
    };
    fetchInstances();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const columns = [
    <DataTableColumn key="key" label="Key" property="key" />,
    <DataTableColumn key="environment" label="Environment" property="environment" />,
    <DataTableColumn key="location" label="Location" property="location" />,
    <DataTableColumn key="releaseNumber" label="Release Number" property="releaseNumber" />,
    <DataTableColumn key="status" label="Status" property="status" />,
  ];
  return (
    <div className="App" data-testid="app">
      <Header userName="My Username" />
      <div className="slds-m-top_xx-large slds-p-top_xx-large">
        <main className="slds-box slds-theme_shade slds-m-around_large">
          <section className="slds-grid slds-grid_align-spread">
            <div className="slds-col"></div>
            <div className="slds-col">
              <Input
                iconLeft={
                  <InputIcon
                    assistiveText={{
                      icon: 'Search',
                    }}
                    name="search"
                    category="utility"
                  />
                }
                placeholder="Search Instance"
                onChange={handleSearchChange}
              />
            </div>
          </section>
          <section className="slds-grid slds-wrap slds-gutters slds-m-top_large">
            <DataTable
              striped
              items={instanceList.filter((item) => item.key.includes(search.toUpperCase())).slice(0, 10)}
            >
              {columns}
            </DataTable>
          </section>
        </main>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
