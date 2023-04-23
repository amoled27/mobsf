// FileAnalysis
import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "SR_NO",
    accessor: "no",
  },
  {
    Header: "DESCRIPTION",
    accessor: "issue",
  },
  {
    Header: "FILES",
    accessor: "files",
  },
];

const tableData = [
  {
    no: 1,
    issue: "Certificate/Key files hardcoded inside the app.",
    files: ["META-INF/services/java.security.Provider","res/raw/go_daddy_class_2.pem","res/raw/go_daddy_root_g2.pem"]
  }
];

const FileAnalysis = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="File Analysis"
      isLink={false}
    />
  );
};

export default FileAnalysis;
