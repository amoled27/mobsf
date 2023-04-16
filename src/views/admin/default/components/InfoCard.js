import React from "react";
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import "./style.scss";

const InfoCard = ({ count, text, exportedCount, color, icon }) => {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <div className="info-card" style={{backgroundColor : color}}>
      <Flex className="info-card-flex">
        <h2>{count}</h2>
        <p>{text}</p>
      </Flex>
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={icon} color={brandColor} />}
          />
        }
        name={`Exported ${text}`}
        value={exportedCount}
      />
    </div>
  );
};

export default InfoCard;
