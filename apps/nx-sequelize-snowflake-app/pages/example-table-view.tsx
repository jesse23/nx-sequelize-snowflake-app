import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import { useMemo } from 'react'

export function ExampleTableView() {
  const data = useMemo(
    () => [
      {
        fromUnit: 'inches',
        toUnit: 'millimetres (mm)',
        factor: 25.4,
      },
      {
        fromUnit: 'feet',
        toUnit: 'centimetres (cm)',
        factor: 30.48,
      },
      {
        fromUnit: 'yards',
        toUnit: 'metres (m)',
        factor: 0.91444,
      },
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: 'To convert',
        accessor: 'fromUnit',
      },
      {
        Header: 'Into',
        accessor: 'toUnit',
      },
      {
        Header: 'Multiply by',
        accessor: 'factor',
        isNumeric: true,
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, idx) => (
          <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx ) => (
              <Th key={idx}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render('Header')}
                <chakra.span pl='4'>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label='sorted descending' />
                    ) : (
                      <TriangleUpIcon aria-label='sorted ascending' />
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
          prepareRow(row)
          return (
            <Tr key={idx} {...row.getRowProps()}>
              {row.cells.map((cell, idx) => (
                <Td key={idx} {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
