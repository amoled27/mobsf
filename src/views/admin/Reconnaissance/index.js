import { Box } from "@chakra-ui/react";
import React from "react";

import "../style.scss";
import URLs from "./components/Urls";

const Reconnaissance = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div className="table-section">
        <URLs />
      </div>
    </Box>
  );
};
export default Reconnaissance;
