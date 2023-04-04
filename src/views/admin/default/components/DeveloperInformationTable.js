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

const DeveloperInformationTable = () => {
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
          Developer Information
        </Text>
      </Flex>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table variant="simple" className="infoTable">
          <Tbody>
          <Tr>
              <Td>Developer</Td>
              <Td>Aramco Services Company</Td>
            </Tr>
            <Tr>
              <Td>Developer Id</Td>
              <Td>Aramco+Services+Company</Td>
            </Tr>
            <Tr>
              <Td>Developer Address</Td>
              <Td>None</Td>
            </Tr>
            <Tr>
              <Td>Developer Website</Td>
              <Td>None</Td>
            </Tr>
            <Tr>
              <Td>Developer Email</Td>
              <Td>kh.dang@aramcoservices.com</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DeveloperInformationTable;
