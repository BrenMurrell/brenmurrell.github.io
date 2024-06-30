import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import { AppContext } from "../../AppContext";
// import useString from "../../hooks/useString";

const Navigation: React.FC = () => {
    const path = useLocation().pathname;
    const content = useContext(AppContext);
    // const { slug } = useString();
    
    return (
        <nav className="nav nav__header">
            {content?.pages?.map((page) => (
                !page.hidden && <Link key={page.title} to={page.slug} className={path === `${page.slug}` ? 'active' : ''}>{page.title}</Link>
            ))}
        </nav>
    );
};

export default Navigation;