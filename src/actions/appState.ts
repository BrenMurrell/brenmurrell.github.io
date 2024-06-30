import { AppActions } from "../reducers/reducer";

export const setLoadingState = async (dispatch: React.Dispatch<AppActions>, isLoading: boolean) => {
    return dispatch({ type: 'setIsLoading', data: { isLoading }});
}
