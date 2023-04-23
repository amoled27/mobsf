import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "SR_NO",
    accessor: "no",
  },
  {
    Header: "INDENTIFIER",
    accessor: "identifier",
  },
  {
    Header: "REQUIREMENT",
    accessor: "requirement",
  },
  {
    Header: "FEATURE",
    accessor: "feature",
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
  },
];

const tableData = [
  {
    no: 1,
    identifier: "FCS_STO_EXT.1.1",
    requirement: "Security Functional Requirements",
    feature: "Storage of Credentials",
    description:
      "The application does not store any credentials to non-volatile memory.",
  }
];

const NIAPAnalysis = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="NIAP Analysis"
    />
  );
};

export default NIAPAnalysis;
