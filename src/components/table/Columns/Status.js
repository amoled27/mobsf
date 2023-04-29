import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";

const Status = ({ cellValue, textColor }) => {
  return (
            <Flex align="center">
            <Icon
              w="24px"
              h="24px"
              me="5px"
              color={
                cellValue=== "signature"
                  ? "green.500"
                  : cellValue=== "dangerous"
                  ? "red.500"
                  : cellValue=== "ok"
                  ? "green.500"
                  : cellValue=== "SignatureOrSystem"
                  ? "orange.500"
                  : cellValue=== "normal"
                  ? "cyan.500"
                  : null
              }
              as={
                cellValue=== "signature"
                  ? MdCheckCircle
                  : cellValue=== "normal"
                  ? MdCheckCircle
                  : cellValue=== "ok"
                  ? MdCheckCircle
                  : cellValue=== "dangerous"
                  ? MdCancel
                  : cellValue=== "SignatureOrSystem"
                  ? MdOutlineError
                  : null
              }
            />
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {cellValue}
            </Text>
          </Flex>
  );
};

export default Status;
