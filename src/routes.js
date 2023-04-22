import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdAndroid,
  MdInfo, MdList, MdLocalActivity, MdSecurity,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Permissions from "views/admin/permissions/components/Permissions";
import AndroidAPI from "views/admin/androidAPI";
import BrowsableActivities from "views/admin/browsable-activities";
import SecurityAnalysis from "views/admin/security-analysis";

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
  },
  {
    name: "Browsable Activities",
    layout: "/admin",
    path: "/browsable-activities",
    icon: <Icon as={MdLocalActivity} width='20px' height='20px' color='inherit' />,
    component: BrowsableActivities,
  },
  {
    name: "Network Security",
    layout: "/admin",
    path: "/network-security",
    icon: <Icon as={MdSecurity} width='20px' height='20px' color='inherit' />,
    component: SecurityAnalysis,
  }
];

export default routes;
