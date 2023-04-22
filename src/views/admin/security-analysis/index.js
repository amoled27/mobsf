import { Box } from "@chakra-ui/react";
import React from "react";

import NetworkSecurity from "./components/network-security/NetworkSecurity";


const SecurityAnalysis = () => {
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <NetworkSecurity />
      </Box>
    );
  };
export default SecurityAnalysis;