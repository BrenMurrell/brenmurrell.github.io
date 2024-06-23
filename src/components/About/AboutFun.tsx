
import React from 'react';
import Card from "../Card/Card";

interface AboutFunProps {
    title?: string,
}

const AboutFun: React.FC<AboutFunProps> = ({
    title = 'What ado I do for fun?'
}) => {
    return (
        <>
            <h2>{title}</h2>
            <Card title="Front-end development" children={[<p>Front end details</p>]} />
            <Card title="Testing" children={[<p>Testing details</p>]} />
            <Card title="Accessibility" children={[<p>Accessibility details</p>]} />
            <Card title="Mentoring &amp; Leading" children={[<p>Mentoring</p>]} />
        </>
    );
};

export default AboutFun;