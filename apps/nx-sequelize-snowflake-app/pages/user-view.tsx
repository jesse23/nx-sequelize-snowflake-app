import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  chakra,
} from '@chakra-ui/react';
import {
  TriangleDownIcon,
  TriangleUpIcon,
  CloseIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import { useEffect, useMemo, useState } from 'react';
import { User } from './types';
import { CreateDialog } from './creat-dialog';
import { deleteUser, getUsers } from './user-view.service';
import { ForecastChart } from './forecast-chart';

/*
const DUMMY_DATA: User[] = [
  {
    id: 1,
    userName: 'James Brown',
    email: 'james@gmail.com',
    zipCode: '98138',
  },
  {
    id: 2,
    userName: 'Robert Wales',
    email: 'rob@aol.com',
    zipCode: '32899',
  },
  {
    id: 3,
    userName: 'Hairy Larry',
    email: 'cd6oy@github.com',
    zipCode: '92164',
  },
  {
    zipCode: '48048'
  }
];
*/

export function UserView() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([] as User[]);
  const [activeZipCode, setActiveZipCode] = useState('');

  useEffect(() => {
    if (!loaded) {
      const load = async () => {
        setData(await getUsers());
        setLoaded(true);
      };
      load();
    }
  }, [loaded]);

  const columns = useMemo(
    () => [
      {
        Header: 'User Name',
        accessor: 'userName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
        Cell: ({ value }) => (
          <>
            {value}
            <IconButton
              aria-label="Weather"
              variant="link"
              icon={<SunIcon />}
              onClick={() =>
                setActiveZipCode((curr) => (curr !== value ? value : ''))
              }
            />
          </>
        ),
      },
      {
        Header: '',
        accessor: 'id',
        Cell: ({ value }) => (
          <IconButton
            aria-label="Remove"
            variant="link"
            icon={<CloseIcon />}
            onClick={async () => {
              await deleteUser(value);
              setLoaded(false);
              setActiveZipCode('');
            }}
          />
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, idx) => (
            <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <Th
                  key={idx}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render('Header')}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <Tr key={idx} {...row.getRowProps()}>
                {row.cells.map((cell, idx) => (
                  <Td
                    key={idx}
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <CreateDialog
        onSubmit={() => {
          setLoaded(false);
          setActiveZipCode('');
        }}
      />
      {activeZipCode && (
        <div className="table-content">
          <ForecastChart zipCode={activeZipCode} />
        </div>
      )}
    </>
  );
}
