import TextBlock from "components/textBlock/TextBlock";
import React from "react";

const data = `androidx.window.extensions
androidx.window.sidecar`;

const ComponentLibraries = () => {
    return <TextBlock data={data} textBlockName="Libraries"/>
}

export default ComponentLibraries;