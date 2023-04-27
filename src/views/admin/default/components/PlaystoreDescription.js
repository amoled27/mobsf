import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card";

// Icons
import PlayStoreLogo from "assets/img/icons/play-store.svg";

// CSS
import "./style.scss";

const PlaystoreDescription = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" align="center">
        <img
          src={PlayStoreLogo}
          className="heading-logo heading-logo-svg"
          alt="playstore_logo"
        />
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Playstore Description
        </Text>
      </Flex>
      <Flex className="ps-description">
        <p>
          The eHauling system streamlines the truck delivery of hydrocarbon
          refined products across the Saudi Aramco distribution operations
          network, including more than 200 trucking routes for a network of more
          than 30 locations. Bulk plants, air fueling operations, and gas plants
          are all part of the distribution network. Using the GPS position
          monitoring of the mobile device, the mobile application will improve
          and optimize the tracking and processing of stock transfer movements
          by trucks, through hauling service providers.
        </p>
      </Flex>
    </Card>
  );
};

export default PlaystoreDescription;
