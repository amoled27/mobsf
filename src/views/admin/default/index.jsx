/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  MdSettings,
  MdLanguage,
  MdCellTower,
  MdInstallMobile,
} from "react-icons/md";

// Custom components
import AppScore from "views/admin/default/components/AppScore";
import FileInformationTable from "./components/FileInformationTable";
import AppInformationTable from "./components/AppInformationTable";
import PlaystoreInformationTable from "./components/PlaystoreInformationTable";
import PlaystoreDescription from "./components/PlaystoreDescription";
import DeveloperInformationTable from "./components/DeveloperInformationTable";
import InfoCard from "./components/InfoCard";
import DecompiledCode from "./components/DecompiledCode";
import ScanOptions from "./components/ScanOptions";

export default function UserReports() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="20px">
        <AppScore />
        <PlaystoreInformationTable />
        <DeveloperInformationTable />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <FileInformationTable />
        <AppInformationTable />
        <SimpleGrid gap="20px">
          <PlaystoreDescription />
        </SimpleGrid>
        <DecompiledCode />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 4 }}
        gap="20px"
        mb="20px"
      >
        <InfoCard
          text="Activities"
          count={4}
          exportedCount={1}
          color="#00a4bb"
          icon={MdLanguage}
        />
        <InfoCard
          text="Services"
          count={15}
          exportedCount={6}
          color="#00b84c"
          icon={MdSettings}
        />
        <InfoCard
          text="Recievers"
          count={13}
          exportedCount={10}
          color="#ffca00"
          icon={MdInstallMobile}
        />
        <InfoCard
          text="Providers"
          count={3}
          exportedCount={2}
          color="#f3002e"
          icon={MdCellTower}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <ScanOptions />
      </SimpleGrid>
    </Box>
  );
}
