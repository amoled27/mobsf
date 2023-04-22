import { Box } from "@chakra-ui/react";
import React from "react";

import NetworkSecurity from "./components/network-security/NetworkSecurity";
import CertificateAnalysis from "./components/certificate-analysis/CertificateAnalysis";

import "./style.scss";

const SecurityAnalysis = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div className="table-section">
        <NetworkSecurity />
      </div>
      <div className="table-section">
        <CertificateAnalysis />
      </div>
    </Box>
  );
};
export default SecurityAnalysis;
