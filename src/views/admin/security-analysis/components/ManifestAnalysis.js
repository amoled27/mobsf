import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "SR_NO",
    accessor: "no",
  },
  {
    Header: "DESCRIPTION",
    accessor: "issue"
  },
  {
    Header: "SEVERITY",
    accessor: "severity",
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
  },
  {
    Header: "OPTIONS",
    accessor: "options",
  },
];

const tableData = [
  {
    no: 1,
    issue: "App can be installed on a vulnerable Android version [minSdk=21]",
    severity: "warning",
    description:
      "	Application is signed with v1 signature scheme, making it vulnerable to Janus vulnerability on Android 5.0-8.0, if signed only with v1 signature scheme. Applications running on Android 5.0-7.0 signed with v1, and v2/v3 scheme is also vulnerable.",
    options: true
  },
  {
    no: 2,
    issue: "App can be installed on a vulnerable Android version [minSdk=21]",
    severity: "info",
    description:
      "	Application is signed with v1 signature scheme, making it vulnerable to Janus vulnerability on Android 5.0-8.0, if signed only with v1 signature scheme. Applications running on Android 5.0-7.0 signed with v1, and v2/v3 scheme is also vulnerable.",
    options: true
  },
  
  {
    no: 3,
    issue: "App can be installed on a vulnerable Android version [minSdk=21]",
    severity: "warning",
    description:
      "	Application is signed with v1 signature scheme, making it vulnerable to Janus vulnerability on Android 5.0-8.0, if signed only with v1 signature scheme. Applications running on Android 5.0-7.0 signed with v1, and v2/v3 scheme is also vulnerable.",
    options: true
  },
];

const ManifestAnalysis = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="Manifest Analysis"
    />
  );
};

export default ManifestAnalysis;
