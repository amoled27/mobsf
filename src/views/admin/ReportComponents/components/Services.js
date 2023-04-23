import TextBlock from "components/textBlock/TextBlock";
import React from "react";

const data = `androidx.window.extensions
androidx.window.sidecar`;

const ComponentServices = () => {
    return <TextBlock data={data} textBlockName="Services"/>
}

export default ComponentServices;