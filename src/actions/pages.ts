import { fetchAllPages } from "../api/pages";
import { AppActions } from "../reducers/reducer";

export const setAllPages = async (dispatch: React.Dispatch<AppActions>) => {
    return fetchAllPages().then(pages => {
        //push this into state with the reducer
        return dispatch({ type: 'setPages', data: { pages }});

    });
}
