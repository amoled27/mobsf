import { Box } from "@chakra-ui/react";
import React from "react";

import CommonTable from "components/table/CommonTable";

const columnsData = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "FILES",
    accessor: "files",
  },
];
const apiData = [
  {
    name: "Android Notifications",
    files: [
      "com/bumptech/glide/request/target/NotificationTarget.java",
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/DownloadUtil.java",
    ],
  },
  {
    name: "Base64 Decode",
    files: [
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/ImageUtil.java",
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/encrypt/AesUtil.java",
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/encrypt/RsaUtil.java",
      "com/qiniu/android/utils/UrlSafeBase64.java",
    ],
  },
  {
    name: "Base64 Encode",
    files: [
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/ImageUtil.java",
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/encrypt/AesUtil.java",
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/encrypt/RsaUtil.java",
      "com/qiniu/android/utils/UrlSafeBase64.java",
      "com/ta/utdid2/b/a/c.java",
    ],
  },
  {
    name: "Certificate Handling",
    files: ["com/xuexiang/xhttp2/https/HttpsUtils.java"],
  },
  {
    name: "Ceontent Provider",
    files: ["com/xuexiang/xhttp2/https/HttpsUtils.java"],
  },
  {
    name: "Crypto",
    files: [
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/encrypt/AesUtil.java",
      "com/onlineloan/credit/rupee/loan/pakistan/quick/bakhabarloan/cash/utils/encrypt/RsaUtil.java",
      "com/qiniu/android/dns/http/DnspodEnterprise.java",
      "com/qiniu/android/dns/util/DES.java",
      "com/ta/utdid2/b/a/a.java",
      "okio/ByteString.java",
    ],
  },
  {
    name: "Get Cell Information",
    files: ["com/qiniu/android/utils/AndroidNetwork.java"],
  },
  {
    name: "Get Installed Applications",
    files: ["com/xuexiang/xhttp2/https/HttpsUtils.java"],
  },
  {
    name: "Get Network Interface Information",
    files: ["com/xuexiang/xhttp2/https/HttpsUtils.java"],
  },
];
const AndroidAPI = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <CommonTable columnsData={columnsData} tableData={apiData} tableName="API Table"/>
    </Box>
  );
};

export default AndroidAPI;
