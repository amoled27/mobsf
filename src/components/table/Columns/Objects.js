import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Objects = ({ cellValue, textColor }) => {
  return (
    <>
      {Object.keys(cellValue).map((key) => {
        return (
          <Flex>
            <Text color={textColor} fontSize="sm" fontWeight="600" style={{paddingRight: "5px"}}>
              {key}
            </Text>
            :
            {
              <Text color={textColor} fontSize="sm" fontWeight="200" style={{paddingLeft: "5px"}}> 
                {cellValue[key]}
              </Text>}
          </Flex>
        );
      })}
    </>
  );
};

export default Objects;
