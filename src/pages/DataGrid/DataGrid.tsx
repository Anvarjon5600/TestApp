import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import { useGetUsersQuery } from '../../store/services/usersApi';
import { useState, useEffect } from 'react';
import { UsersType } from '../../store/services/type';

const columns = [
  { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
  { name: 'email', header: 'Email', maxWidth: 500, defaultFlex: 1 },
  { name: 'score', header: 'Score', maxWidth: 500, defaultFlex: 1 },
];

const gridStyle = {
  minHeight: 400,
};

function DataGrid() {
  const { data: usersData, isLoading } = useGetUsersQuery('');
  const [dataSource, setDataSource] = useState<UsersType[] | undefined>(undefined);

  useEffect(() => {
    if (!isLoading) {
      setDataSource(usersData);
    }
  }, [isLoading, usersData]);

  return (
    <div>
      <ReactDataGrid
        className='data-grid'
        idProperty='id'
        columns={columns}
        dataSource={dataSource ? dataSource : []}
        style={gridStyle}
      />
    </div>
  );
}

export default DataGrid;