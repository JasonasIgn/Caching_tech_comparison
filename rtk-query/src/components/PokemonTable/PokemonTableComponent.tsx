import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Skeleton,
  Image,
} from "@chakra-ui/react";
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
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "",
        accessor: "icon",
        Cell: ({ value }: { value: string }) => (
          <Image
            src={value}
            alt="Pokemon Image"
            minWidth={10}
          />
        ),
        width: "40px",
        minWidth: "40px",
      },
      {
        Header: "Name",
        accessor: "name",
        width: "100%",
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
                    <Td
                      {...cell.getCellProps()}
                      sx={{
                        width: cell.column.width,
                        minWidth: cell.column.minWidth,
                      }}
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};
