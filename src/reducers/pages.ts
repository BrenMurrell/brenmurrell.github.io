
export interface PageActions {
    type: 'setPages',
    deviceId?: string,    
}


export const pagesReducer = (data = {}, action: PageActions) => {
    console.log('running action', action)
    switch (action.type) {
        case 'setPages': {
            return {
                ...data,
            }
        }
        default: {
            return data;
        }
    }
};
