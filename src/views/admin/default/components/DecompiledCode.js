import { Flex, Text } from "@chakra-ui/react";
import React from "react";

// Custom components
import Card from "components/card/Card";
import FileCard from "./FileCard";

// Icons
import CodeIcon from "assets/img/icons/code.png";

// CSS
import "./style.scss";

const DecompiledCode = () => {
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" align="center">
        <img
          src={CodeIcon}
          className="heading-logo heading-logo-svg"
          alt="app_info_icon"
        />
        <Text fontSize="22px" fontWeight="700" lineHeight="100%">
          Decompiled Code
        </Text>
      </Flex>
      <Flex>
        <FileCard icon="xmlFile" fileName="AndroidManifest.xml" type="view" />
        <FileCard icon="source" fileName="Source" type="view" />
        <FileCard icon="smali" fileName="Smali" type="view" />
      </Flex>
      <Flex>
        <FileCard icon="java" fileName="Java code" type="view" />
        <FileCard icon="smaliCode" fileName="Smali Code" type="view" />
        <FileCard icon="apk" fileName="APK" type="view" />
      </Flex>
    </Card>
  );
};

export default DecompiledCode;
