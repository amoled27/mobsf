import { Box } from "@chakra-ui/react";
import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "ACTIVITY",
    accessor: "activity",
  },
  {
    Header: "INTENT",
    accessor: "intent",
  },
];
const apiData = [
  {
    activity: "com.google.android.gms.tagmanager.TagManagerPreviewActivity",
    intent: {
      schemes: ["tagmanager.c.com.myadrenalin.hrms54://"],
    }
  },
  {
    activity: "com.myadrenalin.axisfin.AesActivity",
    intent: {
      schemes: ["http://"],
      hosts: ["adrenalin"]
    }
  }
];
const BrowsableActivities = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <CommonTable columnsData={columnsData} tableData={apiData} tableName="Activities"/>
    </Box>
  );
};

export default BrowsableActivities;
