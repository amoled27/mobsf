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

// Chakra imports
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";

import {
  MdBarChart,
} from "react-icons/md";
// Custom components
import React from "react";
import AppScore from "views/admin/default/components/AppScore";
import FileInformationTable
 from "./components/FileInformationTable";
import AppInformationTable
 from "./components/AppInformationTable";
 import PlaystoreInformationTable
 from "./components/PlaystoreInformationTable";
import PlaystoreDescription from "./components/PlaystoreDescription";
import DeveloperInformationTable from "./components/DeveloperInformationTable";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3}}
        gap='20px'
        mb='20px'>
        <AppScore />
        <AppInformationTable />
        <FileInformationTable />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <PlaystoreInformationTable />
        <SimpleGrid gap='20px'>
          <PlaystoreDescription />
          <DeveloperInformationTable />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4, "2xl": 4 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Activities'
          value='4' 
        />
      </SimpleGrid>
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <AppScore />
        </SimpleGrid>
      </SimpleGrid> */}
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
    </Box>
  );
}
