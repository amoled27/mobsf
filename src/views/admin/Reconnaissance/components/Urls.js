// FileAnalysis
import React from "react";

import CommonTable from "components/table/CommonTable";
import AppConstants from "appConstants";

const columnsData = [
  {
    Header: "URL",
    accessor: "urls",
  },
  {
    Header: "FILES",
    accessor: "files",
  },
];

const tableData = [
  {
    urls: [
      "http://b.scorecardresearch.com/p2",
      "https://sb.scorecardresearch.com/p2",
      "http://udm.scorecardresearch.com/offline",
      "https://udm.scorecardresearch.com/offline",
    ],
    files: ["lib/armeabi-v7a/libcomScore.so"],
  },
];

const URLs = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="URLs"
      prefix={AppConstants.fileURLPrefix}
    />
  );
};

export default URLs;
