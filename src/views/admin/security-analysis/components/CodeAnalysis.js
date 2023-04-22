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
    accessor: "standards",
  },
  {
    Header: "FILES",
    accessor: "files",
  },
  {
    Header: "OPTIONS",
    accessor: "options",
  },
];

const tableData = [
  {
    no: 1,
    issue: "The App logs information. Sensitive information should never be logged.",
    severity: "warning",
    standards: "CWE: CWE-532: Insertion of Sensitive Information into Log File OWASP MASVS: MSTG-STORAGE-3",
    files: ["com/as/keylogger/AccSvc.java", "com/as/keylogger/MainActivity.java"],
    options: true
  },
  {
    no: 2,
    issue: "The App logs information. Sensitive information should never be logged.",
    severity: "info",
    standards: "CWE: CWE-532: Insertion of Sensitive Information into Log File OWASP MASVS: MSTG-STORAGE-3",
    files: ["com/as/keylogger/AccSvc.java", "com/as/keylogger/MainActivity.java"],
    options: true
  },
  {
    no: 3,
    issue: "The App logs information. Sensitive information should never be logged.",
    severity: "info",
    standards: "CWE: CWE-532: Insertion of Sensitive Information into Log File OWASP MASVS: MSTG-STORAGE-3",
    files: ["com/as/keylogger/AccSvc.java", "com/as/keylogger/MainActivity.java"],
    options: true
  },
];

const CodeAnalysis = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="Code Analysis"
    />
  );
};

export default CodeAnalysis;
