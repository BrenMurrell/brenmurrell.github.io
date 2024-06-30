
export interface AppActions {
    type: 'setPages' | 'setIsLoading',
    data: Content
}

export const initialState: Content = {
    pages: [],
    isLoading: true
}


const reducer  = (state: Content, action: AppActions) => {
    console.log('running action', action)
    switch (action.type) {
        case 'setPages': {
            return {
                ...state,
                pages: action.data.pages
            }
            break;
        }
        case 'setIsLoading': {
            return {
                ...state,
                isLoading: action?.data?.isLoading
            }
            break;
        }

        default: {
            return state;
        }
    }
};

export default reducer;