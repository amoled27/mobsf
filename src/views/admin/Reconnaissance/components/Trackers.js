import React from "react";

import CommonTable from "components/table/CommonTable";
import AppConstants from "appConstants";

const columnsData = [
  {
    Header: "TRACKER NAME",
    accessor: "tracker",
  },
  {
    Header: "CATEGORIES",
    accessor: "categories",
  },
  {
    Header: "URL",
    accessor: "url",
  },
];

const tableData = [
  {
    tracker: "Adjust",
    categories: "Analytics",
    url: ["https://reports.exodus-privacy.eu.org/trackers/52"]
  },
  {
    tracker: "Bugly",
    categories: "",
    url: ["https://reports.exodus-privacy.eu.org/trackers/52"]
  },
  {
    tracker: "Facebook Analytics",
    categories: "Analytics",
    url: ["https://reports.exodus-privacy.eu.org/trackers/52"]
  },
  {
    tracker: "Facebook Login",
    categories: "Identification",
    url: ["https://reports.exodus-privacy.eu.org/trackers/52"]
  }
]

const Trackers = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="Trackers"
      prefix={AppConstants.fileURLPrefix}
    />
  );
};

export default Trackers;
