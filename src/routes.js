import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdAndroid,
  MdInfo, MdList,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Permissions from "views/admin/permissions/components/Permissions";
import AndroidAPI from "views/admin/androidAPI";

const routes = [
  {
    name: "Information",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdInfo} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Permissions",
    layout: "/admin",
    path: "/permissions",
    icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
    component: Permissions,
  },
  {
    name: "Android API",
    layout: "/admin",
    path: "/android",
    icon: <Icon as={MdAndroid} width='20px' height='20px' color='inherit' />,
    component: AndroidAPI,
  }
];

export default routes;
