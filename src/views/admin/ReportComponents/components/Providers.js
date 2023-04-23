import TextBlock from "components/textBlock/TextBlock";
import React from "react";

const data = `androidx.window.extensions
androidx.window.sidecar`;

const ComponentProviders = () => {
    return <TextBlock data={data} textBlockName="Providers"/>
}

export default ComponentProviders;