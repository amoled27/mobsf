import TextBlock from "components/textBlock/TextBlock";
import React from "react";

const data = `androidx.window.extensions
androidx.window.sidecar`;

const ComponentRecievers = () => {
    return <TextBlock data={data} textBlockName="Recievers"/>
}

export default ComponentRecievers;