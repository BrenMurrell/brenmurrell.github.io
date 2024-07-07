import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import { AppContext } from "../../AppContext";

const Navigation: React.FC = () => {
    const path = useLocation().pathname;
    const content = useContext(AppContext);
    return (
        <nav className="nav nav__header">
            {content?.pages?.map((page) => (
                !page.isHidden && <Link key={page.title} to={page.slug} className={path === `${page.slug}` ? 'active' : ''}>{page.title}</Link>
            ))}
        </nav>
    );
};

export default Navigation;