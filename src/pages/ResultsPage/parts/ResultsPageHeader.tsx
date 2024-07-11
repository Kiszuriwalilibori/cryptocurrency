import React from "react";

interface Props {
    text: string;
}

export const ResultsPageHeader = (props: Props) => {
    const { text } = props;
    return (
        <h1 role="banner" className="sr-only">
            {text}
        </h1>
    );
};

export default React.memo(ResultsPageHeader);
