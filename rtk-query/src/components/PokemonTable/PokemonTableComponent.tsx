import { Table, Tbody, Td, Th, Thead, Tr, Skeleton } from "@chakra-ui/react";
import { useTable } from "react-table";
import React, { FC } from "react";

interface PokemonTableComponentProps {
  data?: any[];
  isLoading: boolean;
}

export const PokemonTableComponent: FC<PokemonTableComponentProps> = ({
  data = [],
  isLoading,
}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  ) as any;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {isLoading &&
          Array.from({ length: 20 }, (v, i) => i).map((row) => (
            <Tr>
              <Td>
                <Skeleton height="20px" />
              </Td>
              <Td>
                <Skeleton height="20px" />
              </Td>
            </Tr>
          ))}
        {!isLoading &&
          rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};
