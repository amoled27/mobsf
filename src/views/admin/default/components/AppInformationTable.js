import React from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import "./style.scss";

const AppInformationTable = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          App Information
        </Text>
      </Flex>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table variant="simple"  className="infoTable">
          <Tbody>
            <Tr>
              <Td>App Name</Td>
              <Td>eHauling</Td>
            </Tr>
            <Tr>
              <Td>Package Name</Td>
              <Td> com.aramco.ehauling</Td>
            </Tr>
            <Tr>
              <Td>Main Activity</Td>
              <Td>com.aramco.ehauling.MainActivity</Td>
            </Tr>
            <Tr>
              <Td>Target SDK</Td>
              <Td>32</Td>
            </Tr>
            <Tr>
              <Td>Min SDK</Td>
              <Td>21</Td>
            </Tr>
            <Tr>
              <Td>Android Version Name</Td>
              <Td>1.0.3</Td>
            </Tr>
            <Tr>
              <Td>Android Version Code</Td>
              <Td>3</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default AppInformationTable;
