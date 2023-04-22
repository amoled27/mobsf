import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "SR_NO",
    accessor: "no",
  },
  {
    Header: "SCOPE",
    accessor: "scope",
  },
  {
    Header: "SEVERITY",
    accessor: "severity",
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
  },
];

const tableData = [
  {
    no: 1,
    scope: "*",
    severity: "high",
    description:
      "Base config is insecurely configured to permit clear text traffic to all domains.",
  },
  {
    no: 2,
    scope: "*",
    severity: "warning",
    description: "Base config is configured to trust system certificates.",
  },
  {
    no: 3,
    scope: "*",
    severity: "info",
    description: "Base config is configured to trustbundled certs @raw/go_daddy_class_2.",
  },
  {
    no: 4,
    scope: "*",
    severity: "none",
    description: "Base config is configured to trustbundled certs @raw/go_daddy_class_2.",
  },
];


const NetworkSecurity = () => {
  return (
      <CommonTable
        columnsData={columnsData}
        tableData={tableData}
        tableName="Network Security"
      />
  );
};

export default NetworkSecurity;
