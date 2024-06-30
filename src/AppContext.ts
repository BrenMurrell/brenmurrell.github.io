import { createContext } from "react";
import { AppActions } from "./reducers/reducer";

export const AppContext = createContext<Content>({ pages: [], isLoading: true });
export const AppDispatchContext = createContext<React.Dispatch<AppActions>>(() => {});
