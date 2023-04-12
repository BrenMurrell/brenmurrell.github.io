import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [loadedClass, setLoadedClass] = useState('');
    useEffect(() => {
        setLoadedClass(' module--loaded');
    }, []);

    return (
        <div className={`module module--hero${loadedClass}`}>
            <div className="hero">
                <div className={`hero__content hero-content`}>
                    <h1 className="hero__title">Bren Murrell</h1>
                    <h3 className="hero__subtitle">Full Stack Web Developer</h3>
                    <p className="hero__coming-soon">New site coming soon...</p>
                    {/* <div className="hero__buttons">
                        <Button title="About Bren" link="/about" />
                        <Button title="Case Studies" link="/case-studies" />

                    </div> */}
                </div>

            </div>
            {/* <MetaTags>
                <title>Bren Murrell | Full Stack Developer</title>
                <meta name="description"
                    content="Full stack nerd, React lover, user experience activist, coffee addict, gadget geek." />
                <meta property="og:title" content="Bren Murrell | Full Stack Developer" />
                <meta property="og:image" content="https://brenmurrell.github.io/img/og-bren-murrell.png" />
            </MetaTags> */}

        </div>
    )
};

export default Hero;
