import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import MobSFLogo from "assets/img/mobsf_icon.png";
import { VSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column" style={{ background: "#000" }}>
      {/* <Flex direction="row" align="center">
        <img src={MobSFLogo} />
        <VSeparator />
        MobSF
      </Flex>
      <HSeparator mb="20px" /> */}
    </Flex>
  );
}

export default SidebarBrand;
