import React from "react";

import CommonTable from "components/table/CommonTable";
import AppConstants from "appConstants";

const columnsData = [
  {
    Header: "EMAIL",
    accessor: "emails",
  },
  {
    Header: "FILES",
    accessor: "files",
  },
];

const tableData = [
  {
    emails: [
      "_directory@14069316.fromrawpat",
      "_casterror@0150898._create",
      "_list@0150898.of",
      "_invocationmirror@0150898._withtype",
      "_typeerror@0150898._create",
      "ngstreamsubscription@4048458.zoned",
      "storationinformation@523124995.fromserial",
      "_list@0150898._ofgrowabl",
      "_assertionerror@0150898._create",
      "_list@0150898._ofefficie",
      "_compressednode@125137193.single",
      "_growablelist@0150898._ofarray",
      "_double@0150898.fromintege",
      "_growablelist@0150898._literal3",
      "_future@4048458.immediate",
      "_growablelist@0150898._literal",
      "_growablelist@0150898._ofother",
      "_uri@0150898.file",
      "_growablelist@0150898._literal1",
      "_uri@0150898.directory",
      "_link@14069316.fromrawpat",
      "_growablelist@0150898.withcapaci",
      "_timer@1026248._internal",
      "_growablelist@0150898._literal5",
      "_file@14069316.fromrawpat",
      "_growablelist@0150898._literal4",
      "_list@0150898._ofarray",
      "_timer@1026248.periodic",
      "_growablelist@0150898._literal2",
      "_growablelist@0150898._ofgrowabl",
      "_growablelist@0150898.of",
      "_hashcollisionnode@125137193.fromcollis",
      "_growablelist@0150898.generate",
      "_uri@0150898.notsimple",
      "_list@0150898.empty",
      "_growablelist@0150898._ofefficie",
      "_list@0150898._ofother",
      "_future@4048458.immediatee",
      "_bytebuffer@7027147._new",
    ],
    files: ["lib/armeabi-v7a/libapp.so"],
  },
];

const Emails = () => {
  return (
    <CommonTable
      columnsData={columnsData}
      tableData={tableData}
      tableName="Emails"
      prefix={AppConstants.fileURLPrefix}
    />
  );
};

export default Emails;
