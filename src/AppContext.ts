import { createContext } from "react";
import { Content } from "../content";

export const AppContext = createContext<Content>({ pages: []});
