import { Box } from "@chakra-ui/react";
import React from "react";

import "../style.scss";
import URLs from "./components/Urls";
import Emails from "./components/Emails";
import Trackers from "./components/Trackers";
import ReconnaissanceStrings from "./components/ReconnaissanceStrings";

const Reconnaissance = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div className="table-section">
        <URLs />
      </div>
      <div className="table-section">
        <Emails />
      </div>
      <div className="table-section">
        <Trackers />
      </div>
      <div className="table-section">
        <ReconnaissanceStrings />
      </div>
    </Box>
  );
};
export default Reconnaissance;
