const useString = () => {
    const slug = (text: string): string => {
        const slugifiedText = text.replace(/[^\w\s]/g, '').replace(/\s+/g, '-').toLowerCase();
        return slugifiedText;
    }

    return {
        slug
    }
}

export default useString;
