import React from "react";
import PermissionsTable from "./PermissoinsTable";
import { Box } from "@chakra-ui/react";
const columnsData = [
  {
    Header: "PERMISSION",
    accessor: "name",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "INFO",
    accessor: "info",
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
  },
];

const tableData = [
  {
    name: "android.permission.ACCESS_COARSE_LOCATION",
    status: "signature",
    info: "coarse (network-based) location",
    description:
      "Access coarse location sources, such as the mobile network database, to determine an approximate phone location, where available. Malicious applications can use this to determine approximately where you are.",
  },
  {
    name: "android.permission.ACCESS_FINE_LOCATION",
    status: "dangerous",
    info: "fine (GPS) location",
    description:
      "Access fine location sources, such as the Global Positioning System on the phone, where available. Malicious applications can use this to determine where you are and may consume additional battery power.",
  },
  {
    name: "android.permission.ACCESS_NETWORK_STATE",
    status: "SignatureOrSystem",
    info: "view network status",
    description: "Allows an application to view the status of all networks.",
  },
  {
    name: "android.permission.ACCESS_WIFI_STATE",
    status: "signature",
    info: "view Wi-Fi status",
    description:
      "Allows an application to view the information about the status of Wi-Fi.",
  },
  {
    name: "android.permission.BATTERY_STATS",
    status: "normal",
    info: "modify battery statistics",
    description:
      "Allows the modification of collected battery statistics. Not for use by common applications.",
  },
  {
    name: "android.permission.CALL_PHONE",
    status: "dangerous",
    info: "directly call phone numbers",
    description:
      "Allows the application to call phone numbers without your intervention. Malicious applications may cause unexpected calls on your phone bill. Note that this does not allow the application to call emergency numbers.",
  },
  {
    name: "android.permission.CAMERA",
    status: "dangerous",
    info: "take pictures and videos",
    description:
      "Allows application to take pictures and videos with the camera. This allows the application to collect images that the camera is seeing at any time.",
  },
  {
    name: "android.permission.CHANGE_CONFIGURATION",
    status: "normal",
    info: "change your UI settings",
    description:
      "Allows an application to change the current configuration, such as the locale or overall font size.",
  },
];
const Permissions = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <PermissionsTable columnsData={columnsData} tableData={tableData} />
    </Box>
  );
};

export default Permissions;
