const useHtmlParser = ({ html }: { html: string | undefined }) => {
    return (
        html && <div dangerouslySetInnerHTML={{ __html: html }} />
    );
};

export default useHtmlParser
