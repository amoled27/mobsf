import React from "react";
import xmlFile from "assets/img/dashboards/xmlfile.png";
import apk from "assets/img/dashboards/apk.png";
import java from "assets/img/dashboards/java.png";
import smali from "assets/img/dashboards/smali.png";
import source from "assets/img/dashboards/source.png";
import smaliCode from "assets/img/dashboards/smalicode.png";
import certificate from "assets/img/dashboards/certificate.png"

const FileCard = ({ icon, fileName }) => {
  const fileIconMap = {
    xmlFile,
    apk,
    java,
    smali,
    source,
    smaliCode,
    certificate
  };
  return (
    <div className="file-card">
      <img src={fileIconMap[icon]} />
      <p>{fileName}</p>
    </div>
  );
};

export default FileCard;
