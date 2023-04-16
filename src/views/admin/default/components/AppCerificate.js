import { Flex } from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";

import "./style.scss"
import FileCard from "./FileCard";
const AppCertificate = () => {
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex style={{ padding: "20px"}}>
        <FileCard icon="certificate" fileName="Signer Certificate" type="view"/>
      </Flex>
    </Card>
  );
};

export default AppCertificate;
