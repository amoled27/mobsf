import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Findings = ({ cellValue, color }) => {
  const hasKeyword = (value, keyword) => {
    value = value.toLowerCase();
    keyword = keyword.toLowerCase();
    return value.indexOf(keyword) !== -1;
  };

  const getBgColor = () => {
    if (cellValue === "Compiler") {
      return "#17a2b8";
    } else if (hasKeyword(cellValue, "anti")) {
      return "#ffbc0e";
    } else {
      return "#c4c4c4";
    }
  };

  const textStyle = {
    borderRadius: "6px",
    padding: "2px 8px",
  };

  const bgColor = getBgColor();

  return (
    <Flex align="center">
      <div style={{ ...textStyle, background: bgColor }}>
        <Text color={color} fontSize="sm" fontWeight="700">
          {cellValue}
        </Text>
      </div>
    </Flex>
  );
};

export default Findings;
