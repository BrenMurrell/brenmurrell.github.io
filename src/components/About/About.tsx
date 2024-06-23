import Card from "../Card/Card";
import AboutSkills from "./AboutSkills";

const About = () => {
    // Your code here

    return (
        <>
            <h1>About me</h1>
            <p>
                Hi! I'm Bren, and I'm a Senior Front End Developer who is passionate about
                building robust, accessible software while empowering my teams to become
                strongly capable, compassionate developers.
            </p>
            <h2>What do I care about?</h2>
            <Card 
                title='People.'
                children={[<p>
                    As a developer, people are the heart of everything I do. I don't build software
                    for the sake of building software. I build software to help people. <em>All</em> people.
                    It's my duty as a developer to make sure that my deliverables are accessible to everyone through
                    empathy and a deep understanding of WCAG standards. It's also my duty to 
                    build and enable capable, diverse and inclusive teams that can deliver robust, thoughtfully designed
                    and rigoursouly tested projects.
                </p>]}
            />
            
            <AboutSkills />
        </>
    );
};

export default About;