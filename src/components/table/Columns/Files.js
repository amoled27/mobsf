import { Text } from "@chakra-ui/react";
import React from "react";

const Files = ({ cellValue, textColor, prefix }) => {
  return (
    <>
      {cellValue.map((file) => {
        return (
          <Text color={textColor} fontSize="sm" fontWeight="400" key={file}>
            {prefix ? (
              <a target="_blank" href={`${prefix}${file}`}>
                {file}
              </a>
            ) : (
              file
            )}
          </Text>
        );
      })}
    </>
  );
};

export default Files;
