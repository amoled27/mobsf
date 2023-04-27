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

// Custom components
import Card from "components/card/Card";

// Icons
import DeveloperLogo from "assets/img/icons/developer-icon.png";

// CSS
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
      <Flex px="25px" align="center">
        <img
          src={DeveloperLogo}
          className="heading-logo heading-logo-png"
          alt="developer_logo"
        />
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
