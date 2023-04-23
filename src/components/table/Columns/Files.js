import { Text } from "@chakra-ui/react";
import React from "react";

const Files = ({ cellValue, textColor, isLink }) => {
  return (
    <>
      {cellValue.map((file) => {
        return (
          <Text color={textColor} fontSize="sm" fontWeight="400">
            {isLink ? (
              <a
                target="_blank"
                href={`https://mobsf.live/view_file/?file=${file}`}
              >
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
