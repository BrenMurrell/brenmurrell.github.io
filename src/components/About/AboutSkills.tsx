
import React from 'react';
import Card from "../Card/Card";

interface AboutSkillsProps {
    title?: string,
}

const AboutSkills: React.FC<AboutSkillsProps> = ({
    title = 'What are my core skills?'
}) => {
    // Add your component logic here

    return (
        <>
            <h2>{title}</h2>
            <p>
                First and foremost, I am a skilled front-end practioner with over 15 years experience
                working in web development, and over 25 years of experience working in IT. Among my skills I
                pride myself on:
            </p>
            <ul>
                <li>Front-end development</li>
                <li>Testing</li>
                <li>Accessibility</li>
                <li>Mentoring and leading teams of developers</li>
            </ul>
            <Card title="Front-end development" children={[<p>Front end details</p>]} />
            <Card title="Testing" children={[<p>Testing details</p>]} />
            <Card title="Accessibility" children={[<p>Accessibility details</p>]} />
            <Card title="Mentoring &amp; Leading" children={[<p>Mentoring</p>]} />
        </>
    );
};

export default AboutSkills;