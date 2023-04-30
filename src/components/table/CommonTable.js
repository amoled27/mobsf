import {
  Flex,
  Icon,
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
import { MdDangerous, MdInfo, MdStopCircle, MdWarning } from "react-icons/md";
import { CheckCircleIcon } from "@chakra-ui/icons";
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
import NestedTable from "./Columns/NestedTable";
import Objects from "./Columns/Objects";
import IconBox from "components/icons/IconBox";
import MiniStatistics from "components/card/MiniStatistics";

export default function APITable(props) {
  const {
    columnsData,
    tableData,
    tableName,
    prefix,
    nestedColumnsData,
    hasStatistics = false,
  } = props;

  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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

  const statuses = {
    high: 0,
    warning: 0,
    info: 0,
    secure: 0,
    supressed: 0,
  };

  if (hasStatistics)
    tableData.forEach((element) => {
      statuses[element.severity] += 1;
    });

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "high":
        return MdDangerous;
      case "warning":
        return MdWarning;
      case "info":
        return MdInfo;
      case "secure":
        return CheckCircleIcon;
      default:
        return MdStopCircle;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "red.500";
      case "warning":
        return "orange.500";
      case "info":
        return "cyan.500";
      case "secure":
        return "green.500";
      default:
        return "gray.500";
    }
  };

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
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        {hasStatistics
          ? Object.keys(statuses).map((statusKeys) => (
              <MiniStatistics
                key={statusKeys}
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={getSeverityIcon(statusKeys)}
                        color={getSeverityColor(statusKeys)}
                      />
                    }
                  />
                }
                value={statuses[statusKeys]}
                name={statusKeys}
              />
            ))
          : null}
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
                    case "TRACKER NAME":
                    case "CATEGORIES":
                    case "DEX":
                    case "DOMAIN":
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="400">
                          {cell.value}
                        </Text>
                      );
                      break;
                    case "FILES":
                      data = (
                        <File
                          cellValue={cell.value}
                          textColor={textColor}
                          prefix={prefix}
                        />
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
                    case "DETECTIONS":
                      data = (
                        <NestedTable
                          columnsData={nestedColumnsData}
                          tableData={cell.value}
                        />
                      );
                      break;
                    case "GEOLOCATION":
                      data = (
                        <Objects cellValue={cell.value} textColor={textColor} />
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
