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
import PlayStoreLogo from "assets/img/icons/play-store.svg";

// CSS
import "./style.scss";

const PlaystoreInformationTable = () => {
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
          src={PlayStoreLogo}
          className="heading-logo heading-logo-svg"
          alt="playstore_logo"
        />
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Playstore Information
        </Text>
      </Flex>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table variant="simple" className="infoTable">
          <Tbody>
            <Tr>
              <Td>Title</Td>
              <Td>eHauling</Td>
            </Tr>
            <Tr>
              <Td>Score</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>Installs</Td>
              <Td>100+</Td>
            </Tr>
            <Tr>
              <Td>Price</Td>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Td>category</Td>
              <Td>Business</Td>
            </Tr>
            <Tr>
              <Td>Playstore URL</Td>
              <Td>
                <a href="https://play.google.com/store/apps/details?id=com.aramco.ehauling&hl=en&gl=us">
                  com.aramco.ehauling
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>Release Date</Td>
              <Td>June 16, 2022</Td>
            </Tr>
            <Tr>
              <Td>Privacy Policy</Td>
              <Td>
                {" "}
                <a href="https://css.sapublichosting.com/privacy/eHauling_App_Privacy_Notice.htm">
                  Privacy link
                </a>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PlaystoreInformationTable;
