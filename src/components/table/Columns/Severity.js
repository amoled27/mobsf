import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  MdCancel,
  MdOutlineError,
  MdInfo,
  MdStopCircle,
} from "react-icons/md";

const Severity = ({ cellValue, textColor }) => {
  const getCellColor = () => {
    switch (cellValue) {
      case "high":
        return "red.500";
      case "warning":
        return "orange.500";
      case "info":
        return "cyan.500";
      default:
        return "gray.500";
    }
  };

  const getCellIcon = () => {
    switch (cellValue) {
      case "high":
        return MdCancel;
      case "warning":
        return MdOutlineError;
      case "info":
        return MdInfo;
      default:
        return MdStopCircle;
    }
  };

  return (
    <Flex align="center">
      <Icon
        w="24px"
        h="24px"
        me="5px"
        color={getCellColor()}
        as={getCellIcon()}
      />
      <Text color={textColor} fontSize="sm" fontWeight="700">
        {cellValue}
      </Text>
    </Flex>
  );
};

export default Severity;
