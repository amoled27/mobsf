import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "TITLE",
    accessor: "title",
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
    title: "Application vulnerable to Janus Vulnerability",
    severity: "high",
    description:
      "	Application is signed with v1 signature scheme, making it vulnerable to Janus vulnerability on Android 5.0-8.0, if signed only with v1 signature scheme. Applications running on Android 5.0-7.0 signed with v1, and v2/v3 scheme is also vulnerable.",
  },
  {
    title: "Certificate algorithm might be vulnerable to hash collision",
    severity: "warning",
    description: "Application is signed with SHA1withRSA. SHA1 hash algorithm is known to have collision issues. The manifest file indicates SHA256withRSA is in use.",
  },
  {
    title: "Signed Application",
    severity: "info",
    description:
      "	Application is signed with v1 signature scheme, making it vulnerable to Janus vulnerability on Android 5.0-8.0, if signed only with v1 signature scheme. Applications running on Android 5.0-7.0 signed with v1, and v2/v3 scheme is also vulnerable.",
  },
];

const CertificateAnalysis = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="Certificate Analysis"
      hasStatistics={true}
    />
  );
};

export default CertificateAnalysis;
