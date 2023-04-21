import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Intent = ({ cellValue, textColor }) => {
  return (
    <>
      {Object.keys(cellValue).map((key) => {
        return (
          <Flex>
            <Text color={textColor} fontSize="sm" fontWeight="600" style={{paddingRight: "5px"}}>
              {key}
            </Text>
            :
            {cellValue[key].map((data) => (
              <Text color={textColor} fontSize="sm" fontWeight="200" style={{paddingLeft: "5px"}}> 
                {data}
              </Text>
            ))}
          </Flex>
        );
      })}
    </>
  );
};

export default Intent;
