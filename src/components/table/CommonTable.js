import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import File from "components/table/Columns/Files";
import Status from "./Columns/Status";
import Intent from "./Columns/Intent";
import Severity from "./Columns/Severity";

export default function APITable(props) {
  const { columnsData, tableData, tableName, prefix } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 10;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {tableName}
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  switch (cell.column.Header) {
                    case "NAME":
                    case "PERMISSION":
                    case "INFO":
                    case "DESCRIPTION":
                    case "SR_NO":
                    case "SCOPE":
                    case "INDENTIFIER":
                    case "ACTIVITY":
                    case "FEATURE":
                    case "REQUIREMENT":
                    case "ISSUE":
                    case "TITLE":
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="400">
                          {cell.value}
                        </Text>
                      );
                      break;
                    case "FILES":
                      data = (
                        <File cellValue={cell.value} textColor={textColor} prefix={prefix}/>
                      );
                      break;
                    case "URL":
                    case "EMAIL":
                        data = (
                          <File cellValue={cell.value} textColor={textColor} />
                        );
                        break;
                    case "STATUS":
                      data = (
                        <Status cellValue={cell.value} textColor={textColor} />
                      );
                      break;
                    case "INTENT":
                      data = (
                        <Intent cellValue={cell.value} textColor={textColor} />
                      );
                      break;
                    case "SEVERITY":
                      data = (
                        <Severity
                          cellValue={cell.value}
                          textColor={textColor}
                        />
                      );
                      break;
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      maxH="30px !important"
                      py="8px"
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
