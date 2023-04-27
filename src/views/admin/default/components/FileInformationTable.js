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

// Custome components
import Card from "components/card/Card";

//Icons
import FileIcon from "assets/img/icons/file-icon.svg";

// CSS
import "./style.scss";

const FileInformationTable = () => {
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
          src={FileIcon}
          className="heading-logo heading-logo-svg"
          alt="file_logo"
        />
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          File Information
        </Text>
      </Flex>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table variant="simple" className="infoTable">
          <Tbody>
            <Tr>
              <Td>File Name</Td>
              <Td>eHauling_v1.0.3.apk</Td>
            </Tr>
            <Tr>
              <Td>Size</Td>
              <Td>2.75MB</Td>
            </Tr>
            <Tr>
              <Td>MD5</Td>
              <Td>dcb80e7bf9c460f3865b6d3bfbd9c650</Td>
            </Tr>
            <Tr>
              <Td>SHA1</Td>
              <Td>96506ea9e0e97ddece7f2c91e153124e6248439f</Td>
            </Tr>
            <Tr>
              <Td>SHA256</Td>
              <Td>
                75f47e3cb8406dc2dbc5b98f4387c9ce78b7d31e4c8656dbefc202244bd89629
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default FileInformationTable;
