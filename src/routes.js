import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdInfo,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";

const routes = [
  {
    name: "Information",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdInfo} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  }
];

export default routes;
