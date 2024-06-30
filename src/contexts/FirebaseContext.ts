import { createContext, useContext } from "react";

export const FirebaseContext = createContext({});
export const FirebaseDispatchContext = createContext<React.Dispatch<any>>(() => {});

export function useFirebaseDispatch() {
    return useContext(FirebaseDispatchContext);
}