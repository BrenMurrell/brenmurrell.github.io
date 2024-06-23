import useContent from "@/hooks/useContent";
import React, { useEffect, useState } from 'react';
import { type Page } from "../../../content";
import useHtmlParser from "@/hooks/useHtmlParser";
import Section from "./Section";
import { useLocation } from 'react-router-dom';

type PageProps = {
    searchString: string;
}

const Page = ({ searchString }: PageProps) => {
    const pageContent = useContent(searchString);
    const { title, intro, sections } = pageContent;
    
    return (
        <section>
            <header>
                <h1>{title}</h1>
                {useHtmlParser({ html: intro})}
            </header>
            {sections && sections.map((section, index) => (
                <Section key={index} {...section}/>
            ))}
        </section>
    );
};

export default Page;