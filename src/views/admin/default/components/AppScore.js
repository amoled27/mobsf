// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import androidPng from "assets/img/dashboards/android.png";
import warning from "assets/img/icons/warning.svg";
import secure from "assets/img/icons/secure.svg";

import { VSeparator } from "components/separator/Separator";
import React from "react";
import "./style.scss";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
      <Flex direction="column" justifyContent="space-between" className="card-flex">

      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        className="app-heading"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          App Scores
        </Text>
      </Flex>
        <div className="centerize app-image-container">
          <img src={androidPng} className="app-image" />
        </div>
        <Card
          bg={cardColor}
          flexDirection="row"
          boxShadow={cardShadow}
          className="center-card"
          w="100%"
          p="15px"
          px="20px"
          mt="15px"
          mx="auto"
        >
          <Flex direction="column" py="5px">
            <Flex align="center">
              <Text
                color="secondaryGray.600"
                fontWeight="700"
                mb="5px"
                className="app-score-text"
              >
                Security Score
              </Text>
            </Flex>
            <Flex>
              <img className="appscore-warning" src={warning} />
              <Text fontSize="xl" color={textColor} fontWeight="700">
                59/100
              </Text>
            </Flex>
          </Flex>
          <VSeparator mx={{ base: "30px", xl: "30px", "2xl": "60px" }} />
          <Flex direction="column" py="5px" me="10px">
            <Flex align="center">
              <Text
                className="app-score-text"
                color="secondaryGray.600"
                fontWeight="700"
                mb="5px"
              >
                Trackers
              </Text>
            </Flex>
            <Flex>
              <img className="appscore-trackers-warning" src={secure} />
              <Text fontSize="xl" color={textColor} fontWeight="700">
                0/148
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
  );
}
