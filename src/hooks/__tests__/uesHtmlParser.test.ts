import { renderHook } from "@testing-library/react";
import useHtmlParser from "../useHtmlParser";
const defaultHtml = '<p>This is a paragraph</p><ul><li>list</li></ul>'

describe('HOOKS: useHtmlParser', () => {
    
    it('Returns the correct dangerouslySetInnerHTML', () => {
        const { result } = renderHook(() => useHtmlParser({ html: defaultHtml }));
        expect(result.current).toHaveProperty('props.dangerouslySetInnerHTML.__html', defaultHtml);
    });
});
