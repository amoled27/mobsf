import { Box } from "@chakra-ui/react";
import React from "react";

import NetworkSecurity from "./components/NetworkSecurity";
import CertificateAnalysis from "./components/CertificateAnalysis";
import ManifestAnalysis from "./components/ManifestAnalysis";

import "./style.scss";
import CodeAnalysis from "./components/CodeAnalysis";

const SecurityAnalysis = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div className="table-section">
        <NetworkSecurity />
      </div>
      <div className="table-section">
        <CertificateAnalysis />
      </div>
      <div className="table-section">
        <ManifestAnalysis />
      </div>
      <div className="table-section">
        <CodeAnalysis />
      </div>
    </Box>
  );
};
export default SecurityAnalysis;
