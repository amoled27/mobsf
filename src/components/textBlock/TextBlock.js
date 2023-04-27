import React, { useState } from "react";
import Card from "components/card/Card";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const TextBlock = ({ textBlockName = "text-block", data, textLimit = 450 }) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [showMore, setShowMore] = useState(false);
  const [showMoreText, setShowMoreText] = useState("show more");

  const onShowMoreToggle = () => {
    setShowMore(!showMore);
    setShowMoreText(showMore ? "show more" : "show less");
  };

  const downloadAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([data], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${textBlockName}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {textBlockName}
        </Text>
        <Button
          variant="darkBrand"
          color="white"
          fontSize="sm"
          fontWeight="500"
          borderRadius="70px"
          px="24px"
          py="5px"
          onClick={() => downloadAsTxt()}
        >
          Download
        </Button>
      </Flex>
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text>
          {showMore ? data : data.substring(0, textLimit)}
          {data.length > textLimit ? (
            <a
              onClick={() => onShowMoreToggle()}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {showMoreText}
            </a>
          ) : null}
        </Text>
      </Flex>
    </Card>
  );
};

export default TextBlock;
