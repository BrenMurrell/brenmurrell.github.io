import { fetchAllPages } from "../api/pages";
import { AppActions } from "../reducers/reducer";
// import pages from '../mocks/data/pages.json';

export const setAllPages = async (dispatch: React.Dispatch<AppActions>) => {
    // if (process.env.NODE_ENV !== 'development') {
        return fetchAllPages().then(pages => {
            //push this into state with the reducer
            return dispatch({ type: 'setPages', data: { pages, isLoading: false }});
        });
    // } else {
    //     const pagesList = pages.map(doc => doc.document.fields);
    //     pagesList.sort((a, b) => Number(a.order.integerValue) - Number(b.order.integerValue));
    //     return (pagesList);
    //     // return dispatch({ type: 'setPages', data: { pages: content, isLoading: false }})
    // }
}
