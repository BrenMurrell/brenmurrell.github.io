import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import { AppContext } from "@/AppContext";
import useString from "@/hooks/useString";

const Navigation: React.FC = () => {
    const path = useLocation().pathname;
    const content = useContext(AppContext);
    const { slug } = useString();
    
    return (
        <nav className="nav nav__header">
            <Link to={''} className={path === '/' ? 'active' : ''}>Home</Link>
            {content?.pages?.map((page) => (
                !page.hidden && <Link to={slug(page.title)} className={path === `/${slug(page.title)}` ? 'active' : ''}>{page.title}</Link>
            ))}
        </nav>
    );
};

export default Navigation;