import { Box } from "@chakra-ui/react";
import React from "react";

import ComponentFiles from "./components/Files";

import "../style.scss";
import ComponentActivities from "./components/Activities";
import ComponentServices from "./components/Services";
import ComponentRecievers from "./components/Recievers";
import ComponentProviders from "./components/Providers";
import ComponentLibraries from "./components/Libraries";

const ReportComponents = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div className="table-section">
        <ComponentActivities />
      </div>
      <div className="table-section">
        <ComponentServices />
      </div>
      <div className="table-section">
        <ComponentRecievers />
      </div>
      <div className="table-section">
        <ComponentProviders />
      </div>
      <div className="table-section">
        <ComponentLibraries />
      </div>
      <div className="table-section">
        <ComponentFiles />
      </div>
    </Box>
  );
};
export default ReportComponents;
