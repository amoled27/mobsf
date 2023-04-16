import { Button, Flex, Icon } from "@chakra-ui/react";
import Card from "components/card/Card";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdOutlineManageSearch,
  MdOutlineRestartAlt,
  MdPlayCircle,
} from "react-icons/md";

import "./style.scss"
const ScanOptions = () => {
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex  className="functionality-buttons">
        <Button>
          <IconBox
            w="56px"
            h="56px"
            icon={<Icon w="32px" h="32px" as={MdOutlineRestartAlt} />}
          />
          Rescan
        </Button>
        <Button>
          <IconBox
            w="56px"
            h="56px"
            icon={<Icon w="32px" h="32px" as={MdOutlineManageSearch} />}
          />
          Manage Supressions
        </Button>
        <Button>
          <IconBox
            w="56px"
            h="56px"
            icon={<Icon w="32px" h="32px" as={MdPlayCircle} />}
          />
          Start Dynamic Analysis
        </Button>
      </Flex>
    </Card>
  );
};

export default ScanOptions;
